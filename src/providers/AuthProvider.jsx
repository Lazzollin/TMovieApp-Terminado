import { useReducer } from "react";
import { AuthContext } from "../context/authContext";
import AuthReducers from "../reducers/AuthReducers";
import { axiosInstance } from "../config/axiosInstance";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

const initialValue = {
  user: null,
  isLogged: false,
  token: null,
  isLoading: false,
  errorMsg: "",
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducers, initialValue);

  const login = async (email, password) => {
    dispatch({
      type: "LOADING",
      payload: {
        isLoading: true,
      },
    });

    try {
      const response = await axiosInstance.post("/auth/login", {
        correo: email,
        password: password,
      });
      // console.log(response);
      if (response?.data?.msg === "Login OK") {
        dispatch({
          type: "LOGIN",
          payload: {
            user: {
              ...response?.data?.usuario,
            },
            token: response?.data?.token,
          },
        });

        await AsyncStorage.setItem("token", response?.data?.token);
      } else {
        console.log(response, "error");
        dispatch({
          type: "ERROR",
          payload: {
            errorMsg: "Ha ocurrido un error",
          },
        });
      }
    } catch (error) {
      // console.log(error);
      dispatch({
        type: "ERROR",
        payload: {
          errorMsg: error?.response?.data?.errors[0]?.msg,
        },
      });
    }

    dispatch({
      type: "LOADING",
      payload: {
        isLoading: false,
      },
    });
  };

  return (
    <AuthContext.Provider
      value={{
        state,
        login,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// {
//   "msg": "Login OK",
//   "usuario": {
//       "nombre": "katu",
//       "correo": "katu@katu.com",
//       "rol": "USER_ROLE",
//       "estado": true,
//       "uid": "65ef869944c050094d8ee303"
//   },
//   "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2NWVmODY5OTQ0YzA1MDA5NGQ4ZWUzMDMiLCJpYXQiOjE3MTAxOTY1NDgsImV4cCI6MTcxMDIxMDk0OH0.2qhOqYCf2V-j_kL5WA7xsgnEjOXZ4LGAzTsno2hJiiw"
// }
