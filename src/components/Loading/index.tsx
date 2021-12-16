import React from "react";
import { defaultBlack } from "@shared/themes";
import { ActivityIndicator } from "react-native";
import { Container } from "./styles";

const Loading: React.FC = () => {
  return (
    <Container>
      <ActivityIndicator size="large" color={defaultBlack} />
    </Container>
  );
};

export default Loading;
