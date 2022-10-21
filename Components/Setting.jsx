import { ScrollView,StyleSheet, Text, View } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import React, { useState, useEffect } from 'react';
import SelectGlass from './Glass';
import Drinks from './Drinks';

function Setting() {

    //hook
    const { isLoading, error, data } = useQuery(['repoData'], () =>
        fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list').then(res =>
            res.json()
        )
    )
    
    const [selectedCocktail, setSelectedCocktail] = useState('');
    //return
    if (isLoading) return (
        <Text>Loading...</Text>
    )

    if (error) return (
        <Text>{'An error has occurred: ' + error.message}</Text>
    )

    return (
        <ScrollView>
            <SelectGlass data={data} selectedCocktail={selectedCocktail} setSelectedCocktail={setSelectedCocktail}></SelectGlass>
            <Drinks selectedCocktail={selectedCocktail}></Drinks>
        </ScrollView>
    );
}

export default Setting 