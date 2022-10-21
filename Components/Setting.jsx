import { StyleSheet, Text, View } from 'react-native';
import { useQuery } from '@tanstack/react-query'
import { Picker } from '@react-native-picker/picker';
import React, { useState, useEffect } from 'react';

function Setting() {

    const { isLoading, error, data } = useQuery(['repoData'], () =>
        fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass').then(res =>
            res.json()
        )
    )

    if (isLoading) return (
        <Text>Loading...</Text>
    )

    if (error) return (
        <Text>{'An error has occurred: ' + error.message}</Text>
    )
    
    const [selectedCocktail, setSelectedCocktail] = useState();

    const SelectGlass = ({ selectedCocktail, setSelectedCocktail }) => {
        return (
            <View>
                <Text style={styles.text}>Choisissez votre verre à cocktail :</Text>
                <Picker
                    value={selectedCocktail}
                    onChange={(e) => setSelectedCocktail(e.target.value)}
                >
                    <Picker.Item value="" label='---'></Picker.Item>
                    {
                        data.drinks.map((drink) => (
                            <Picker.Item key={drink.idDrink} label={drink.strDrink} value={drink.strDrink} />
                        ))
                    }
                </Picker>
            </View>
        )
    }

    return (
        <Text
            component={SelectGlass}
            selectedCocktail={selectedCocktail}
            setSelectedCocktail={setSelectedCocktail}
        >
        </Text>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 50,
    },
});


export default Setting 