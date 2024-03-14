import { createDrawerNavigator } from "@react-navigation/drawer";
import React, { useContext } from "react";
import { LoginScreen } from "../screens/auth/LoginScreen";
import { RegisterScreen } from "../screens/auth/RegisterScreen";
import { BotomTabNavigators } from "./BotomTabNavigators";
import AuthReducers from "../reducers/AuthReducers";
import { AuthContext } from "../context/authContext";
import LoadingComponent from "../coponents/ui/LoadingComponent";

const Drawer = createDrawerNavigator();

const DrawerNavigators = () => {
  const { state } = useContext(AuthContext);

  const isLogged = state.isLogged;
  console.log(state.isLoading);
  
  if (state.isLoading) {
    return <LoadingComponent />;
  }

  if (!isLogged) {
    return (
      <Drawer.Navigator>
        <Drawer.Screen name="Login" component={LoginScreen} />
        <Drawer.Screen name="Registro" component={RegisterScreen} />
      </Drawer.Navigator>
    );
  }

  if (isLogged) {
    return (
      <Drawer.Navigator>
        <Drawer.Screen name="Movies" component={BotomTabNavigators} />
      </Drawer.Navigator>
    );
  }
};

export default DrawerNavigators;
