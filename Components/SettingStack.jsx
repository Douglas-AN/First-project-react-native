import { createStackNavigator } from "@react-navigation/stack";
import Setting from "./Setting";
import Detail from './Detail';

const SettingStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen name="Setting" component={Setting}></Stack.Screen>
      <Stack.Screen name="Detail" component={Detail}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default SettingStack;
