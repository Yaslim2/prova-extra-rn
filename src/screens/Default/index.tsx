import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { DetailsArea, ForwardButton, ScrollContainer } from "@components/index";
import { RootAuthStackParamList } from "@routes/Auth/types";
import {
  Container,
  ActionsArea,
  ActionsText,
  MainButtonArea,
  ActionsBoldText,
} from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { defaultBlack } from "@shared/themes";

const Default = (
  props: NativeStackScreenProps<RootAuthStackParamList, "Default">
) => {
  const handleSignIn = () => {
    props.navigation.navigate("Login");
  };

  const handleSignUp = () => {
    props.navigation.navigate("SignUp");
  };

  return (
    <ScrollContainer>
      <Container>
        <DetailsArea />
        <Ionicons name="car-sport-outline" size={60} color={defaultBlack} />
        <ActionsArea>
          <ActionsText>Don't have an account?</ActionsText>
          <ActionsBoldText>
            Sign up and rent the bests cars on the market!
          </ActionsBoldText>
          <MainButtonArea>
            <ForwardButton onPress={handleSignUp}>Sign Up</ForwardButton>
          </MainButtonArea>
        </ActionsArea>
        <ActionsArea>
          <ActionsText>Already have one?</ActionsText>
          <ActionsBoldText>
            Then sign in and see the bests cars for your to rent!
          </ActionsBoldText>
          <MainButtonArea>
            <ForwardButton onPress={handleSignIn}>Sign In</ForwardButton>
          </MainButtonArea>
        </ActionsArea>
      </Container>
    </ScrollContainer>
  );
};

export default Default;
