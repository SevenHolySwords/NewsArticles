
    import React from 'react';
    import 'react-native-gesture-handler';
    import { Text, View, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
    import { styles } from '../navigation/index';
    export default function DairyScreen() {
        const items = [
          { name: 'Participate in Orishaland', image: '../assets/images/Handshake.jpg' },
          { name: 'Opportunities', image: '../assets/images/Hand.png' },
          { name: 'Action/Support Groups', image: '../assets/images/fist.jpg' },
           ];
        return (
          <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Fresh dairy products for you from folders</Text>
            {items.map((item, index) => (
              <View key={index} style={styles.itemContainer}>
                <Image source={{uri:item.image}} style={styles.image} />
                <View style={styles.details}>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.price}>{item.price}</Text>
                  <TouchableOpacity style={styles.button} onPress={() => alert(`${item.name} added to cart`)}>
              <Text style={styles.buttonText}>Learn More</Text>
            </TouchableOpacity>
                </View>
              </View>
            ))}
          </ScrollView>
        );
      }