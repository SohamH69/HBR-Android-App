// TopCategories.js
import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const TopCategories = () => {
  const categories = ['Data Science', 'Software Development', 'Cyber Security', 'Project Management'];

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Top Categories</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((category, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.categoryText}>{category}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginRight: 10,
    padding: 15,
    minWidth: 120,
    elevation: 3,
  },
  categoryText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default TopCategories;
