import React from "react";
import { firstLetterUpper } from "@shared/helpers";
import { CartItemProps } from "./types";
import { Ionicons } from "@expo/vector-icons";
import { defaultBlack } from "@shared/themes";
import {
  CartItemContainer,
  CartItemContent,
  TrashArea,
  TextContentArea,
  CarImg,
  BrandModelText,
  ColorArea,
  ColorText,
  ColorItSelfText,
  PriceArea,
  PriceItSelfText,
  PriceText,
} from "./styles";
import { useDispatch } from "react-redux";
import { removeFromCart } from "@store/slices/cartSlice";
const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const dispatch = useDispatch();

  const handleDeleteItem = (id: string) => {
    dispatch(removeFromCart({ id }));
  };

  return (
    <CartItemContainer style={{ elevation: 1 }}>
      <CartItemContent>
        <TrashArea onPress={handleDeleteItem.bind(this, item.id)}>
          <Ionicons name="ios-trash" size={24} color={defaultBlack} />
        </TrashArea>
        <TextContentArea>
          <BrandModelText>{item.brand_model}</BrandModelText>
          <ColorArea>
            <ColorText>Color: </ColorText>
            <ColorItSelfText>{firstLetterUpper(item.color)}</ColorItSelfText>
          </ColorArea>
          <PriceArea>
            <PriceText>Price: </PriceText>
            <PriceItSelfText>${item.price.toFixed(2)}</PriceItSelfText>
          </PriceArea>
        </TextContentArea>
      </CartItemContent>

      <CarImg resizeMode="contain" source={{ uri: item.img }} />
    </CartItemContainer>
  );
};

export default CartItem;
