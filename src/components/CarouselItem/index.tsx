import React from "react";
import { CarouselContainer, CarouselImg, ImgWrapper } from "./styles";
import { CarouselItemProps } from "./types";

const CarouselItem: React.FC<CarouselItemProps> = ({ img }) => {
  return (
    <CarouselContainer>
      <ImgWrapper>
        <CarouselImg resizeMode="contain" source={{ uri: img }} />
      </ImgWrapper>
    </CarouselContainer>
  );
};

export default CarouselItem;
