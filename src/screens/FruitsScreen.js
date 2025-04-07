import 'react-native-gesture-handler';
    import React from 'react';
    import { Text, View, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
    import { styles } from '../navigation/index';
    export default function FruitsScreen() {
        const fruits = [
          { name: 'Heart rate', image: '../assets/images/heartbeat_image.png'},
          { name: 'Stress trends', image: '../assets/images/Zen_rock.jpg' },
          { name: 'Maslow Pyramid', image: '../assets/images/Maslow.jpg' },
          { name: 'Surveys', image: '../assets/images/word.jpg' },];
        return (
          <ScrollView style={styles.container}>
            <Text style={styles.title}>Biometrics and Profile </Text>
            {fruits.map((fruit, index) => (
              <View key={index} style={styles.itemContainer}>
                <Image source={{ uri: fruit.image }} style={styles.image} />
                <View style={styles.details}>
                  <Text style={styles.name}>{fruit.name}</Text>
                  <Text style={styles.price}>{fruit.price}</Text>
                  <TouchableOpacity style={styles.button} onPress={() => alert(`${fruit.name} added to cart`)}>
                <Text style={styles.buttonText}>Learn More</Text>
              </TouchableOpacity>
                </View>
              </View>
            ))}
          </ScrollView>
        );
      }