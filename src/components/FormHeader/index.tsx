import HeaderTitle from "@components/HeaderTitle";
import React from "react";
import { FormTypeText } from "./styles";

const FormHeader: React.FC = (props) => {
  return (
    <>
      <HeaderTitle size="large" />
      <FormTypeText>{props.children}</FormTypeText>
    </>
  );
};

export default FormHeader;
