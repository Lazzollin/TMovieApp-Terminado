import React, { useContext, useReducer } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { globalStyles } from "../../styles/globalStyles";
import { useNavigation } from "@react-navigation/native";
import { CustomLogo } from "../../coponents/ui/CustomLogo";
import { CustomButton } from "../../coponents/ui/CustomButton";
import useForm from "../../hooks/useForm";
import { AuthContext } from "../../context/authContext";
import ModalComponent from "../../coponents/ui/ModalComponent";

export const LoginScreen = () => {
  const navigation = useNavigation();
  const { login, state } = useContext(AuthContext);

  const { onChangeInput, formState } = useForm();

  const handleOnSubmit = () => {
    login(formState.email, formState.password);
  };

  return (
    <View style={globalStyles.layout}>
      <View style={styles.containerLogin}>
        <View style={styles.containerLogo}>
          <CustomLogo width={175} height={175} />
          <Text style={styles.welcome}>Welcome..! Enter your Data</Text>
        </View>
        <View style={styles.containerForm}>
          <TextInput
            style={globalStyles.input}
            placeholder="email"
            keyboardType="email-address"
            inputMode="email"
            placeholderTextColor={"#c2c2c2"}
            onChangeText={(value) => onChangeInput("email", value)}
          />
          <TextInput
            style={globalStyles.input}
            placeholder="password"
            keyboardType="default"
            inputMode="text"
            placeholderTextColor={"#c2c2c2"}
            onChangeText={(value) => onChangeInput("password", value)}
          />
          <CustomButton btnText={"SIGN IN"} handlePress={handleOnSubmit} />
        </View>
        <View style={styles.containerLinks}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Register")}
            style={globalStyles.btnLink}
          >
            <AntDesign name="addusergroup" size={26} color={"#fff"} />
            <Text style={globalStyles.btnLinkText}>CREATE ACCOUNT</Text>
          </TouchableOpacity>
          <TouchableOpacity style={globalStyles.btnLink}>
            <MaterialCommunityIcons
              name="form-textbox-password"
              size={26}
              color={"#fff"}
            />
            <Text style={globalStyles.btnLinkText}>RECOVER PASSWORD</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ModalComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  containerLogin: {
    flex: 1,
    justifyContent: "center",
  },

  containerLogo: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },

  containerForm: {
    flex: 3,
    justifyContent: "flex-start",
  },

  containerLinks: {
    flex: 1,
    justifyContent: "space-around",
    flexDirection: "row",
  },

  welcome: {
    fontSize: 17,
    color: "#999",
    fontWeight: "400",
  },
});
