import 'react-native-gesture-handler';
import React from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView,StyleSheet } from 'react-native';
import { styles } from '../navigation/index';
export default function VegetablesScreen() {
    const vegetables = [
      { name: 'Orishans in Your Area', image: '../assets/images/people.jpg' },
      { name: 'Events in Your Area', image: '../assets/images/Event.jpg' },
      { name: 'Orishan Cities', image: '../assets/images/city.jpg' }, ];
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Fresh vegetables directy from farmers land</Text>
        {vegetables.map((vegetable, index) => (
          <View key={index} style={styles.itemContainer}>
            <Image source={{ uri: vegetable.image }} style={styles.image} />
            <View style={styles.details}>
              <Text style={styles.name}>{vegetable.name}</Text>
              <Text style={styles.price}>{vegetable.price}</Text>
              <TouchableOpacity style={styles.button} onPress={() => alert(`${vegetable.name} added to cart`)}>
            <Text style={styles.buttonText}>Go</Text>
          </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    );
  }