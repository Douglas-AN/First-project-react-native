import {
  ScrollView,
  StyleSheet,
  RefreshControl,
  SafeAreaView,
  Text,
  View,
} from "react-native";
import { useQuery } from "@tanstack/react-query";
import React, { useState, useEffect } from "react";
import SelectGlass from "./Glass";
import Drinks from "./Drinks";

function Setting() {
  const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };
  const [refreshing, setRefreshing] = React.useState(false);
  const [selectedGlass, setSelectedGlass] = useState("");

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setSelectedGlass("");
    setRefreshing(false);
  }, []);
  
  //hook
  const { isLoading, error, data } = useQuery(["repoData"], () =>
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
        <Drinks selectedGlass={selectedGlass}></Drinks>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    color: "#fff",
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Setting;
