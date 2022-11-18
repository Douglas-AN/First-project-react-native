import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStack from "./HomeStack";
import CreditScreen from "./CreditScreen";

const Tab = createBottomTabNavigator();

export default function AppTabs() {
  //const insets = useSafeAreaInsets()

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          title: "Accueil",
        }}
      />
      <Tab.Screen
        name="CreditScreen"
        component={CreditScreen}
        options={{
          title: "Crédit",
        }}
      />
    </Tab.Navigator>
  );
}
