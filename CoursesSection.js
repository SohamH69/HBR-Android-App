// CoursesSection.js
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CoursesSection = () => {
  const courses = [
    {
      title: 'Web Development Fundamentals',
      rating: 4.8,
      learners: 1500,
      chip: 'Video lessons',
      image: require('../HbrApp/assets/React-JS-BCG-Banner.png'),
    },
    {
      title: 'Data Science Basics',
      rating: 4.5,
      learners: 1200,
      chip: 'Video lessons',
      image: require('../HbrApp/assets/React-JS-BCG-Banner.png'),
    },
    {
      title: 'Mobile App Development',
      rating: 4.7,
      learners: 1800,
      chip: 'Video lessons',
      image: require('../HbrApp/assets/React-JS-BCG-Banner.png'),
    },
    {
      title: 'UX/UI Design Principles',
      rating: 4.6,
      learners: 1300,
      chip: 'Video lessons',
      image: require('../HbrApp/assets/React-JS-BCG-Banner.png'),
    },
    {
      title: 'Cybersecurity Fundamentals',
      rating: 4.9,
      learners: 2000,
      chip: 'Video lessons',
      image: require('../HbrApp/assets/React-JS-BCG-Banner.png'),
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.heading}>Courses students are learning</Text>
        <TouchableOpacity style={styles.seeAllButton}>
          <Text style={styles.seeAllButtonText}>See All</Text>
          <Ionicons name="chevron-forward" size={20} color="#007BFF" />
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {courses.map((course, index) => (
          <View key={index} style={styles.card}>
            <View style={styles.cardContent}>
              <View style={styles.leftContent}>
                <Text style={styles.cardTitle}>{course.title}</Text>
                <View style={styles.ratingContainer}>
                <View style={styles.ratingContent}>
                    <Ionicons name="star" size={16} color="#FFD700" />
                    <Text style={styles.ratingText}>{course.rating}</Text>
                  </View>
                  <Text style={styles.separator}>·</Text>
                  <Text style={styles.learnersText}>{course.learners} learners</Text>
                </View>
                <Text style={styles.chip}>{course.chip}</Text>
              </View>
              <Image source={course.image} style={styles.cardImage} />
            </View>
          </View>
        ))}
      </View>
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
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  card: {
    width: '100%', // Adjust as needed
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 16,
    elevation: 3,
  },
  cardContent: {
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  ratingContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  separator: {
    marginHorizontal: 5, // Adjust the margin as needed
    fontSize: 20,
    color: 'gray',
  },
  ratingText: {
    marginLeft: 5,
  },
  learnersText: {
    marginBottom: 5,
    marginTop:5,
  },
  chip: {
    backgroundColor: '#007BFF',
    color: 'white',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 20,
    marginTop: 5,
    width:110,
  },
  cardImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
});

export default CoursesSection;
