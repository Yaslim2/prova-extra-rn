import { defaultBlack, SegoeUI, SegoeUIBold } from "@shared/themes";
import styled from "styled-components/native";

export const ButtonContainer = styled.TouchableOpacity`
  width: 177px;
  height: 50px;
  border-radius: 25px;
  background-color: ${defaultBlack};
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-family: ${SegoeUIBold};
  font-size: 15px;
  margin-right: 10px;
`;
