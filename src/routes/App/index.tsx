import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CarsOverview, CarsDetail, Cart } from "@screens/index";
import { HeaderTitle } from "@components/index";
import { defaultBlack, SegoeUIBold } from "@shared/themes";
const AppStack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <AppStack.Navigator
      screenOptions={{
        headerTitleStyle: {
          fontFamily: SegoeUIBold,
          color: defaultBlack,
        },
      }}
    >
      <AppStack.Screen
        component={CarsOverview}
        name="CarsOverview"
        options={{
          headerTitle: HeaderTitle,
        }}
      />
      <AppStack.Screen component={CarsDetail} name="CarsDetail" />
      <AppStack.Screen component={Cart} name="Cart" />
    </AppStack.Navigator>
  );
};

export default AppNavigator;
