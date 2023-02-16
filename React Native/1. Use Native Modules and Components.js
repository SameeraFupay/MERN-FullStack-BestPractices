import { Text, View, Image } from 'react-native';

const MyComponent = () => (
  <View>
    <Text>Hello World</Text>
    <Image source={require('/path/to/image.png')} />
  </View>
);