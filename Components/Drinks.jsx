import { StyleSheet, Text, View } from "react-native";
import { useQuery } from "@tanstack/react-query";

const Drinks = ({ selectedCocktail }) => {
  let glassName;
  if (selectedCocktail != undefined) {
    glassName = selectedCocktail.replace(" ", "_");
  }
  console.log(glassName);
  const { isLoading, error, data:listDrinks } = useQuery(
    ["repoData"],
    () =>
      fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=" + glassName
      ).then((res) => res.json()),
    { enable: glassName !== undefined }
  );

  if (isLoading) return <Text>Loading...</Text>;

  if (error) return <Text>{"An error has occurred: " + error}</Text>;

  return listDrinks.drinks.map((drink) => (
    <Text key={drink.idDrink}>
      {drink.strDrink} {console.log(listDrinks)}
    </Text>
  ));
};

export default Drinks;
