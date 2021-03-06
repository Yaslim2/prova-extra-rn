import React, { useEffect } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootAppStackNavigator } from "@routes/App/types";
import { FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@store/types";
import { CarItem } from "@components/index";
import {
  CarsOverviewContainer,
  Screen,
  CatalogText,
  DescriptionText,
  DescriptionArea,
} from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { defaultBlack } from "@shared/themes";
import { logout } from "@store/slices/authSlice";

const CarsOverview = (
  props: NativeStackScreenProps<RootAppStackNavigator, "CarsOverview">
) => {
  const dispatch = useDispatch();
  const cars = useSelector((state: RootState) => state.car.cars);

  const handleLogout = () => {
    dispatch(logout());
  };

  useEffect(() => {
    props.navigation.setOptions({
      headerRight: () => {
        return (
          <Ionicons
            name="log-out-outline"
            size={24}
            color={defaultBlack}
            onPress={handleLogout}
          />
        );
      },
    });
  }, []);

  const handlePress = (id: string) => {
    const car = cars.find((car) => car.id === id);
    if (car) {
      props.navigation.navigate("CarsDetail", {
        car: car,
      });
    }
  };
  return (
    <Screen>
      <DescriptionArea>
        <CatalogText>CATALOG</CatalogText>
        <DescriptionText>
          Rent your car at the lowest price on the market!
        </DescriptionText>
      </DescriptionArea>
      <CarsOverviewContainer style={{ elevation: 1 }}>
        <FlatList
          style={{ width: "100%" }}
          data={cars}
          removeClippedSubviews
          keyExtractor={(item) => item.id}
          renderItem={(item) => (
            <CarItem onPress={handlePress} car={item.item} />
          )}
        />
      </CarsOverviewContainer>
    </Screen>
  );
};

export default CarsOverview;
