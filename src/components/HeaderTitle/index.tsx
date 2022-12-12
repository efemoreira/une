import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const HeaderTitle: React.FC<{title: React.ReactNode}> = ({title}) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
  },
});

export default HeaderTitle;
