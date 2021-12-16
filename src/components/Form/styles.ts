import styled from "styled-components/native";
import {
  SegoeUIBoldItalic,
  SegoeUIItalic,
  border,
  forgotPasswordColor,
  formTypeColor,
} from "@shared/themes";

export const FormContainer = styled.KeyboardAvoidingView`
  width: 100%;
`;

export const TextInputArea = styled.View`
  width: 100%;
  border-bottom-color: ${border};
  border-bottom-width: 2px;
`;

export const Input = styled.TextInput`
  font-family: ${SegoeUIBoldItalic};
  color: ${formTypeColor};
  font-size: 14px;
  padding: 15px;
`;

export const ForgotPasswordButton = styled.TouchableOpacity`
  width: 100%;
  padding: 15px;
  justify-content: center;
  align-items: flex-end;
`;

export const ForgotPasswordText = styled.Text`
  font-family: ${SegoeUIItalic};
  color: ${forgotPasswordColor};
  font-size: 13px;
`;

export const MainButtonArea = styled.View`
  width: 100%;
  padding: 15px;
`;

export const FormArea = styled.View`
  width: 250px;
  background-color: #fff;
  border: 1px solid ${border};
  border-radius: 14px;
  margin-top: 15px;
`;
