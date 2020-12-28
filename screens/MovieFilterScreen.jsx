import React, { useEffect, useState } from "react";
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

export default function MovieFilterScreen(props) {
  const [actors, setActors] = useState([]);

  useEffect(
    () => {
      // TODO: Recieve actors passed by MovieListScreen here, and update
      // our local state using setActors.
    },
    [
      /* TODO: Insert dependent variables here. */
    ]
  );

  useEffect(
    () => {
      // TODO: Override the default back button to...
      //  1) Hide the left button.
      //  2) Show a "Done" button on the right that navigates back to the MovieListScreen
      //      and passes back our current list of actors via params.
    },
    [
      /* TODO: Insert dependent state variables here. */
    ]
  );

  // When a user taps on an actor, either insert or remove the actor
  // from our state actors array.
  const didTapActorCell = (actor) => {
    var newActors = [...actors];
    if (actors.includes(actor)) {
      newActors.splice(newActors.indexOf(actor), 1);
    } else {
      newActors.push(actor);
    }
    setActors(newActors);
  };

  const renderSelectItem = (item) => {
    var actual = item.item;
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        key={item.index}
        onPress={() => didTapActorCell(actual)}
      >
        <View style={styles.filtercell}>
          <Text style={{ fontFamily: "Avenir", fontSize: 15 }}>
            {actors.includes(actual) ? "✓ " + actual : " " + actual}
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
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "#ffffff",
  },
  filtercell: {
    backgroundColor: "#ecf0f1",
    padding: 14,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 5,
  },
  title: {
    fontSize: 20,
  },
});
