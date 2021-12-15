import React from "react";
import { TouchableOpacityProps, View } from "react-native";

import { TouchableButton, ButtonText } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { defaultGreen } from "@shared/themes";

const CartButton = (props: TouchableOpacityProps) => {
  return (
    <TouchableButton>
      <ButtonText>Save</ButtonText>
      <Ionicons name="arrow-forward" size={23} color={defaultGreen} />
    </TouchableButton>
  );
};

export default CartButton;
