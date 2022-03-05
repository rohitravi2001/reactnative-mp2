import React from "react";
import { SafeAreaView, Text, Image, ScrollView, View } from "react-native";
import { styles } from "./MovieDetailScreen.styles";

function getStrFormatted(type) {
  let actorsStr = "";
  for (let i = 0; i < type.length - 1; i++) {
    actorsStr += type[i] + ", ";
  } 
  actorsStr += type[type.length - 1];
  return actorsStr;
}
export default function MovieDetailScreen({ route }) {
  // TODO: Recieve the movieItem by destructuring route params.
  const {movieItem} = route.params;  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
      <View style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
      <Image
        style = {styles.movieCellImage}
        source={{uri: movieItem.posterurl}}
      /> 
        </View>
      <Text style = {styles.h1}>{movieItem.title}</Text>
      <Text style = {styles.h3}>Released {movieItem.year}</Text>
      <Text style = {styles.h2}>{getStrFormatted(movieItem.genres)}</Text>
      <Text style = {styles.h3}>{getStrFormatted(movieItem.actors)}</Text>
      <Text style = {styles.h4}>{movieItem.storyline}</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

