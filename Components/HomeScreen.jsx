import {
  ScrollView,
  StyleSheet,
  RefreshControl,
  SafeAreaView,
  Text,
  View,
  Dimensions,
} from "react-native";
import { useQuery } from "@tanstack/react-query";
import React, { useState, useEffect } from "react";
import SelectGlass from "./Glass";
import CocktailsList from "./CocktailsList";
import theme from "../Styles/Theme.Jsx";
import componnent from "../Styles/Componnent";

function HomeScreen() {
  const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };
  const [refreshing, setRefreshing] = React.useState(false);
  const [selectedGlass, setSelectedGlass] = useState("");

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setSelectedGlass("");
    refetch();
    setRefreshing(false);
  }, []);

  //hook
  const { isLoading, error, data, refetch } = useQuery(["repoData"], () =>
    fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list").then(
      (res) => res.json()
    )
  );

  //return
  if (isLoading) return <Text>Loading...</Text>;

  if (error) return <Text>{"An error has occurred: " + error.message}</Text>;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <SelectGlass
          data={data}
          selectedGlass={selectedGlass}
          setSelectedGlass={setSelectedGlass}
        ></SelectGlass>
        <View style={componnent.titleWrapper}>
          <Text style={componnent.titleItem}>Liste des cocktail</Text>
        </View>
        <View style={styles.cocktailListWrapper}>
          <CocktailsList
            style={styles.list}
            selectedGlass={selectedGlass}
          ></CocktailsList>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const windowHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary,
  },
  cocktailListWrapper: {
    alignSelf: "stretch",
    backgroundColor: theme.colors.white,
    padding: theme.spacing.baseXl,
    minHeight: windowHeight,
  },
  // textDesc: {
  //   marginBottom: theme.spacing.baseXl,
  //   fontSize: theme.fontSize.md,
  // },
});

export default HomeScreen;
