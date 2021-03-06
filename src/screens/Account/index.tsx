import { DrawerScreenProps } from "@react-navigation/drawer";
import React, { useEffect, useState } from "react";
import { RootAppDrawerNavigator } from "@routes/App/types";
import { Ionicons } from "@expo/vector-icons";
import { formTypeColor } from "@shared/themes";
import { Container, AccountText } from "./styles";
import { asyncUpdateAccount } from "@store/slices/authSlice";
import { Form } from "@components/index";
import { useDispatch } from "react-redux";
import { handleErrors } from "@shared/helpers";

const Account = (
  props: DrawerScreenProps<RootAppDrawerNavigator, "Account">
) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const dispatch = useDispatch();

  const handleUpdate = async (fields: { name?: string; email?: string }) => {
    try {
      setIsLoading(true);
      await dispatch(asyncUpdateAccount(fields.name!, fields.email!));
      setIsLoading(false);
      props.navigation.navigate("Cars");
    } catch (e: any) {
      setIsLoading(false);
      handleErrors("Credentials error", e.message, true);
    }
  };

  return (
    <Container>
      <Ionicons name="person-circle-outline" size={80} color={formTypeColor} />
      <AccountText>Account</AccountText>
      <Form loading={isLoading} isUpdateAccount onSubmit={handleUpdate} />
    </Container>
  );
};

export default Account;
