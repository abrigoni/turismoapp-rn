import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useQuery } from '@apollo/client';
import { GET_GASTRONOMICS } from '../graphql/queries';


const GastronomicsScreen = () => {
  const { loading, error, data } = useQuery(GET_GASTRONOMICS);

  return (
    <View>
      <Text>Gastronomicos</Text>
      <ScrollView>
        {data && data.gastronomics.map((item, idx) => {
            return <Text key={idx}> {item.name}</Text>
          })}
      </ScrollView>
    </View>
  );
};

export default GastronomicsScreen;