import {
  border,
  defaultBlack,
  SegoeUI,
  SegoeUIBoldItalic,
} from "@shared/themes";
import styled from "styled-components/native";
import { CartContainerProps } from "./types";

export const Screen = styled.View`
  flex: 1;
  margin: 20px;
`;

export const CartContainer = styled.View<CartContainerProps>`
  flex: ${(props) => props.flex};
  padding: 15px;
  background-color: #fff;
  border: 1px solid ${border};
  border-radius: 10px;
`;

export const Content = styled.View`
  padding: 15px;
`;

export const CartText = styled.Text`
  font-family: ${SegoeUIBoldItalic};
  font-size: 20px;
  color: ${defaultBlack};
`;

export const CartPriceArea = styled.View`
  flex-direction: row;
`;

export const CartPriceText = styled.Text`
  font-family: ${SegoeUIBoldItalic};
  font-size: 20px;
  color: ${defaultBlack};
`;

export const CartTotalText = styled.Text`
  font-family: ${SegoeUI};
  font-size: 20px;
  color: ${defaultBlack};
`;

export const CartListItems = styled.View`
  flex: 1;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
  flex-wrap: wrap;
`;

export const ButtonArea = styled.View`
  width: 100%;
  margin-top: 15px;
  margin-bottom: 15px;
`;
