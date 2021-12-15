import React from "react";
import { bgGray, border } from "@shared/themes";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { CarCarouselTypes } from "./types";
import { ITEM_WIDTH, SLIDER_WIDTH } from "@shared/constants";
import CarouselItem from "@components/CarouselItem";

const CarCarousel: React.FC<CarCarouselTypes> = ({
  types,
  activeSlide,
  onActiveSlide,
}) => {
  return (
    <>
      <Carousel
        layout="default"
        data={types}
        useScrollView
        enableSnap
        shouldOptimizeUpdates
        loopClonesPerSide={4}
        activeAnimationType="timing"
        inactiveSlideScale={0.9}
        lockScrollWhileSnapping
        sliderWidth={SLIDER_WIDTH}
        containerCustomStyle={{ marginTop: 50 }}
        loop
        inactiveSlideOpacity={0.7}
        slideStyle={{
          backgroundColor: bgGray,
          borderRadius: 10,
          elevation: 1,
          borderColor: border,
          borderWidth: 1,
          borderStyle: "solid",
        }}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={(index) => onActiveSlide(index)}
        renderItem={({ index, item }) => {
          return <CarouselItem img={item.pathImg} />;
        }}
      />
      <Pagination
        dotsLength={types.length}
        activeDotIndex={activeSlide}
        dotStyle={{
          width: 10,
          height: 10,
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </>
  );
};

export default CarCarousel;
