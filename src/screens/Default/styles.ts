import styled from "styled-components/native";
import { SegoeUIBoldItalic, SegoeUIItalic, defaultBlack } from "@shared/themes";

export const Container = styled.View`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;

export const ActionsArea = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

export const MainButtonArea = styled.View`
  margin-top: 10px;
  margin-bottom: 10px;
  width: 150px;
`;

export const ActionsText = styled.Text`
  font-family: ${SegoeUIItalic};
  color: ${defaultBlack};
  font-size: 17px;
  text-align: center;
`;

export const ActionsBoldText = styled.Text`
  font-family: ${SegoeUIBoldItalic};
  color: ${defaultBlack};
  font-size: 17px;
  text-align: center;
`;
