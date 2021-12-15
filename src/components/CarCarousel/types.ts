import { TypesCar } from "@store/slices/carSlice/types";
export type CarCarouselTypes = {
  types: TypesCar[];
  activeSlide: number;
  onActiveSlide: (slide: number) => void;
};
