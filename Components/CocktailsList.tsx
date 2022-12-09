import { StyleSheet, Text, View, Alert, Button, Image } from "react-native";
import { Link } from "@react-navigation/native";
import { useQuery } from "@tanstack/react-query";
import theme from "../Styles/Theme";
import componnent from "../Styles/Componnent";

const CocktailsList = ({ selectedGlass }) => {
  let glassName;
  if (selectedGlass !== "") {
    glassName = selectedGlass.replace(" ", "_");
  }

  const {
    isLoading,
    error,
    data: listDrinks,
    status,
  } = useQuery(
    ["repoDrinks", glassName],
    () =>
      fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=" + glassName
      ).then((res) => res.json()),
    { enabled: !!selectedGlass }
  );

  if (isLoading && glassName !== "") return <Text>Loading...</Text>;

  if (error) return <Text>{"An error has occurred: " + error}</Text>;

  return listDrinks.drinks.map((drink) => (
    <View style={componnent.listeWrapper} key={drink.idDrink}>
      <Link
        style={[componnent.titleItem]}
        to={{ screen: "CocktailsDetails", params: { id: drink.idDrink } }}
      >
        <Image
          style={styles.img}
          source={{
            uri: drink.strDrinkThumb,
          }}
        />
        <View style={styles.textWrapper}>
          <Text style={styles.text}>{drink.strDrink}</Text>
        </View>
      </Link>
    </View>
  ));
};

const styles = StyleSheet.create({
  img: {
    width: 45,
    height: 45,
    borderRadius: theme.radius.base,
  },
  text: {
    marginLeft: theme.spacing.base,
  },
  textWrapper: {
    flex: 1,
    justifyContent: "center",
  },
});

export default CocktailsList;
