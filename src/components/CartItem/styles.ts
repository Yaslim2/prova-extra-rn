import {
  bgCarItem,
  bgGray,
  border,
  defaultBlack,
  SegoeUI,
  SegoeUIBold,
  SegoeUIBoldItalic,
  SegoeUIItalic,
} from "@shared/themes";
import styled from "styled-components/native";

export const CartItemContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${bgCarItem};
  padding: 10px;
  border-radius: 10px;
  border: 1px solid ${border};
  margin-bottom: 5px;
  margin-top: 5px;
`;

export const CartItemContent = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TrashArea = styled.TouchableOpacity`
  margin-right: 15px;
`;

export const TextContentArea = styled.View``;

export const CarImg = styled.Image`
  width: 90px;
  height: 90px;
`;

export const BrandModelText = styled.Text`
  font-family: ${SegoeUIBoldItalic};
  font-size: 17px;
  color: ${defaultBlack};
`;

export const ColorArea = styled.Text`
  flex-direction: row;
`;

export const ColorText = styled.Text`
  font-family: ${SegoeUI};
  font-size: 17px;
  color: ${defaultBlack};
`;

export const ColorItSelfText = styled.Text`
  font-family: ${SegoeUIItalic};
  font-size: 17px;
  color: ${defaultBlack};
`;

export const PriceArea = styled.View`
  flex-direction: row;
`;

export const PriceText = styled.Text`
  font-family: ${SegoeUI};
  font-size: 17px;
  color: ${defaultBlack};
`;

export const PriceItSelfText = styled.Text`
  font-family: ${SegoeUIItalic};
  font-size: 17px;
  color: ${defaultBlack};
`;
