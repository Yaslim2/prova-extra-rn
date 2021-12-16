import React from "react";
import { CarsText, ExoticText, TitleArea } from "./styles";
import { HeaderTitleProps } from "./types";

const HeaderTitle: React.FC<HeaderTitleProps> = (props) => {
  return (
    <TitleArea>
      <ExoticText isLarge={!!props.size}>EXOTIC</ExoticText>
      <CarsText isLarge={!!props.size}>CARS</CarsText>
    </TitleArea>
  );
};

export default HeaderTitle;
