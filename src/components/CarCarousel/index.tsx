import React, { useState } from "react";
import { Dimensions, Image } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { CarCarouselTypes } from "./types";

const SLIDER_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 3) / 4);

const CarCarousel: React.FC<CarCarouselTypes> = (props) => {
  const [activeSlide, setActiveSlide] = useState<number>(0);

  return (
    <>
      <Carousel
        layout="default"
        data={props.types}
        sliderWidth={SLIDER_WIDTH}
        containerCustomStyle={{ marginTop: 50 }}
        itemWidth={ITEM_WIDTH}
        slideStyle={{
          flex: 1,
          backgroundColor: "#000",
        }}
        onSnapToItem={(index) => setActiveSlide(index)}
        renderItem={({ index, item }) => {
          return (
            <Image
              resizeMode="contain"
              style={{ width: ITEM_WIDTH, height: ITEM_HEIGHT }}
              source={{ uri: item.pathImg }}
            />
          );
        }}
      />
      <Pagination
        dotsLength={props.types.length}
        activeDotIndex={activeSlide}
        dotElement={
          <Image
            resizeMode="contain"
            style={{ width: 50, height: 50 }}
            source={{ uri: props.types[activeSlide].pathImg }}
          />
        }
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
