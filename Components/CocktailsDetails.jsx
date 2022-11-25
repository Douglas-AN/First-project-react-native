import { useRoute } from "@react-navigation/native";
import {
  ScrollView,
  Text,
  Image,
  StyleSheet,
  FlatList,
  View,
  Dimensions,
} from "react-native";
import { useQuery } from "@tanstack/react-query";
import theme from "../Styles/Theme.Jsx";

const CocktailsDetails = () => {
  const route = useRoute();
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

  return listData.drinks.map((dataCocktail) => (
    <ScrollView>
      <View style={styles.vignette}>
        <View style={styles.titleWrapper}>
          <Text style={styles.cocktailName}>{dataCocktail.strDrink}</Text>
          <Text style={styles.glassName}>{dataCocktail.strGlass}</Text>
        </View>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: dataCocktail.strDrinkThumb,
          }}
        />
      </View>
      <View style={styles.detailsWrapper}>
        <View style={styles.info}>
          <View style={styles.iconWrapper}>
            <Image style={styles.icon} source={require("./img/like.png")} />
            <Text style={styles.textIcon}>Mes envies</Text>
          </View>
          <View style={styles.iconWrapper}>
            <Image style={styles.icon} source={require("./img/add.png")} />
            <Text style={styles.textIcon}>Mon bar</Text>
          </View>
          <View style={styles.iconWrapper}>
            <Image style={styles.icon} source={require("./img/cart.png")} />
            <Text style={styles.textIcon}>Acheter</Text>
          </View>
          <View style={styles.iconWrapper}>
            <Image style={styles.icon} source={require("./img/star.png")} />
            <Text style={styles.textIcon}>Noter</Text>
          </View>
        </View>
        <View style={styles.ingredientWrapper}>
          <View style={styles.titleListWrapper}>
            <Text style={styles.titleIngredient}>Ingrédients</Text>
          </View>
          <View style={styles.listWrapper}>
            <FlatList
              data={[
                {
                  key: dataCocktail.strIngredient1,
                  mesure: dataCocktail.strMeasure1,
                },
                {
                  key: dataCocktail.strIngredient2,
                  mesure: dataCocktail.strMeasure2,
                },
                {
                  key: dataCocktail.strIngredient3,
                  mesure: dataCocktail.strMeasure3,
                },
                {
                  key: dataCocktail.strIngredient4,
                  mesure: dataCocktail.strMeasure4,
                },
                {
                  key: dataCocktail.strIngredient5,
                  mesure: dataCocktail.strMeasure5,
                },
                {
                  key: dataCocktail.strIngredient6,
                  mesure: dataCocktail.strMeasure6,
                },
                {
                  key: dataCocktail.strIngredient7,
                  mesure: dataCocktail.strMeasure7,
                },
                {
                  key: dataCocktail.strIngredient8,
                  mesure: dataCocktail.strMeasure8,
                },
                {
                  key: dataCocktail.strIngredient9,
                  mesure: dataCocktail.strMeasure9,
                },
                {
                  key: dataCocktail.strIngredient10,
                  mesure: dataCocktail.strMeasure10,
                },
                {
                  key: dataCocktail.strIngredient11,
                  mesure: dataCocktail.strMeasure11,
                },
                {
                  key: dataCocktail.strIngredient12,
                  mesure: dataCocktail.strMeasure12,
                },
                {
                  key: dataCocktail.strIngredient13,
                  mesure: dataCocktail.strMeasure13,
                },
                {
                  key: dataCocktail.strIngredient14,
                  mesure: dataCocktail.strMeasur14,
                },
                {
                  key: dataCocktail.strIngredient15,
                  mesure: dataCocktail.strMeasure15,
                },
              ]}
              renderItem={({ item, index }) =>
                item.key && item.mesure !== null ? (
                  <View style={styles.listItemWrapper}>
                    <Text style={styles.listItem}>
                      {item.mesure + " " + item.key}
                    </Text>
                  </View>
                ) : (
                  <View></View>
                )
              }
            />
          </View>
        </View>
        <View style={styles.titleListWrapper}>
          <Text style={styles.titleIngredient}>Instructions</Text>
        </View>
        <View style={styles.descWrapper}>
          <Text style={styles.desc}>{dataCocktail.strInstructions}</Text>
        </View>
      </View>
    </ScrollView>
  ));
};
const windowWidth = Dimensions.get("window").whidth;
const windowHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  vignette: {
    backgroundColor: "#f6f2e9",
    height: windowHeight - 600,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  titleWrapper: {
    position: "absolute",
    top: theme.spacing.doubleSm,
  },
  cocktailName: {
    marginBottom: theme.spacing.base,
    fontSize: theme.fontSize.lg2,
    fontWeight: theme.fontWeight.bold,
    color: "#333",
    textAlign: "center",
  },
  glassName: {
    fontSize: theme.fontSize.sm,
    fontStyle: "italic",
    textAlign: "center",
  },
  tinyLogo: {
    width: 200,
    height: 200,
  },
  detailsWrapper: {
    backgroundColor: "#fff",
    minHeight: windowHeight,
  },
  info: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    borderBottomColor: theme.colors.primary,
    borderBottomWidth: 3,
    // paddingBottom: theme.spacing.base,
    marginBottom: theme.spacing.baseLg,
    padding: theme.spacing.baseXl,
  },
  iconWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  icon: {
    width: 20,
    height: 20,
    marginBottom: theme.spacing.demi,
  },
  textIcon: {
    fontSize: theme.fontSize.sm,
  },
  ingredientWrapper: {
    paddingTop: theme.spacing.demi,
    paddingBottom: theme.spacing.demi,
  },
  titleListWrapper: {
    backgroundColor: "white",
    width: windowWidth,
    shadowOffset: { width: -2, height: 4 },
    shadowColor: "#171717",
    shadowOpacity: 0.1,
    paddingLeft: theme.spacing.baseXl,
    paddingRight: theme.spacing.baseXl,
    paddingTop: theme.spacing.demi,
    paddingBottom: theme.spacing.demi,
    marginBottom: theme.spacing.baseXl,
  },
  titleIngredient: {
    fontSize: theme.fontSize.lg,
    marginBottom: 10,
    color: theme.colors.secondary2,
  },
  listWrapper: {
    paddingLeft: theme.spacing.baseXl,
    paddingRight: theme.spacing.baseXl,
    marginBottom: theme.spacing.double,
  },
  listItemWrapper: {
    alignSelf: "stretch",
    borderBottomColor: "#D8D8DA",
    borderBottomWidth: 1,
    paddingTop: theme.spacing.base,
  },
  listItem: {
    paddingBottom: theme.spacing.base,
    display: "flex",
    alignItems: "baseline",
  },
  descWrapper: {
    paddingLeft: theme.spacing.baseXl,
    paddingRight: theme.spacing.baseXl,
  },
  desc: {
    fontSize: theme.fontSize.md,
  },
});

export default CocktailsDetails;
