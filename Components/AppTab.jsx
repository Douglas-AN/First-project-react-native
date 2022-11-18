import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet} from 'react-native';
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
        style={styles.container}
        name="CreditScreen"
        component={CreditScreen}
        options={{
          title: "Crédit",
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
