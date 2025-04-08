import 'react-native-gesture-handler';
import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Added import
import { styles } from '../navigation/index';

export default function FruitsScreen() {
    const navigation = useNavigation(); // Access navigation object

    const fruits = [
        { name: 'Heart rate', screen: 'Heart rate', image: '../assets/images/heartbeat_image.png' },
        { name: 'Stress trends', screen: 'Stress trends', image: '../assets/images/Zen_rock.jpg' },
        { name: 'Maslow Pyramid', screen: 'Maslow Pyramid', image: '../assets/images/Maslow.jpg' },
        { name: 'Surveys', screen: 'Surveys', image: '../assets/images/word.jpg' },
    ];

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Biometrics and Profile</Text>
            {fruits.map((fruit, index) => (
                <View key={index} style={styles.itemContainer}>
                    <Image source={{ uri: fruit.image }} style={styles.image} />
                    <View style={styles.details}>
                        <Text style={styles.name}>{fruit.name}</Text>
                        {/* Removed fruit.price as it is undefined */}
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => navigation.navigate(fruit.screen)} // Navigate to the correct screen
                        >
                            <Text style={styles.buttonText}>Learn More</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            ))}
        </ScrollView>
    );
}