import { StyleSheet, Text, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import theme from "../Styles/Theme.Jsx";

const SelectGlass = ({ selectedGlass, setSelectedGlass, data }) => {
  return (
    <View>
      <Text style={styles.text}>Choisissez votre verre à cocktail ...</Text>
      <Picker 
        selectedValue={selectedGlass}
        onValueChange={(itemValue, itemIndex) => setSelectedGlass(itemValue)}
      >
        <Picker.Item style={styles.picker} value="" label="---"></Picker.Item>
        {data.drinks.map((glass, index) => (
          <Picker.Item
            style={styles.picker}
            key={index}
            label={glass.strGlass}
            value={glass.strGlass}
          />
        ))}
      </Picker>
    </View>
  );
};

//style
const styles = StyleSheet.create({
  text: {
    fontSize: theme.fontSize.xl2,
    marginTop: theme.spacing.triple,
    color: theme.colors.white,
    fontFamily: theme.fontFamily.poppins400,
    textAlign: "left",
    marginLeft: theme.spacing.baseXl,
    maxWidth: 350,
  },
  picker: {
    color: theme.colors.white,
  },
});

export default SelectGlass;
