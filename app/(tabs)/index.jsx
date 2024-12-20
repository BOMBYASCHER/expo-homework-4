import { Image, StyleSheet, FlatList, RefreshControl, Button } from 'react-native';
import { useState, useCallback, useEffect } from 'react';

import { getAllProducts, addProductToCart, getAllProductsAsync, updateDatabase, init } from '../../sql.js';
import ProductCard from '@/components/ProductCard.jsx';

export default function HomeScreen() {
  const [ isInit, setIsInit ] = useState(false);
  const [ refreshing, setRefreshing ] = useState(false);
  if (!isInit) {
    init().then(() => setIsInit(true));
  }
  
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    updateDatabase().then(() => setRefreshing(false));
  }, []);

  const DATA = getAllProducts();
  console.log("Length: " + DATA.length)

  return (
    <FlatList
      style={styles.container}
      ListHeaderComponent={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }
      data={DATA}
      renderItem={({item}) => {
        const button = <Button title='Add to cart' onPress={addProductToCart(item.id)}></Button>;
        const key = `${item.id}`;
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
  container: {
    flex: 1,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
  },
});
