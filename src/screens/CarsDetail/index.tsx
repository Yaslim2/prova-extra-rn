import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootAppStackNavigator } from "@routes/App/types";
import React, { useEffect, useState } from "react";
import {
  LinearCarGradient,
  MainIcon,
  Container,
  DescriptionCar,
  BrandModelText,
  PriceText,
  TextArea,
  IndexText,
  IndexColorArea,
  ColorText,
  CarouselContainer,
  RentArea,
  RentText,
  ButtonArea,
} from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { firstLetterUpper } from "@shared/helpers";
import { BookNowButton, CarCarousel } from "@components/index";
import { defaultBlack } from "@shared/themes";
import { useDispatch } from "react-redux";
import { addToCart } from "@store/slices/cartSlice";

const CarsDetail = (
  props: NativeStackScreenProps<RootAppStackNavigator, "CarsDetail">
) => {
  const dispatch = useDispatch();
  const { car } = props.route.params;

  const [activeSlide, setActiveSlide] = useState<number>(0);

  const handleActiveSlide = (slide: number) => {
    setActiveSlide(slide);
  };

  const handleGoToCart = () => {
    props.navigation.navigate("Cart");
  };

  const handleBookNow = () => {
    dispatch(
      addToCart({
        id: new Date().getTime().toString(),
        brand_model: car.brand + " " + car.model,
        color: car.types[activeSlide].color,
        price: car.rent,
        img: car.types[activeSlide].pathImg,
      })
    );
  };

  useEffect(() => {
    props.navigation.setOptions({
      title: car.model,
      headerRight: () => {
        return (
          <Ionicons
            name="ios-cart-outline"
            color={defaultBlack}
            size={24}
            onPress={handleGoToCart}
          />
        );
      },
    });
  }, []);

  const indexText =
    activeSlide <= 9 ? "0" + (activeSlide + 1) : activeSlide + 1;
  const colorText = firstLetterUpper(car.types[activeSlide].color);

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
        <IndexColorArea>
          <IndexText>{indexText}</IndexText>
          <ColorText>{colorText}</ColorText>
        </IndexColorArea>
        <CarouselContainer>
          <CarCarousel
            onActiveSlide={handleActiveSlide}
            activeSlide={activeSlide}
            types={car.types}
          />
        </CarouselContainer>
        <RentArea>
          <RentText>
            Did you like the car? So rent it and pick it up at the nearest
            store!
          </RentText>
          <ButtonArea>
            <BookNowButton onPress={handleBookNow} />
          </ButtonArea>
        </RentArea>
      </Container>
    </LinearCarGradient>
  );
};

export default CarsDetail;
