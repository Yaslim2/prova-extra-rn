import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CarsOverview, CarsDetail } from "@screens/index";
import { HeaderTitle } from "@components/index";
const AppStack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <AppStack.Navigator
      screenOptions={{
        headerTitle: HeaderTitle,
      }}
    >
      <AppStack.Screen component={CarsOverview} name="CarsOverview" />
      <AppStack.Screen component={CarsDetail} name="CarsDetail" />
    </AppStack.Navigator>
  );
};

export default AppNavigator;
