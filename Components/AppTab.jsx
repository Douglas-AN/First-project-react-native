import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStack from "./HomeStack";
import CreditScreen from "./CreditScreen";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import theme from "../Styles/Theme.Jsx";

const Tab = createMaterialBottomTabNavigator();
//const Tab = createBottomTabNavigator();

export default function AppTabs() {
  //const insets = useSafeAreaInsets()

  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      activeColor={theme.colors.primary}
      barStyle={{ backgroundColor: theme.colors.secondary4 }}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          title: "Accueil",
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="CreditScreen"
        component={CreditScreen}
        options={{
          title: "Crédit",
          tabBarLabel: "CreditScreen",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
