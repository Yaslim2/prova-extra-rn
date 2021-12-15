import React from "react";
import { EmptyCartArea, EmptyCartText, EmptyIcon } from "./styles";
import { defaultBlack } from "@shared/themes";

const EmptyCart: React.FC = () => {
  return (
    <EmptyCartArea>
      <EmptyIcon name="frowno" size={50} color={defaultBlack} />
      <EmptyCartText>There is no items around here...</EmptyCartText>
      <EmptyCartText>Add the first, then check this out!</EmptyCartText>
    </EmptyCartArea>
  );
};

export default EmptyCart;
