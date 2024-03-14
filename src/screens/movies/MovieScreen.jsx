import React from "react";
import { Button, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const MovieScreen = () => {
  const navigation = useNavigation();

  return (
    <>
      <Text style={{ fontSize: 25 }}>MovieScreen</Text>
      <Button
        title="VER MOVIE"
        onPress={() => navigation.navigate("MoviePlay")}
      />
    </>
  );
};
