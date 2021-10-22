import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/core";
import React from "react";
import { useSelector } from "react-redux";
import SearchScreen from "../screens/SearchScreen";
import SettingsScreen from "../screens/SettingsScreen";
import AppStack from "./AppStack";

const Tabs = createBottomTabNavigator();

const AppTabs = () => {
  const { items } = useSelector((state) => state.cart);
  const { navigate } = useNavigation();
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, focused, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Search") {
            iconName = "search";
          } else if (route.name === "Settings") {
            iconName = focused ? "settings" : "settings-outline";
          }

          return <Ionicons color={color} name={iconName} size={size} />;
        },
        tabBarActiveTintColor: "teal",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tabs.Screen
        options={{ header: () => null }}
        name="Home"
        component={AppStack}
      />
      <Tabs.Screen
        // options={{
        //   headerRight: () => (
        //     <TouchableOpacity
        //       onPress={() => {
        //         navigate("Cart");
        //       }}
        //     >
        //       <Icon name="cart-sharp" type="ionicon" />
        //       {items.length > 0 && (
        //         <Badge
        //           containerStyle={{
        //             position: "absolute",
        //             top: -6,
        //             right: -10,
        //           }}
        //           // Display whatever amount of items we have in cart:
        //           value={items.length}
        //           status="error"
        //         />
        //       )}
        //     </TouchableOpacity>
        //   ),
        // }}
        name="Search"
        component={SearchScreen}
      />
      <Tabs.Screen name="Settings" component={SettingsScreen} />
    </Tabs.Navigator>
  );
};

export default AppTabs;
