import { Text, View } from "react-native";
import { StyleSheet } from "react-native";

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
	  backgroundColor: "pink",
	  alignItems: "center",
	  justifyContent: "center",
	},
  });
  