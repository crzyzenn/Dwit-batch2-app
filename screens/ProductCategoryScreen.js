import axios from "axios";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import Center from "../components/Center";
import ProductCard from "../components/ProductCard";
import { $axios } from "../lib/axios";
import { myStyles } from "../styles/baseStyles";

const ProductCategoryScreen = ({ route }) => {
  const { id, name } = route.params;
  const [refreshing, setRefreshing] = useState(false);
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    setRefreshing(true);
    try {
      const response = await $axios.get(`/products/category/${id}`);
      setProducts(response.data);
    } catch (error) {
      console.log(error.response.data);
    } finally {
      setRefreshing(false);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <Text
        style={[
          myStyles.title,
          {
            paddingHorizontal: 10,
          },
        ]}
      >
        All Products from category ({name})
      </Text>
      {refreshing ? (
        <Center>
          <ActivityIndicator size="large" />
        </Center>
      ) : products.length === 0 ? (
        <Center>
          <Text>No products from this category.</Text>
        </Center>
      ) : (
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
      )}
    </View>
  );
};

export default ProductCategoryScreen;

const styles = StyleSheet.create({});
