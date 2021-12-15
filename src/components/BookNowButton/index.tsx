import React from "react";
import { TouchableOpacityProps } from "react-native";
import { ButtonContainer, ButtonText } from "./styles";
import { Ionicons } from "@expo/vector-icons";
const BookNowButton = (props: TouchableOpacityProps) => {
  return (
    <ButtonContainer {...props}>
      <ButtonText>Book now</ButtonText>
      <Ionicons name="arrow-forward" color="#fff" size={22} />
    </ButtonContainer>
  );
};

export default BookNowButton;
