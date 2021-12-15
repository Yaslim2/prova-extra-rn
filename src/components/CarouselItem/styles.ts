import { ITEM_HEIGHT, ITEM_WIDTH } from "@shared/constants";
import styled from "styled-components/native";

export const CarouselContainer = styled.View`
  width: ${ITEM_WIDTH}px;
  height: ${ITEM_HEIGHT}px;
  padding: 10px;
`;

export const ImgWrapper = styled.View`
  width: 100%;
  height: 100%;
`;

export const CarouselImg = styled.Image`
  width: 100%;
  height: 100%;
`;
