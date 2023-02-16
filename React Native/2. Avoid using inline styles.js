import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    color: 'black',
  },
});

const MyComponent = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Hello World</Text>
  </View>
);