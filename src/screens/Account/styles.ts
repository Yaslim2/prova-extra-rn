import styled from "styled-components/native";
import { SegoeUIBoldItalic, defaultBlack } from "@shared/themes";

export const Container = styled.View`
  flex: 1;
  margin-top: 50px;
  align-items: center;
`;

export const AccountText = styled.Text`
  font-size: 30px;
  font-family: ${SegoeUIBoldItalic};
  color: ${defaultBlack};
`;
