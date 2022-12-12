import {View, Text} from 'react-native';
import React from 'react';
import HeaderTitle from '../../components/HeaderTitle';
import {Button} from 'react-native-paper';

const Politics = () => {
  return (
    <View>
      <HeaderTitle title={'Política de uso de dados.'} />
      <Text>Desejamos usar os seguintes dados para uso privado...</Text>
      <Button mode="contained">Estou de acordo</Button>
    </View>
  );
};

export default Politics;
