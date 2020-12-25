// App.js is the entry point of our application.

import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MovieListScreen from "./screens/MovieListScreen";
import MovieDetailScreen from "./screens/MovieDetailScreen";
import MovieFilterScreen from "./screens/MovieFilterScreen";

// TODO: Set up your app's navigation heirarchy.
// This app has three screens:
//    - MovieListScreen
//    - MovieDetailScreen
//    - MovieFilterScreen 
// The main navigation stack consists of MovieList and MovieDetail.
// MovieFilter is presented modally on top the main stack.

// The setup is identical to the documentation here: 
// https://reactnavigation.org/docs/modal/
// Your code will be very similar to the code in the documentation!

export default function App() {
  return <NavigationContainer>{MovieListScreen}</NavigationContainer>;
}
