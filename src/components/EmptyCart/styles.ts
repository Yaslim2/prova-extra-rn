import { defaultBlack, SegoeUIItalic } from "@shared/themes";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";

export const EmptyIcon = styled(AntDesign)`
  margin-bottom: 15px;
`;

export const EmptyCartArea = styled.View`
  margin-top: 30px;
  margin-bottom: 30px;
  justify-content: center;
  align-items: center;
`;

export const EmptyCartText = styled.Text`
  font-family: ${SegoeUIItalic};
  font-size: 17px;
  color: ${defaultBlack};
`;
