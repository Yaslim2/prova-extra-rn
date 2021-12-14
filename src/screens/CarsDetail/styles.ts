import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import { defaultBlack, SegoeUIBold, SegoeUIItalic } from "@shared/themes";

export const LinearCarGradient = styled(LinearGradient)`
  flex: 1;
`;

export const Container = styled.View`
  margin: 20px;
`;

export const DescriptionCar = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const MainIcon = styled.Image`
  width: 90px;
  height: 90px;
  margin-right: 15px;
`;

export const TextArea = styled.View`
  flex-direction: column;
`;

export const BrandModelText = styled.Text`
  font-family: ${SegoeUIBold};
  font-size: 22px;
  color: ${defaultBlack};
`;

export const PriceText = styled.Text`
  font-family: ${SegoeUIItalic};
  font-size: 22px;
  color: ${defaultBlack};
`;

export const BrandIcon = styled.Image`
  width: 40px;
  height: 40px;
`;

export const CarouselContainer = styled.View`
  width: 100%;
`;
