import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import SelectedOption from "./SelectedOption";

export const UserProfile = () => {
  const [selectedOption, setSelectedOption] = useState("porVer");

  return (
    <View>
      <View style={styles.containerHeader}>
        <Image
          style={styles.fotoPerfil}
          resizeMode="cover"
          source={require("../../assets/pelu.jpg")}
        />
        <View>
          <Text style={styles.textoSaludo}>Hola</Text>
          <Text style={styles.textoNombre}>Cintia Jimena</Text>
        </View>
      </View>
      <View>
        <View style={styles.conatinerSwitch}>
          <TouchableOpacity
            style={[
              styles.switch,
              selectedOption === "porVer" && styles.opcionActivaContainer,
            ]}
            onPress={() => setSelectedOption("porVer")}
          >
            <Text
              style={[
                styles.textoSwitch,
                selectedOption === "porVer" && styles.opcionActivaText,
              ]}
            >
              Por ver
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.switch,
              selectedOption === "vistas" && styles.opcionActivaContainer,
            ]}
            onPress={() => setSelectedOption("vistas")}
          >
            <Text
              style={[
                styles.textoSwitch,
                selectedOption === "vistas" && styles.opcionActivaText,
              ]}
            >
              Vistas
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <SelectedOption opcion={selectedOption} />
    </View>
  );
};

const styles = StyleSheet.create({
  containerHeader: {
    backgroundColor: "#FF1E1E",
    padding: 10,
    flexDirection: "row",
    columnGap: 20,
    alignItems: "center",
  },
  fotoPerfil: {
    height: 100,
    width: 100,
    borderRadius: 1000,
    borderColor: "#fff",
    borderWidth: 2,
  },
  textoSaludo: {
    color: "#fff",
    fontSize: 20,
  },
  textoNombre: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
  },
  conatinerSwitch: {
    flexDirection: "row",
  },
  switch: {
    flex: 1,
    paddingVertical: 10,
  },
  textoSwitch: {
    textAlign: "center",

    fontSize: 16,
    color: "black",
  },

  opcionActivaContainer: {
    backgroundColor: "#FF1E1E",
  },

  opcionActivaText: {
    color: "#fff",
  },
});
