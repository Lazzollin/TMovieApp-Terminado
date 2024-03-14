import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';


export const axiosInstance = axios.create({
    baseURL: 'http://192.168.100.62:8008/api',
    timeout: 120000,
    headers: {
        "Content-Type": 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*'
    }
});

axiosInstance.interceptors.request.use( //esun middelware
    async (config) => { //es un callback asincrono
        const token = await AsyncStorage.getItem("token")
        if (token) {
            config.headers["token"] = `Bearer ${token}`;
        }

        return config
    }
)