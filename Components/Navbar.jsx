import { Button, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function SettingsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Settings Screen</Text>
            <Button
                title="Go to Profile"
                onPress={() => navigation.navigate('Profile')}
            />
        </View>
    );
}

function ProfileScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Profile Screen</Text>
            <Button
                title="Go to Settings"
                onPress={() => navigation.navigate('Settings')}
            />
        </View>
    );
}

function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details')}
            />
        </View>
    );
}

function DetailsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
            <Button
                title="Go to Details... again"
                onPress={() => navigation.push('Details')}
            />
        </View>
    );
}

function ItemNav(){

}

const Tab = createBottomTabNavigator();
const SettingsStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();

function Navbar() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="First" component={
                () => (
                    <SettingsStack.Navigator>
                        <SettingsStack.Screen
                            name="Settings"
                            component={SettingsScreen}
                        />
                        <SettingsStack.Screen name="Profile" component={ProfileScreen} />
                    </SettingsStack.Navigator>
                )
            }>
            </Tab.Screen>
            
            <Tab.Screen name="Second" component={
                () => (
                    <HomeStack.Navigator>
                        <HomeStack.Screen name="Home" component={HomeScreen} />
                        <HomeStack.Screen name="Details" component={DetailsScreen} />
                    </HomeStack.Navigator>
                )
            }>
            </Tab.Screen>
        </Tab.Navigator>
    )
}

export default Navbar;