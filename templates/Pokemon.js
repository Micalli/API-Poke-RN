import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { GetPokemon } from "../actions/PokemonActions";
import { useParams } from "react-router-native";
import { pagi } from "./Home";

import { Link } from "react-router-native";

const Abilities = ({ abilityList }) => {
  return (
    <>
      <Text style={styles.abilities}>Habilidades</Text>
      <View style={styles.abilitiesList}>
        {abilityList.map((item) => {
          const { ability } = item;
          return (
            <Text style={styles.textInfo} key={ability.name}>
              {ability.name.toUpperCase()}
            </Text>
          );
        })}
      </View>
      <Text> </Text>
    </>
  );
};

const Types = ({ typesList }) => {
  return (
    <>
      <Text style={styles.abilities}>Tipos</Text>
      <View style={styles.abilitiesList}>
        {typesList.map((item) => {
          const { type } = item;
          return (
            <Text key={type.name} style={styles.textInfo}>
              {type.name.toUpperCase()}
            </Text>
          );
        })}
      </View>
    </>
  );
};
const handleBack = () => {
  useHistory.push("/");
};

export function Pokemon() {
  const dispatch = useDispatch();
  const pokemon = useSelector((state) => state.Pokemon);
  const { pokemonName } = useParams();
  const pokemonAPIData = pokemon?.data?.[pokemonName];
  const urlImage = pokemonAPIData?.sprites?.other?.home?.front_default;
  const page = pagi;
  useEffect(() => {
    dispatch(GetPokemon(pokemonName));
  }, []);
  return (
    !!pokemonAPIData && (
      <View
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <View style={styles.title}>
          <Text style={styles.sizeTitle}>{pokemonName.toUpperCase()} </Text>
        </View>

        <View style={styles.center}>
          {urlImage === undefined ? (
            <Image
              style={styles.image}
              source={{
                uri: urlImage,
              }}
            />
          ) : (
            <Image
              style={styles.image}
              source={{
                uri: urlImage,
              }}
            />
          )}
        </View>

        <View style={[styles.center]}>
          <Abilities abilityList={pokemonAPIData.abilities} />
        </View>
        <View style={[styles.center]}>
          <Types typesList={pokemonAPIData.types} />
        </View>
        <View style={styles.center}>
          <Text style={styles.subTitles}>Status</Text>
        </View>
        <View style={[styles.center, styles.statsBox]}>
          <View style={styles.stats}>
            <Text>PESO </Text>
            <Text> {pokemonAPIData.weight}g</Text>
          </View>

          <View style={styles.stats}>
            <Text>ALTURA </Text>
            <Text> {pokemonAPIData.height}cm</Text>
          </View>
        </View>

        <View style={styles.center}>
          <Link
            to={"/"}
            component={TouchableOpacity}
            style={styles.button}
            activeOpacity={1}
            replace={true}
            underlayColor={"#A72121"}
          >
            <Text style={{ paddingHorizontal: 35, fontSize: 18 }}>VOLTAR</Text>
          </Link>
        </View>
      </View>
    )
  );
}

const styles = StyleSheet.create({
  center: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  statsBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginTop: 30,
  },
  stats: {
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  sizeTitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#000",
  },
  abilitiesList: {
    display: "flex",
    width: 250,
    marginTop: 30,
    marginHorizontal: 5,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  abilities: {
    marginTop: 20,
    fontWeight: "800",
    fontSize: 25,
    color: "#000",
  },
  subTitles: {
    marginTop: 20,
    fontWeight: "800",
    fontSize: 25,
    color: "#000",
  },
  textInfo: {
    marginHorizontal: 40,
    backgroundColor: "#e62e2e",
    borderRadius: 10,
    padding: 3,
  },

  image: {
    width: 200,
    height: 200,
  },
  button: {
    alignItems: "center",
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: "#e62e2e",
    padding: 10,
    marginTop: 30,
  },
});
