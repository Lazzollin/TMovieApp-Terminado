import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export const CustomButton = ({
  btnText,
  bckColor = "red",
  marginH = 50,
  marginV = 20,
  borderR = 10,
  paddingV = 15,
  borderW = 0,
  borderC = "",
  handlePress = () => console.log("Falt evento press"),
}) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => handlePress()}
        style={[
          styles.btn,
          {
            backgroundColor: bckColor,
            marginHorizontal: marginH,
            marginVertical: marginV,
            borderRadius: borderR,
            paddingVertical: paddingV,
            borderWidth: borderW,
            borderColor: borderC ? borderC : bckColor,
          },
        ]}
      >
        <Text style={styles.btnText}>{btnText}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    justifyContent: "center",
    alignItems: "center",
  },

  btnText: {
    fontSize: 18,
    color: "#000",
    fontWeight: "500",
  },
});
