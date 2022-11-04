import { useRoute } from "@react-navigation/native";
import { ScrollView, Text, Image, StyleSheet, FlatList } from "react-native";
import { useQuery } from "@tanstack/react-query";

const Detail = () => {
  const route = useRoute();
  console.log(route.params.id);
  const {
    isLoading,
    error,
    data: listData,
  } = useQuery(["repoCocktail", route.params.id], () =>
    fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" +
        route.params.id
    ).then((res) => res.json())
  );

  //return
  if (isLoading) return <Text>Loading...</Text>;

  if (error) return <Text>{"An error has occurred: " + error.message}</Text>;

  //console.log(listData);

  return listData.drinks.map((dataCocktail) => (
    <ScrollView>
      <Text>{dataCocktail.strDrink}</Text>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: dataCocktail.strDrinkThumb,
        }}
      />
      <Text style={styles.titelIngredient}>Ingrédient :</Text>
      <FlatList
        data={[
          {key: dataCocktail.strIngredient1},
          {key: dataCocktail.strIngredient2},
          {key: dataCocktail.strIngredient3},
          {key: dataCocktail.strIngredient4},
          {key: dataCocktail.strIngredient5},
          {key: dataCocktail.strIngredient6},
          {key: dataCocktail.strIngredient7},
          {key: dataCocktail.strIngredient8},
          {key: dataCocktail.strIngredient9},
          {key: dataCocktail.strIngredient10},
          {key: dataCocktail.strIngredient11},
          {key: dataCocktail.strIngredient12},
          {key: dataCocktail.strIngredient13},
          {key: dataCocktail.strIngredient14},
          {key: dataCocktail.strIngredient15},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
    </ScrollView>
  ));
};

const styles = StyleSheet.create({
  tinyLogo: {
    width: 200,
    height: 200,
  },
  titelIngredient: {
    fontSize: 18,
    marginBottom: 10,
  }, 
});

export default Detail;
