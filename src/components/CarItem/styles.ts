import {
  bgCarItem,
  border,
  defaultBlack,
  SegoeUI,
  SegoeUIBold,
  SegoeUIBoldItalic,
  SegoeUIItalic,
} from "@shared/themes";
import styled from "styled-components/native";

export const Wrapper = styled.View`
  flex: 1;
  padding: 15px;
`;

export const Touchable = styled.TouchableOpacity`
  flex: 1;
  background-color: ${bgCarItem};
  padding: 10px;
  border-radius: 10px;
  border: 1px solid ${border};
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Description = styled.View`
  flex-direction: column;
`;

export const CarArea = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 100%;
`;

export const CarImg = styled.Image`
  width: 244px;
  height: 107px;
`;

export const BrandText = styled.Text`
  font-family: ${SegoeUIBold};
  font-size: 17px;
  color: ${defaultBlack};
`;

export const ModelText = styled.Text`
  font-family: ${SegoeUIItalic};
  font-size: 17px;
  color: ${defaultBlack};
`;

export const Footer = styled.View`
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const AreaPrice = styled.View`
  flex-direction: row;
  align-items: flex-start;
`;

export const MoneyText = styled.Text`
  font-size: 13px;
  color: ${defaultBlack};
  font-family: ${SegoeUIBold};
`;

export const RentText = styled.Text`
  font-size: 20px;
  color: ${defaultBlack};
  font-family: ${SegoeUIBold};
`;

export const DayText = styled.Text`
  font-size: 13px;
  color: ${defaultBlack};
  font-family: ${SegoeUI};
`;
