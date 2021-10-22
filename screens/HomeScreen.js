import axios from "axios";
import React, { useEffect, useState } from "react";
import { FlatList, ScrollView, View } from "react-native";
import { Chip } from "react-native-elements";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import { $axios } from "../lib/axios";

const HomeScreen = ({ navigation }) => {
  const [refreshing, setRefreshing] = useState(false);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);

  const fetchProducts = async () => {
    console.log("Refreshing");
    setRefreshing(true);
    try {
      const response = await $axios.get("/products");
      setProducts(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error.response.data);
    } finally {
      setRefreshing(false);
    }
  };

  const fetchCategories = async () => {
    setLoading(true);
    try {
      const response = await $axios.get("/categories");
      setCategories(response.data);
    } catch (error) {
      console.log(error.response.data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
      }}
    >
      <ScrollView
        horizontal
        style={{
          marginVertical: 10,
          paddingHorizontal: 10,
        }}
        showsHorizontalScrollIndicator={false}
      >
        {categories.map(({ _id, name }) => (
          <Chip
            key={_id}
            title={name}
            containerStyle={{
              marginRight: 5,
            }}
            onPress={() => {
              navigation.navigate("ProductCategory", {
                id: _id,
                name: name,
              });
            }}
          />
        ))}
      </ScrollView>
      <FlatList
        data={products}
        renderItem={({ item, index, separators }) => {
          // console.log(index, separators);
          return <ProductCard product={item} />;
        }}
        // ItemSeparatorComponent={() => (
        //   <View
        //     style={{
        //       borderColor: "black",
        //       borderWidth: 5,
        //     }}
        //   ></View>
        // )}
        keyExtractor={(item) => item._id}
        // Optional props
        numColumns={2}
        showsVerticalScrollIndicator={false}
        // For pull to refresh
        refreshing={refreshing}
        onRefresh={fetchProducts}
      />
    </View>
  );
};

export default HomeScreen;
