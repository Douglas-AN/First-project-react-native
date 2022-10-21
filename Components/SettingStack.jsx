import { createStackNavigator } from "@react-navigation/stack";
import Setting from "./Setting";

const SettingStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Setting" component={Setting}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default SettingStack;
