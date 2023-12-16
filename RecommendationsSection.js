// RecommendationsSection.js
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const RecommendationsSection = () => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.heading}>Let's find the right course for you!</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Get Recommendations</Text>
          </TouchableOpacity>
        </View>
        <Image
          source={require('../HbrApp/assets/woman-sitting-with-laptop-concept-illustration-for-working-studying-education-work-from-home-healthy-lifestyle-can-use-for-backgrounds-infographics-hero-images-flat-illustration-vector.jpg')}
          style={styles.image}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ADD8E6', // Light blue color
    paddingVertical: 20,
    paddingHorizontal: 16,
    marginTop: 20,

  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textContainer: {
    flex: 1,
    marginRight: 10,
  },
  gap:{
    width: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007BFF', // Blue color
    paddingVertical: 10, // Decrease vertical padding
    paddingHorizontal: 0, // Decrease horizontal padding
    borderRadius: 8,
    width: 200,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});

export default RecommendationsSection;
