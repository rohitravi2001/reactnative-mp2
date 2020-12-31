import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  Image,
  StatusBar,
  Button,
  TouchableOpacity,
} from "react-native";
import { SearchBar } from "react-native-elements";
var TABLE_DATA = require("../assets/movies.json");

// A MovieCell is one row of the FlatList
MovieCell = ({ movieItem }) => (
  // TODO: Create and return the MovieCell component.
  // HINT: Take a look at the movieCell styles, as well as the video
  // demo in the spec.
  <View />
);

// This screen displays the list of movies.
export default function MovieListScreen(props) {
  const [search, setSearch] = useState("");
  const [actors, setActors] = useState([]);

  const selectedMovie = (movieItem) => {
    // TODO: What should you do when a user selects a movie?
  };

  useEffect(
    () => {
      // TODO: Add a "Filter" button to the right bar button.
      // It should lead to the MovieFilterScreen, and pass the "actors" state
      // variable as a parameter.
      // https://reactnavigation.org/docs/modal/
    },
    [
      /* TODO: Insert dependent variables here. */
    ]
  );

  useEffect(
    () => {
      // TODO: Recieve the new "actors" array from the Filters screen here.
      // When the Done button on the Filter screen is called, it should send
      // back data via navigation parameters.
      // https://reactnavigation.org/docs/params#passing-params-to-a-previous-screen
    },
    [
      /* TODO: Insert dependent variables here. */
    ]
  );

  // Input: a movieItem (movie object). See movies.json for structure.
  // Output: a cell used by the FlatList
  const renderItem = ({ item }) => {
    const overlapFound = (listA, listB) => {
      var foundActor = false;
      listA.forEach((x) => {
        if (listB.includes(x)) {
          foundActor = true;
        }
      });
      return foundActor;
    };

    // TODO: When does a movie meet the search criteria?
    // Your logic should handle both an empty search field and a filled search field.
    var meetsSearchCriteria = true;

    // TODO: When does a movie meet the filter criteria?
    // Your logic should handle the edge case where there are no actors selected.
    var meetsActorsCriteria = true;

    if (meetsSearchCriteria && meetsActorsCriteria) {
      return (
        // TODO: Insert a MovieCell, wrapped by a TouchableOpacity so we can handle taps.
        <View />
      );
    } else {
      return null;
    }
  };

  // Our final view consists of a search bar and flat list, wrapped in
  // a SafeAreaView to support iOS.
  return (
    <SafeAreaView style={styles.container}>
      {/* TODO: Add a SearchBar: https://reactnativeelements.com/docs/searchbar/ */}
      {/* TODO: Add a FlatList: https://reactnative.dev/docs/flatlist */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "#ffffff",
  },
  movieCell: {
    backgroundColor: "#ecf0f1",
    padding: 20,
    flexDirection: "row",
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 3.84,
    elevation: 5,
  },
  movieCellTitle: { fontFamily: "Avenir", fontSize: 22 },
  movieCellSubtitle: { fontFamily: "Avenir", fontSize: 14 },
  movieCellLeft: { height: 80, width: 54 },
  movieCellImage: { height: 80, width: 54, resizeMode: "contain" },
  movieCellRight: {
    flex: 1,
    marginLeft: 20,
    justifyContent: "center",
    alignItems: "baseline",
  },
});
