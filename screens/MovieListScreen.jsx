import React from "react";
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

// TABLE_DATA is an array of movie items.
// See the JSON file to learn the schema.
var TABLE_DATA = require("../assets/movies.json");

// A MovieCell is the component that defines each row of our
// FlatList. Notice how we define this as a functional component,
// since we don't need any lifecycle methods.
MovieCell = ({ movieItem }) => (
  <View style={styles.movieCell}>
    <View style={styles.movieCellLeft}>
      <Image
        source={{ uri: movieItem.posterurl }}
        style={styles.movieCellImage}
      ></Image>
    </View>
    <View style={styles.movieCellRight}>
      <Text style={styles.movieCellTitle}>{movieItem.title}</Text>
      <Text style={styles.movieCellSubtitle}>
        {movieItem.actors.join(", ")}
      </Text>
    </View>
  </View>
);

// This screen displays the list of movies.
export default class MovieListScreen extends React.Component {
  // We define our state here. It contains a search object, and a
  // filter object that holds a set of actors. By default, both of these
  // values start out empty.

  state = {
    // TODO: Define this component's state.
  };

  updateSearch = (search) => {
    // TODO: Update "search" value in state, using setState.
  };

  selectedMovie = (movieItem) => {
    // TODO: navigate to the MovieDetailScreen, and pass in movieItem.
    // See https://reactnavigation.org/docs/params on how to pass data via navigation params.
  };

  navigateToFilter = () => {
    // TODO: Navigate to the Filter screen, and pass in the actors from this screen's state.
    // See https://reactnavigation.org/docs/params on how to pass data via navigation params.
  };

  focusTriggered = () => {
    // TODO: On "focusTriggered", check to see if we recieved data through route params
    // from the Filter screen. If we did, then update this screen's actors state using setState.
    // Hint: params are located at this.props.route.params
  };

  componentDidMount = () => {
    this.props.navigation.setOptions({
      headerRight: () => (
        <Button onPress={this.navigateToFilter} title="Filter" />
      ),
    });

    this.props.navigation.addListener("focus", this.focusTriggered);
  };

  render = () => {
    // Here, we set up the renderItem method.
    // It returns NULL if an item isn't included in the current filter.
    const renderItem = ({ item }) => {

      // TODO: Validate that this item meets the search criteria based on state.
      // If the search bar is empty, then this should be true.
      var meetsSearchCriteria = true;

      // TODO: Validate that this item meets the filter criteria based on state.
      // If no actors are selected, then this should be true.
      var meetsActorsCriteria = true;

      if (meetsSearchCriteria && meetsActorsCriteria) {
        return (
          // We wrap each MovieCell in a <TouchableOpacity /> so that we can detect taps.
          // On tap, we call this.selectedMovie(...) and pass in the movie item.
          <TouchableOpacity
            activeOpacity={0.8}
            key={item.id}
            onPress={() => this.selectedMovie(item)}
          >
            <MovieCell movieItem={item} />
          </TouchableOpacity>
        );
      } else {
        return null;
      }
    };

    return (
      <SafeAreaView style={styles.container}>

        {/* TODO: Add a SearchBar here. Use the "this.updateSearch" method where appropriate. 
            SearchBar: https://reactnativeelements.com/docs/searchbar/ */}

        {/* TODO: Add a FlatList here. Use TABLE_DATA and the "renderItem" method where appropriate. 
            FlatList: https://reactnative.dev/docs/flatlist */}

      </SafeAreaView>
    );
  };
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
