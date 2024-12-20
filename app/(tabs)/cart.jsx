import { StyleSheet, Image, Button, RefreshControl, FlatList } from 'react-native';
import { useState, useCallback } from 'react';

import  ProductCard  from '@/components/ProductCard.jsx';

import { getAllCart, removeProductFromCart } from '../../sql.js';

export default function CartScreen() {
  const [ isLoad, setIsLoad ] = useState(false);
  const [data, setData] = useState();
  const [refreshing, setRefreshing] = useState(false);

  if (!isLoad) {
    setData(getAllCart());
    setIsLoad(true);
  }

  console.log("CART: " )
  console.log(data)

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setData(getAllCart());
    setRefreshing(false);
  }, []);

  const deleteProductFromCart = (id) => () => {
    removeProductFromCart(id);
    setData(data.filter((product) => product.id !== id));
  }

  return (
    <FlatList
      style={styles.container}
      ListHeaderComponent={
        <Image
          source={require('@/assets/images/react-logo.png')}
          style={styles.reactLogo}
        />
      }
      data={data}
      renderItem={({item}) => {
        const button = <Button title='Remove from cart' onPress={deleteProductFromCart(item.id)}></Button>;
        const key = `${item.productId}`;
        return <ProductCard key={key} product={item} button={button}></ProductCard>;
      }}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
    </FlatList>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  reactLogo: {
    height: 178,
    width: 580,
    left: 110,
  },
});
