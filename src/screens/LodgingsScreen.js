import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useQuery } from '@apollo/client';
import { GET_LODGINGS } from '../graphql/queries';

const LodgingsScreen = () => {
  const { loading, error, data } = useQuery(GET_LODGINGS);

  return (
    <View>
      <Text>Alojamientos</Text>
      <ScrollView>
        {data && data.lodgings.map((item, idx) => {
            return <Text key={idx}> {item.name}</Text>
          })}
      </ScrollView>
    </View>
  );
};

export default LodgingsScreen;