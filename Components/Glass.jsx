import { StyleSheet, Text, View } from "react-native";
import { Picker } from "@react-native-picker/picker";

const SelectGlass = ({ selectedGlass, setSelectedGlass, data }) => {
  return (
    <View>
      <Text style={styles.text}>Choisissez votre verre à cocktail :</Text>
      <Picker
        selectedValue={selectedGlass}
        onValueChange={(itemValue, itemIndex) => setSelectedGlass(itemValue)}
      >
        <Picker.Item value="" label="---"></Picker.Item>
        {data.drinks.map((glass, index) => (
          <Picker.Item
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
    fontSize: 20,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 50,
  },
});

export default SelectGlass;
