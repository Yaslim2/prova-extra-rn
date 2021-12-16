import { defaultBlack, SegoeUIBoldItalic, SegoeUIItalic } from "@shared/themes";
import styled from "styled-components/native";
import { TextFontSizeProps } from "./types";

export const TitleArea = styled.View`
  flex-direction: row;
  align-items: flex-end;
`;

export const ExoticText = styled.Text<TextFontSizeProps>`
  font-family: ${SegoeUIBoldItalic};
  font-size: ${(props) => (props.isLarge ? "32px" : "22px")};
  margin-right: 2.5px;
  color: ${defaultBlack};
`;

export const CarsText = styled.Text<TextFontSizeProps>`
  font-family: ${SegoeUIItalic};
  font-size: ${(props) => (props.isLarge ? "20px" : "14px")};
  color: ${defaultBlack};
`;
