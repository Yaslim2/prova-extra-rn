import React from "react";
import { TouchableButton, ButtonText } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { defaultGreen } from "@shared/themes";
import { ForwardButtonProps } from "./types";

const ForwardButton = (props: ForwardButtonProps) => {
  return (
    <TouchableButton {...props}>
      <ButtonText>{props.children}</ButtonText>
      {!props.isLoading ? (
        <Ionicons name="arrow-forward" size={23} color={defaultGreen} />
      ) : null}
    </TouchableButton>
  );
};

export default ForwardButton;
