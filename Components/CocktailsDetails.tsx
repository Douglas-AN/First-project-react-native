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
import theme from "../Styles/Theme";
import componnent from "../Styles/Componnent";
import { getErrorMessage } from "../utils/error.utils";

const CocktailsDetails = () => {
  const route = useRoute<any>();
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
  // return
  if (isLoading) return <Text>Loading...</Text>;

  if (error)
    return <Text>{"An error has occurred: " + getErrorMessage(error)}</Text>;

  return listData.drinks.map((dataCocktail) => (
    <ScrollView>
      <View style={styles.vignette}>
        <Image
          style={styles.imageVignette1}
          source={require("../img/flower.png")}
        />
        <Image
          style={styles.imageVignette2}
          source={require("../img/flower.png")}
        />
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
            <Image style={styles.icon} source={require("../img/like.png")} />
            <Text style={styles.textIcon}>Mes envies</Text>
          </View>
          <View style={styles.iconWrapper}>
            <Image style={styles.icon} source={require("../img/add.png")} />
            <Text style={styles.textIcon}>Mon bar</Text>
          </View>
          <View style={styles.iconWrapper}>
            <Image style={styles.icon} source={require("../img/cart.png")} />
            <Text style={styles.textIcon}>Acheter</Text>
          </View>
          <View style={styles.iconWrapper}>
            <Image style={styles.icon} source={require("../img/star.png")} />
            <Text style={styles.textIcon}>Noter</Text>
          </View>
        </View>
        <View style={styles.ingredientWrapper}>
          <View style={componnent.titleWrapper}>
            <Text style={componnent.titleItem}>Ingrédients</Text>
          </View>
          <View style={[styles.listWrapper, componnent.container]}>
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
                  <View style={componnent.listeWrapper}>
                    <Text style={componnent.listeItem}>
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
        <View style={componnent.titleWrapper}>
          <Text style={componnent.titleItem}>Instructions</Text>
        </View>
        <View style={styles.descWrapper}>
          <Text style={styles.desc}>{dataCocktail.strInstructions}</Text>
        </View>
      </View>
    </ScrollView>
  ));
};

const windowHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  vignette: {
    backgroundColor: theme.colors.secondary4,
    height: windowHeight - 600,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  imageVignette1: {
    height: 250,
    width: 250,
    position: "absolute",
    top: -50,
    right: -50,
    opacity: theme.opacity.pressed,
  },
  imageVignette2: {
    height: 200,
    width: 200,
    position: "absolute",
    top: 150,
    left: -50,
    opacity: theme.opacity.pressed,
  },
  titleWrapper: {
    position: "absolute",
    top: theme.spacing.doubleSm,
  },
  cocktailName: {
    marginBottom: theme.spacing.base,
    fontSize: theme.fontSize.lg2,
    fontWeight: theme.fontWeight.bold,
    color: theme.colors.black,
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
    backgroundColor: theme.colors.white,
    minHeight: windowHeight,
  },
  info: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    borderBottomColor: theme.colors.primary,
    borderBottomWidth: 3,
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
  listWrapper: {
    marginBottom: theme.spacing.double,
  },
  descWrapper: {
    paddingTop: theme.spacing.base,
    paddingLeft: theme.spacing.baseXl,
    paddingRight: theme.spacing.baseXl,
    paddingBottom: theme.spacing.base,
  },
  desc: {
    fontSize: theme.fontSize.md,
  },
});

export default CocktailsDetails;
