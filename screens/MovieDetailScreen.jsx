import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  ScrollView,
} from "react-native";

export default class MovieDetailScreen extends React.Component {
  render = () => {
    
    // TODO: Recieve the movieItem via navigation params. That's all you have
    // to do on this screen!
    const movieItem = null;

    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.container}>
          <Image
            source={{ uri: movieItem.posterurl }}
            style={{ height: 150, width: "auto", resizeMode: "contain" }}
          ></Image>
          <Text
            style={{
              fontFamily: "Avenir",
              fontSize: 30,
              fontWeight: "700",
              textAlign: "center",
              marginTop: 20,
            }}
          >
            {movieItem.title}
          </Text>
          <Text
            style={{
              fontFamily: "Avenir",
              fontSize: 18,
              fontWeight: "300",
              color: "gray",
              marginTop: 20,
              textAlign: "center",
            }}
          >
            Released {movieItem.year}
          </Text>
          <Text
            style={{
              fontFamily: "Avenir",
              fontSize: 18,
              fontWeight: "300",
              color: "gray",
              marginTop: 5,
              textAlign: "center",
            }}
          >
            {movieItem.genres.join(", ")}
          </Text>
          <Text
            style={{
              fontFamily: "Avenir",
              fontSize: 18,
              fontWeight: "300",
              color: "gray",
              marginTop: 20,
              textAlign: "center",
            }}
          >
            {movieItem.actors.join(", ")}
          </Text>
          <Text
            style={{
              fontFamily: "Avenir",
              fontSize: 18,
              fontWeight: "300",
              marginTop: 20,
              textAlign: "center",
            }}
          >
            {movieItem.storyline}
          </Text>
        </ScrollView>
      </SafeAreaView>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#ffffff",
  },
});
