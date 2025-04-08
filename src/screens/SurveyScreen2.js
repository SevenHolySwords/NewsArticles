import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import SurveyComponent from '../components/SurveyComponent';
import { styles } from '../navigation/index';
import { useNavigation } from '@react-navigation/native'; // Added import

//const survey= SurveyComponent
const SurveyScreen2 = () => {
    const navigation = useNavigation(); // Access navigation object
    return (
        <View>
            <Text>
             <h1>Survey Screen 2</h1>
              <p>This is the SurveyScreen2 component.</p>
            </Text>
            <SurveyComponent/>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("Home",{screen: 'Health Data'})} // Navigate to the correct screen
                        >
                <Text style={styles.buttonText}>Return to Health Data</Text>
            </TouchableOpacity>
        </View>
    );
};

export default SurveyScreen2;