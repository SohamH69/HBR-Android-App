// HomeScreen.js
import React, {useState, useEffect, useRef} from 'react';
import { View, Text, Image,  TouchableOpacity, StyleSheet, FlatList, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Banner from './Banner'; // Import the Banner component
import TopCategories from './TopCategories'; // Import the TopCategories component
import RecommendationsSection from './RecommendationsSection';
import CoursesSection from './CoursesSection';
import { ScrollView } from 'react-native-gesture-handler';
import GoogleGrowSection from './GoogleGrowSection';
import NavigationBar from './NavigationBar';

const { width } = Dimensions.get('window');

const HomeScreen = () => {

    const [activeTab, setActiveTab] = useState('Home');

    const handleTabPress = (tab) => {
        // Handle navigation or other actions based on the pressed tab
        setActiveTab(tab);
      };

    const images = [
        require('../HbrApp/assets/237-536x354.jpg'),
        require('../HbrApp/assets/866-536x354.jpg'),
        require('../HbrApp/assets/1084-536x354-grayscale.jpg'),
        // Add more images as needed
      ];

  return (
    <View style={styles.container}>
      {/* AppBar */}
      <View style={styles.appBar}>
        <Image source={require('./assets/HBR_logo.jpg')} style={styles.logo} />
        <TouchableOpacity style={styles.searchIconContainer}>
          <Ionicons name="search" size={24} color="white" />
        </TouchableOpacity>
      </View>
    <ScrollView>
      {/* Banner */}
      <View style={styles.banner}>
      <Banner images={images} />
      </View>

{/* Top Categories */}
      <View>
      <TopCategories />
      </View>

      <View>
        {/* Recommendations Section */}
      <RecommendationsSection />
      </View>

<View>
     {/* Courses Section */}
     <CoursesSection />
</View>

<View>
    <GoogleGrowSection />
</View>
</ScrollView>
<View><NavigationBar activeTab={activeTab} onTabPress={handleTabPress} /></View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      appBar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#007BFF', // Blue color
        paddingVertical: 10,
        paddingHorizontal: 16,
      },
      logo: {
        width: 100,
        height: 40,
        marginLeft: 5,
        resizeMode: 'contain',
      },
      searchIconContainer: {
        marginLeft: 'auto',
      },
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

export default HomeScreen;
