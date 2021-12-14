import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootAppStackNavigator } from "@routes/App/types";
import React, { useEffect } from "react";
import {
  BrandIcon,
  LinearCarGradient,
  MainIcon,
  Container,
  DescriptionCar,
  BrandModelText,
  PriceText,
  TextArea,
  CarouselContainer,
} from "./styles";

import CarCarousel from "@components/CarCarousel";

const CarsDetail = (
  props: NativeStackScreenProps<RootAppStackNavigator, "CarsDetail">
) => {
  const { car } = props.route.params;

  useEffect(() => {
    props.navigation.setOptions({
      title: car.model,

      headerRight: () => {
        return <BrandIcon resizeMode="contain" source={{ uri: car.iconImg }} />;
      },
    });
  }, []);

  return (
    <LinearCarGradient colors={["#fff", "#D8D7D7"]}>
      <Container>
        <DescriptionCar>
          <MainIcon resizeMode="contain" source={{ uri: car.iconImg }} />
          <TextArea>
            <BrandModelText>
              {car.brand} {car.model}
            </BrandModelText>
            <PriceText>${car.rent}/day</PriceText>
          </TextArea>
        </DescriptionCar>
        <CarouselContainer>
          <CarCarousel types={car.types} />
        </CarouselContainer>
      </Container>
    </LinearCarGradient>
  );
};

export default CarsDetail;
