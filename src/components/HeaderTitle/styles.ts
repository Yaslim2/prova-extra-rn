import { defaultBlack, SegoeUIBoldItalic, SegoeUIItalic } from "@shared/themes";
import styled from "styled-components/native";

export const TitleArea = styled.View`
  flex-direction: row;
  align-items: flex-end;
`;

export const ExoticText = styled.Text`
  font-family: ${SegoeUIBoldItalic};
  font-size: 22px;
  margin-right: 2.5px;
  color: ${defaultBlack};
`;

export const CarsText = styled.Text`
  font-family: ${SegoeUIItalic};
  font-size: 14px;
  color: ${defaultBlack};
`;
