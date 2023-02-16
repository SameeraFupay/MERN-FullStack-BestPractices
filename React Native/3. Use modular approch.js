import React from 'react';
import { View, Text } from 'react-native';

const Header = ({ title }) => (
  <View>
    <Text>{title}</Text>
  </View>
);

const MyComponent = () => (
  <View>
    <Header title="Hello World" />
  </View>
);