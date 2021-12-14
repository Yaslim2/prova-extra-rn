import React from "react";
import { CarItemProps } from "./types";
import {
  Touchable,
  CarImg,
  BrandText,
  ModelText,
  CarArea,
  DayText,
  Footer,
  MoneyText,
  RentText,
  AreaPrice,
  Header,
  Description,
  Wrapper,
} from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { defaultGray } from "@shared/themes";

const CarItem: React.FC<CarItemProps> = (props) => {
  return (
    <Wrapper>
      <Touchable
        onPress={props.onPress.bind(this, props.car.id)}
        style={{ elevation: 1 }}
      >
        <Header>
          <Description>
            <BrandText>{props.car.brand}</BrandText>
            <ModelText>{props.car.model.toUpperCase()}</ModelText>
          </Description>
          <Ionicons name="ellipsis-horizontal" color={defaultGray} size={25} />
        </Header>
        <CarArea>
          <CarImg resizeMode="contain" source={{ uri: props.car.pathImg }} />
        </CarArea>
        <Footer>
          <AreaPrice>
            <MoneyText>$</MoneyText>
            <RentText>{props.car.rent}</RentText>
          </AreaPrice>

          <DayText>/day</DayText>
        </Footer>
      </Touchable>
    </Wrapper>
  );
};

export default CarItem;
