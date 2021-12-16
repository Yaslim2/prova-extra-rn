import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootAppStackNavigator } from "@routes/App/types";
import {
  CartContainer,
  CartPriceText,
  CartText,
  CartTotalText,
  Screen,
  CartPriceArea,
  CartListItems,
  ButtonArea,
} from "./styles";
import { EmptyCart, CartItem, ForwardButton } from "@components/index";
import { useSelector } from "react-redux";
import { RootState } from "@store/types";
import { FlatList } from "react-native";

const Cart = (props: NativeStackScreenProps<RootAppStackNavigator, "Cart">) => {
  const items = useSelector((state: RootState) => state.cart.items);
  const amount = useSelector((state: RootState) => state.cart.totalAmount);

  let flexProperty =
    items.length === 0
      ? 0.36
      : items.length <= 3
      ? 0.15 * items.length + 0.3
      : 0.16 * items.length + 0.3;

  flexProperty = flexProperty > 1 ? 1 : flexProperty;
  return (
    <Screen>
      <CartContainer flex={flexProperty} style={{ elevation: 1 }}>
        <CartText>CART</CartText>
        {items.length === 0 ? (
          <EmptyCart />
        ) : (
          <CartListItems>
            <FlatList
              data={items}
              removeClippedSubviews
              style={{ width: "100%", flex: 1 }}
              renderItem={(item) => <CartItem item={item.item} />}
            />
          </CartListItems>
        )}
        <CartPriceArea>
          <CartPriceText>CART </CartPriceText>
          <CartTotalText>TOTAL: ${amount.toFixed(2)}</CartTotalText>
        </CartPriceArea>
        {items.length !== 0 && (
          <ButtonArea>
            <ForwardButton>Save</ForwardButton>
          </ButtonArea>
        )}
      </CartContainer>
    </Screen>
  );
};

export default Cart;
