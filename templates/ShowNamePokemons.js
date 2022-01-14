function ShowPokemon(item, props) {
  const { name } = item.item;
  const namePoke = props.name;
  return (
    <>
      <Link to={`/pokemon/${name}`}>
        <View
          style={{
            backgroundColor: "#eff5ff",
            padding: 8,
          }}
        >
          <View>
            <Text>{name.toUpperCase()}</Text>
          </View>
        </View>
      </Link>
    </>
  );
}
