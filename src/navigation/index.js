import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FruitsScreen from '../screens/FruitsScreen';
import VegetablesScreen from '../screens/VegetablesScreen';
import DairyScreen from '../screens/DairyScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import HomeScreen from "../screens/HomeScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import MyArticlesScreen from "../screens/MyArticlesScreen";
import CustomNewsScreen from "../screens/CustomNewsScreen";
import NewsFormScreen from "../screens/NewsFormScreen";
import FavoriteScreen from "../screens/FavoriteScreen";
import ArticleDetailScreen from "../screens/ArticleDetailScreen";
import js from "../screens/SurveyScreen";



const Tab = createBottomTabNavigator();
 function TabNavigator() {
  return (
          <Tab.Navigator>
            <Tab.Screen
              name="Health Data"
              component={FruitsScreen}
              options={{
                headerShown: false,
              }}
            />
            <Tab.Screen
              name="Nearby"
              component={VegetablesScreen}
              options={{
                headerShown: false,
              }}
            />
            <Tab.Screen
              name="Connect"
              component={DairyScreen}
              options={{
                headerShown: false,
              }}
            />
                       <Tab.Screen
              name="Home"
              component={HomeScreen}
              options={{
                headerShown: false,
              }}
            />
          </Tab.Navigator>
  );
}
const Stack = createNativeStackNavigator();

function AppNavStack() {
  return (
    
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={TabNavigator} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="ArticleDetail" component={ArticleDetailScreen} />
        <Stack.Screen name="MyArticles" component={MyArticlesScreen} />
        <Stack.Screen name="CustomNewsScreen" component={CustomNewsScreen} />
        <Stack.Screen name="NewsFormScreen" component={NewsFormScreen} />
        <Stack.Screen name="FavoriteScreen" component={FavoriteScreen} />
      </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  title: { fontSize: 27, marginBottom: 10, textAlign:'center',color: 'black', fontStyle:'italic'},
  itemContainer: { flexDirection: 'row', marginBottom: 10, alignItems: 'center' },
  image: { width: 120, height: 120, marginRight: 10 },
  details: { marginLeft:40,alignItems:'center',justifyContent:'center',width:200 },
  name: { fontSize: 19 },
  price: { color: 'green', fontWeight: 'bold'},
  addToCart: { color: 'blue', fontWeight: 'bold' },
  button: {
    backgroundColor: '#F48021',
    paddingVertical: 6,
    paddingHorizontal: 8,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    // fontWeight: 'bold',
    fontSize:13
  },
  safeArea: {
    flex: 1,
    paddingTop: 40,  // Sets 40px space from the top
  },
  brandName: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#F48021',
    marginBottom: 10,
  }
});
export{styles}
export default function AppNavigation() {
  return (
    <NavigationContainer>
      <AppNavStack />
    </NavigationContainer>
  )};
 