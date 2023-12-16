// Banner.js
import React, { useState, useEffect, useRef } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, FlatList, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const Banner = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const bannerRef = useRef(null);

  const changeImage = (index) => {
    bannerRef.current.scrollToIndex({ index, animated: true });
    setCurrentImageIndex(index);
  };

  const renderPaginationDots = () => {
    return (
      <View style={styles.paginationDots}>
        {images.map((_, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.dot,
              { backgroundColor: index === currentImageIndex ? '#007BFF' : '#ccc' },
            ]}
            onPress={() => changeImage(index)}
          />
        ))}
      </View>
    );
  };

  const renderItem = ({ item }) => (
    <Image source={item} style={styles.bannerImage} />
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newIndex = (currentImageIndex + 1) % images.length;
      bannerRef.current.scrollToIndex({ index: newIndex, animated: true });
      setCurrentImageIndex(newIndex);
    }, 3000); // Change the interval as needed (3000 milliseconds = 3 seconds)

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [currentImageIndex, images.length]);

  return (
    <View>
      {/* Banner */}
      <FlatList
        ref={bannerRef}
        data={images}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(event) => {
          const newIndex = Math.round(event.nativeEvent.contentOffset.x / width);
          setCurrentImageIndex(newIndex);
        }}
        style={styles.banner}
      />

      {/* Pagination Dots */}
      {renderPaginationDots()}
    </View>
  );
};

const styles = StyleSheet.create({
  banner: {
    height: 200, // Adjust as needed
  },
  bannerImage: {
    width,
    height: 200, // Adjust as needed
    resizeMode: 'cover',
  },
  paginationDots: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
});

export default Banner;
