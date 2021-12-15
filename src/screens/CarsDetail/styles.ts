import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import {
  defaultBlack,
  SegoeUI,
  SegoeUIBold,
  SegoeUIItalic,
} from "@shared/themes";

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
  width: 78%;
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

export const IndexColorArea = styled.View`
  justify-content: flex-start;
  align-items: flex-end;
`;

export const IndexText = styled.Text`
  font-family: ${SegoeUIBold};
  font-size: 22px;
  color: ${defaultBlack};
  text-align: left;
`;

export const ColorText = styled.Text`
  font-family: ${SegoeUI};
  font-size: 22px;
  color: ${defaultBlack};
  text-align: left;
`;

export const CarouselContainer = styled.View`
  width: 100%;
`;

export const RentArea = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 15px;
`;

export const RentText = styled.Text`
  font-family: ${SegoeUIItalic};
  font-size: 18px;
  color: ${defaultBlack};
  text-align: center;
`;

export const ButtonArea = styled.View`
  margin-top: 15px;
`;
