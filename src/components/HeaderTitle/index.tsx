import React from "react";
import { CarsText, ExoticText, TitleArea } from "./styles";

const HeaderTitle: React.FC = () => {
  return (
    <TitleArea>
      <ExoticText>EXOTIC</ExoticText>
      <CarsText>CARS</CarsText>
    </TitleArea>
  );
};

export default HeaderTitle;
