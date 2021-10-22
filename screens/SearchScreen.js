import React, { useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Input } from "react-native-elements";
import { useSelector } from "react-redux";
import Center from "../components/Center";
import ProductCard from "../components/ProductCard";
import { $axios } from "../lib/axios";

const SearchScreen = ({ navigation }) => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const authState = useSelector((state) => state.auth);
  console.log(authState);

  // Place this acc to the scenario
  // setTimeout(() => {setLoading(false)}, 5000)

  const searchProducts = async () => {
    try {
      setLoading(true);
      const response = await $axios.get(`/products/search/${query}`);
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <View style={styles.container}>
      <Input
        placeholder="Search products..."
        keyboardType="web-search"
        clearButtonMode="while-editing"
        onChangeText={(val) => setQuery(val)}
        onSubmitEditing={searchProducts}
      />
      {loading ? (
        <Center>
          <ActivityIndicator size="large" />
        </Center>
      ) : products.length === 0 ? (
        <Center>
          <Text>No products found</Text>
        </Center>
      ) : (
        <FlatList
          data={products}
          renderItem={({ item, index, separators }) => {
            // console.log(index, separators);
            return <ProductCard product={item} />;
          }}
          keyExtractor={(item) => item._id}
          // Optional props
          numColumns={2}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
  },
});
