import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { Link } from "react-router-native";

import Next from "../img/next.png";
import Previous from "../img/previous.png";

import { GetPokemonList } from "../actions/PokemonActions";
import { SafeAreaView } from "react-navigation";

export default function Home() {
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();
  const pokemonList = useSelector((state) => state.PokemonList);

  const fetchData = (page) => {
    dispatch(GetPokemonList(page));
  };

  useEffect(() => {
    fetchData(page);
  }, [page]);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={pokemonList.data}
        keyExtractor={(pokemon) => pokemon.name}
        contentContainerStyle={{ flexGrow: 1 }}
        style={styles.list}
        renderItem={({ item }) => (
          <Link to={`/pokemon/${item.name}`}>
            <View
              style={{
                backgroundColor: "#eff5ff",
                padding: 8,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View>
                <Text>{item.name.toUpperCase()} </Text>
              </View>
            </View>
          </Link>
        )}
      />
      <View style={styles.pageBox}>
        <View>
          {page == 1 ? (
            <TouchableOpacity
              onPress={() => {
                setPage(page - 1);
              }}
              disabled
            >
              <Image
                style={[styles.sizeIcon, styles.disableIcon]}
                source={Previous}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => {
                setPage(page - 1);
              }}
            >
              <Image style={styles.sizeIcon} source={Previous} />
            </TouchableOpacity>
          )}
        </View>
        <View style={{ display: "flex", justifyContent: "center" }}>
          <Text style={{ fontSize: 18 }}>{page}</Text>
        </View>

        {page == 45 ? (
          <TouchableOpacity
            onPress={() => {
              setPage(page + 1);
            }}
            disabled
          >
            <Image
              style={[styles.sizeIcon, , styles.disableIcon]}
              source={Next}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              setPage(page + 1);
            }}
          >
            <Image style={styles.sizeIcon} source={Next} />
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  list: {
    width: "100%",
    flexGrow: 1,
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
