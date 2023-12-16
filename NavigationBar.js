import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';




const NavigationBar = ({ activeTab, onTabPress }) => {
  return (
    <View style={styles.navigationBar}>
      <TouchableOpacity style={styles.tabButton} onPress={() => onTabPress('Home')}>
        <Ionicons
          name={activeTab === 'Home' ? 'home' : 'home-outline'}
          size={24}
          color={activeTab === 'Home' ? '#007BFF' : 'gray'}
        />
        <Text style={[styles.tabText,{ color: activeTab === 'Home' ? '#007BFF' : 'gray' }]}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.tabButton} onPress={() => onTabPress('Courses')}>
        <Ionicons
          name={activeTab === 'Courses' ? 'book' : 'book-outline'}
          size={24}
          color={activeTab === 'Courses' ? '#007BFF' : 'gray'}
        />
        <Text style={styles.tabText[{ color: activeTab === 'Courses' ? '#007BFF' : 'gray' }]}>Courses</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navigationBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: 'gray',
    paddingVertical: 8,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  tabButton: {
    alignItems: 'center',
  },
  tabText: {
    marginTop: 4, // Adjust this value to fine-tune the vertical alignment
  },
});

export default NavigationBar;
