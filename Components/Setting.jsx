import { Text, View } from 'react-native';
import { useQuery } from '@tanstack/react-query'

function Setting() {

    const { isLoading, error, data } = useQuery(['repoData'], () =>
        fetch('www.thecocktaildb.com/api/json/v1/1/list.php?c=list').then(res =>
            res.json()
        )
    )

    if (isLoading) return (
        <Text>Loading...</Text>
    )

    if (error) return (
        <Text>{'An error has occurred: ' + error.message}</Text>
    )

    return (
       
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>{data.drinks}</Text>
        </View>
    )
}

export default Setting 