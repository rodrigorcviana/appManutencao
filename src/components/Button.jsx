import React from "react";
import { Text, Pressable } from "react-native";

const Button = ({
  onPress,
  Title,
}) => {

  return (
    <Pressable
      onPress={() => onPress()}
    >
      <Text>{Title}</Text>
    </Pressable>
  );
};

export default Button;