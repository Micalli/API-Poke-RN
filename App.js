import React, { useState } from "react";
import { Provider } from "react-redux";

import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-navigation";

import Store from "./store/store";
import Home from "./templates/Home";
import Next from "./img/next.png";
import Previous from "./img/previous.png";
import { NativeRouter, Routes, Route } from "react-router-native";

import { Pokemon } from "./templates/Pokemon";

export default function App(props) {
  return (
    <NativeRouter>
      <Provider store={Store}>
        <SafeAreaView>
          <View style={styles.nav}>
            <Text style={{ fontSize: 20, marginTop: 20 }}>POKEMONS</Text>
          </View>
        </SafeAreaView>

        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/pokemon/:pokemonName" exact element={<Pokemon />} />
        </Routes>
      </Provider>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  nav: {
    display: "flex",
    width: "100%",
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e62e2e",
  },
  pageBox: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#eff5ff",
  },
  sizeIcon: {
    width: 60,
    height: 60,
  },
  disableIcon: {
    opacity: 0.3,
  },
});
