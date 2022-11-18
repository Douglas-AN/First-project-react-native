import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./HomeScreen";
import CocktailsDetails from "./CocktailsDetails";

function HomeStack() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CocktailsDetails"
        component={CocktailsDetails}
        options={{
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
}

export default HomeStack;
