import React from "react";
import {
  SafeAreaView,
  FlatList,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Button,
  StatusBar,
} from "react-native";
import { getAllActors } from "../constants/Constants";

ALL_ACTORS = getAllActors();

export default class MovieFilterScreen extends React.Component {
  state = {
    // TODO: Define state schema.
  };

  returnToMovieListScreen = () => {
    // TODO: Navigate to the previous screen, and pass in local state data via params.
  };

  didTapActorCell = (actor) => {
    // TODO: Update local state as necessary.
  };

  componentDidMount = () => {
    // TODO: Update state based on data passed from MovieListScreen.

    // Override the default back button so that we have a "Done" button
    // on the right, instead of the deafult back button on the left.
    this.props.navigation.setOptions({
      headerRight: () => (
        <Button onPress={this.returnToMovieListScreen} title="Done" />
      ),
      headerLeft: null,
    });
  };

  render = () => {
    const renderSelectItem = (item) => {
      var actual = item.item;
      return (
        <TouchableOpacity
          activeOpacity={0.8}
          key={item.index}
          onPress={() => this.didTapActorCell(actual)}
        >
          <View style={styles.filterCell}>
            <Text style={styles.rowFont}>
              {this.state.actors.has(actual) ? "✓ " + actual : " " + actual}
            </Text>
          </View>
        </TouchableOpacity>
      );
    };

    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={{ fontFamily: "Avenir", fontSize: 22, margin: 20 }}>
            {"Filter by Actor"}
          </Text>
          <FlatList
            data={ALL_ACTORS}
            renderItem={renderSelectItem}
            keyExtractor={(item) => item}
          />
        </View>
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
  filterCell: {
    backgroundColor: "#ecf0f1",
    padding: 14,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 5,
  },
  rowFont: { fontFamily: "Avenir", fontSize: 15 },
});
