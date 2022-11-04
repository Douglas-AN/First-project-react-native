import { StyleSheet, Text, View, Alert, Button } from "react-native";
import { Link } from '@react-navigation/native';
import { useQuery } from "@tanstack/react-query";

const Drinks = ({ selectedGlass }) => {
  let glassName;
  if (selectedGlass !== "") {
    glassName = selectedGlass.replace(" ", "_");
  }
  // console.log(glassName==="");
  const {
    isLoading,
    error,
    data: listDrinks,
  } = useQuery(
    ["repoDrinks", glassName],
    () =>
      fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=" + glassName
      ).then((res) => res.json()),
    { enabled: glassName !== "" }
  );

  if (isLoading && glassName !== "") return <Text>Loading...</Text>;

  if (error) return <Text>{"An error has occurred: " + error}</Text>;

  // console.log(listDrinks);
  return listDrinks.drinks.map((drink) => (
    <Link to={{ screen: "Detail", params: { id: drink.idDrink } }} >
      {drink.strDrink}
    </Link>
  ));
};

export default Drinks;
