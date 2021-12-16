import { TouchableOpacityProps } from "react-native";

export type ForwardButtonProps = TouchableOpacityProps & {
  isLoading?: boolean;
};
