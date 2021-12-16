import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { CarsOverview, CarsDetail, Cart, Account } from "@screens/index";
import { HeaderTitle } from "@components/index";
import {
  bgCarItem,
  defaultBlack,
  SegoeUIBold,
  SegoeUIBoldItalic,
} from "@shared/themes";
import { Ionicons } from "@expo/vector-icons";
const CarStack = createNativeStackNavigator();

const CarNavigator = () => {
  return (
    <CarStack.Navigator
      screenOptions={{
        headerTitleStyle: {
          fontFamily: SegoeUIBoldItalic,
          color: defaultBlack,
        },
      }}
    >
      <CarStack.Screen
        component={CarsOverview}
        name="CarsOverview"
        options={({ navigation }) => {
          return {
            headerLeft: () => {
              return (
                <Ionicons
                  name="md-menu"
                  size={26}
                  color={defaultBlack}
                  style={{ marginRight: 20 }}
                  onPress={() => navigation.toggleDrawer()}
                />
              );
            },
            headerTitle: HeaderTitle,
          };
        }}
      />
      <CarStack.Screen component={CarsDetail} name="CarsDetail" />
      <CarStack.Screen component={Cart} name="Cart" />
    </CarStack.Navigator>
  );
};

const AccountStack = createNativeStackNavigator();

const AccountNavigator = () => {
  return (
    <AccountStack.Navigator
      screenOptions={{
        headerTitleStyle: {
          fontFamily: SegoeUIBoldItalic,
          color: defaultBlack,
        },
      }}
    >
      <AccountStack.Screen
        component={Account}
        name="AccountScreen"
        options={({ navigation }) => {
          return {
            headerLeft: () => {
              return (
                <Ionicons
                  name="md-menu"
                  size={26}
                  color={defaultBlack}
                  style={{ marginRight: 20 }}
                  onPress={() => navigation.toggleDrawer()}
                />
              );
            },
            title: "Update account",
          };
        }}
      />
    </AccountStack.Navigator>
  );
};

const AppDrawer = createDrawerNavigator();

const AppNavigator = () => {
  return (
    <AppDrawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: defaultBlack,
        drawerLabelStyle: { fontFamily: SegoeUIBold, fontSize: 15 },
        drawerContentStyle: { backgroundColor: bgCarItem },
      }}
    >
      <AppDrawer.Screen
        component={CarNavigator}
        name="Cars"
        options={{
          drawerIcon: (drawerConfig) => {
            return (
              <Ionicons
                name="car-sport-outline"
                size={26}
                color={drawerConfig.color}
              />
            );
          },
        }}
      />
      <AppDrawer.Screen
        component={AccountNavigator}
        name="Account"
        options={{
          drawerIcon: (drawerConfig) => {
            return (
              <Ionicons
                name="person-circle-outline"
                size={26}
                color={drawerConfig.color}
              />
            );
          },
        }}
      />
    </AppDrawer.Navigator>
  );
};

export default AppNavigator;
