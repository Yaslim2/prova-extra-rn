import styled from "styled-components/native";
import { SegoeUIBoldItalic, defaultBlack } from "@shared/themes";
import { Ionicons } from "@expo/vector-icons";

export const TouchableMainButton = styled.TouchableOpacity`
  margin-top: 15px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-family: ${SegoeUIBoldItalic};
  font-size: 24px;
  color: ${defaultBlack};
  margin-right: 0px;
`;

export const LeftArrow = styled(Ionicons)`
  margin-right: 10px;
`;
