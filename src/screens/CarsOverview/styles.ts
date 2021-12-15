import {
  border,
  defaultBlack,
  SegoeUIBold,
  SegoeUIItalic,
} from "@shared/themes";
import styled from "styled-components/native";

export const Screen = styled.View`
  flex: 1;
  margin: 20px;
  justify-content: center;
`;

export const DescriptionArea = styled.View`
  margin-bottom: 15px;
`;

export const CatalogText = styled.Text`
  font-size: 20px;
  font-family: ${SegoeUIBold};
  color: ${defaultBlack};
  text-align: center;
  margin-bottom: 7px;
`;
export const DescriptionText = styled.Text`
  font-size: 16px;
  font-family: ${SegoeUIItalic};
  color: ${defaultBlack};
`;

export const CarsOverviewContainer = styled.View`
  flex: 1;
  background-color: #fff;
  border: 1px solid ${border};
  border-radius: 10px;
  align-items: center;
`;
