import { defaultGray, defaultGreen, SegoeUIBoldItalic } from "@shared/themes";
import styled from "styled-components/native";

export const TouchableButton = styled.TouchableOpacity`
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-radius: 10px;
`;

export const ButtonText = styled.Text`
  font-family: ${SegoeUIBoldItalic};
  font-size: 23px;
  margin-right: 10px;
  color: ${defaultGreen};
`;
