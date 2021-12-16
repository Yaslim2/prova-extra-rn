import HeaderTitle from "@components/HeaderTitle";
import React from "react";
import { Container, TextContainer } from "./styles";

const DetailsArea: React.FC = () => {
  return (
    <Container>
      <TextContainer>
        <HeaderTitle size="large" />
      </TextContainer>
    </Container>
  );
};

export default DetailsArea;
