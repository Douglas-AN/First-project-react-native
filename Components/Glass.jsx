import { StyleSheet, Text, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const SelectGlass = ({ selectedCocktail, setSelectedCocktail, data }) => {
    return (
        <View>
            <Text style={styles.text}>Choisissez votre verre à cocktail :</Text>
            <Picker
                selectedValue={selectedCocktail}
                onValueChange={(itemValue, itemIndex) =>
                    setSelectedCocktail(itemValue)
                }
            >
                <Picker.Item value="" label='---'></Picker.Item>
                {
                    data.drinks.map((glass, index) => (
                        <Picker.Item key={index} label={glass.strGlass} value={glass.strGlass} />
                    ))
                }
            </Picker>
        </View>
    );
}

//style
const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 50,
    },
});

export default SelectGlass