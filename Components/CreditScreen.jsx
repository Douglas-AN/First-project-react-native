import { Text, View } from "react-native";
import { StyleSheet } from "react-native";
import theme from "../Styles/Theme.Jsx";

export default function CreditScreen() {
  return (
    <View style={styles.container}>
      <Text>Crédit</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: theme.colors.light,
    alignItems: "center",
    justifyContent: "center",
  },
});
