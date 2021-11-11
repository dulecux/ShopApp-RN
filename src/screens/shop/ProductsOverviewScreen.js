import React from "react";
import { StyleSheet, FlatList } from 'react-native';
import { useSelector } from "react-redux";

import ProductItem from '../../components/shop/ProductItem';


const ProductsOverviewScreen = (props) => {

    const products = useSelector(state => state.products.availableProducts);

    return (
           <FlatList 
            data={products}
            keyExtractor={item => item.id}
            renderItem={({ item }) => {
               return <ProductItem
                    image={item.imageUrl}
                    title={item.title}
                    price={item.price}
                    onViewDetail={() => {
                        props.navigation.navigate('ProductDetail', {
                                productId: item.id,
                                productTitle: item.title
            });
                    }}
                    onAddToCart={() => {}}
                />
            }}
           />
    );
};

ProductsOverviewScreen.navigationOptions = {
    headerTitle: 'All Products'
  };

const styles = StyleSheet.create({});

export default ProductsOverviewScreen;