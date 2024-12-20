import { Image, StyleSheet, View } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default (props) => {
  const { product, button } = props;
  const { name, image, price, description } = product;
  
  return(
    <ThemedView style={styles.stepContainer}>
      <ThemedText type="subtitle">{name}</ThemedText>
      <Image
        resizeMode='contain'
        style={styles.image}
        source={{uri: image}}
      />
      <ThemedText>
        {description}
      </ThemedText>
      <View style={styles.buy}>
        <ThemedText type='subtitle' style={styles.price} lightColor={'white'}>
          {'$' + price}
        </ThemedText>
        {button}
      </View>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  buy: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  price: {
    backgroundColor: 'green',
    borderRadius: 2,
    paddingTop: 3,
    paddingInline: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
    paddingHorizontal: 30,
    paddingVertical: 10
  },
  image: {
    height: 200,
    width: 300,
    bottom: 0,
    left: 0
  },
});
