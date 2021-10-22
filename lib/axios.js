import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
// Create axios instance
// $axios..

export const $axios = axios.create({
  baseURL: "https://dwit-ecommerce.herokuapp.com/api",
  // timeout: 5000
});

// Intercept request
// Before making an API request
$axios.interceptors.request.use(async (config) => {
  // config object -> original api request...
  // console.log(config);
  // what to do before making an api request????
  const accessToken = await AsyncStorage.getItem("accessToken");
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

// Intercept response
// After getting data from API
// $axios.interceptors.response.use((response) => {
//   // return response.data;
//   return response;
// });
