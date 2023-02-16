import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text } from 'react-native';
import { fetchData } from './actions';

const MyComponent = () => {
  const data = useSelector(state => state.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <View>
      <Text>{data}</Text>
    </View>
  );
};