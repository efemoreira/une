import React from 'react';
import {View, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import {Button, FAB} from 'react-native-paper';
import PostComponent from '../../components/PostComponent';
import {useAuth} from '../../contexts/auth';

import {posts} from '../../api/api';

const Home: React.FC = ({navigation}) => {
  const {logOut} = useAuth();

  React.useEffect(() => {
    navigation.setOptions({
      headerRight: () => <Button onPress={logOut}>Sair</Button>,
    });
  }, [navigation, logOut]);

  function handleCreation() {
    navigation.navigate('Create');
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        {posts.map((post, index) => (
          <TouchableOpacity
            key={`${index}${post.username}.Post`}
            activeOpacity={0.7}
            onPress={() => {}}>
            <PostComponent
              key={`${index}${post.username}.PostComponent`}
              index={index}
              post={post}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
      <FAB icon="plus" style={styles.fab} onPress={handleCreation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default Home;
