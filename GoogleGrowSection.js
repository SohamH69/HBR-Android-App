// GoogleGrowSection.js
import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const GoogleGrowSection = () => {
  const googleGrowData = [
    {
      title: 'Introduction to Web Development',
      rating: 4.8,
      chip: 'Beginner',
      image: require('../HbrApp/assets/React-JS-BCG-Banner.png'),
    },
    {
      title: 'Machine Learning Fundamentals',
      rating: 4.6,
      chip: 'Intermediate',
      image: require('../HbrApp/assets/React-JS-BCG-Banner.png'),
    },
    {
      title: 'Mobile App Design Workshop',
      rating: 4.7,
      chip: 'Advanced',
      image: require('../HbrApp/assets/React-JS-BCG-Banner.png'),
    },
    {
      title: 'Cloud Computing Basics',
      rating: 4.5,
      chip: 'Intermediate',
      image: require('../HbrApp/assets/React-JS-BCG-Banner.png'),
    },
    {
      title: 'Digital Marketing Essentials',
      rating: 4.9,
      chip: 'Advanced',
      image: require('../HbrApp/assets/React-JS-BCG-Banner.png'),
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.heading}>Grow with Google</Text>
        <TouchableOpacity style={styles.seeAllButton}>
          <Text style={styles.seeAllButtonText}>See All</Text>
          <Ionicons name="chevron-forward" size={20} color="#007BFF" />
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.cardsContainer}>
          {googleGrowData.map((item, index) => (
            <View key={index} style={styles.card}>
              <Image source={item.image} style={styles.cardImage} />
              <Text style={styles.cardTitle}>{item.title}</Text>
              <View style={styles.ratingContainer}>
                <View style={styles.ratingContent}>
                  <Ionicons name="star" size={16} color="#FFD700" />
                  <Text style={styles.ratingText}>{item.rating}</Text>
                </View>
                <Text style={styles.separator}>·</Text>
                <Text style={styles.chip}>{item.chip}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginTop: 20,
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginBottom: 50,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  seeAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  seeAllButtonText: {
    color: '#007BFF',
    marginRight: 5,
  },
  cardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap:10,
  },
  card: {
    width: 150, // Adjust as needed
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 16,
    marginRight: 10,
    elevation: 3,
  },
  cardImage: {
    width: '100%',
    height: 100,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    resizeMode: 'cover',
  },
  cardTitle: {
    padding: 8,
    fontSize: 14,
    fontWeight: 'bold',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingBottom: 8,
  },
  ratingContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    marginLeft: 5,
  },
  separator: {
    marginHorizontal: 5,
    fontSize: 12,
    color: 'gray',
  },
  chip: {
    backgroundColor: '#007BFF',
    color: 'white',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 10,
    marginLeft: 5,
  },
});

export default GoogleGrowSection;
