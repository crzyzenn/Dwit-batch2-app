import { Feather } from "@expo/vector-icons";
import axios from "axios";
import React, { useEffect } from "react";
import { Text } from "react-native";
import { useSelector } from "react-redux";
import AppButton from "../components/AppButton";
import Center from "../components/Center";

// Example data from api.
const exampleObjectFromApi = {
  __v: 0,
  _id: "615d70d08793a30004bb575b",
  category: {
    __v: 0,
    _id: "60c16f39c63c4e20a25d461d",
    name: "Mobile",
  },
  categoryId: "60c16f39c63c4e20a25d461d",
  createdAt: "2021-10-06T08:55:19.042Z",
  description:
    "Super Smooth Display – high resolution with a 90-Hz refresh rate – scrolling, swiping and switching through apps feels easy and effortless 16,6 cm / 6.55” AMOLED Screen – for an impressive multimedia experience, instant touch-response, more speed and a fascinating clarity Ultra Clear Triple Camera - 48MP main camera, 16MP ultra wide angle, 2MP macro and 16MP front camera, Nightscape 2.0, Studio Lightining, Super slow motion up to 460 FPS, RAW image, AI Scene Detection 8 GB RAM and 128 GB internal storage for more performance, true speed and larger amounts of data/ High-performance processor Qualcomm Snapdragon 865 with 5G connectivity Power Battery 4300 mAh – Next generation WARP CHARGE 30T technology (ready-to-go in 20 minutes) fast charging / Android 10 operating system OnePlus with Alexa Built-in provides Hands-Free access to Alexa. Simply say “Alexa” to play music make a call control your smart home check the weather and more using just your voice. Stay up to date and accomplish every day tasks, all while on-the-go. Just ask - and Alexa will respond instantly. Download the Alexa app on your OnePlus device to start using Alexa Hands-Free today",
  image: "uploads/1633522492779.jpeg", // image: "https://dwit-ecommerce.herokuapp.com/uploads/1633522492779.jpeg"
  name: "OnePlus 8 Glacial Green,​ 5G Unlocked Android Smartphone U.S Version, 8GB RAM+128GB Storage, 90Hz Fluid Display,Triple Camera",
  price: 387,
  published: true,
};

const HomeScreen = ({ navigation }) => {
  const { user, token } = useSelector((state) => state.auth);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        "https://dwit-ecommerce.herokuapp.com/api/products",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Center>
      <Text>Welcome back {user.name}</Text>
      {/* <Ionicons name="settings" size={200} /> */}
      <Feather name="home" size={200} />
      <AppButton
        text="Go to search screen"
        onPress={() => {
          navigation.navigate("Search");
        }}
      />
      <AppButton
        text="Go to product details screen"
        onPress={() => {
          navigation.navigate("ProductDetails");
        }}
      />
    </Center>
  );
};

export default HomeScreen;
