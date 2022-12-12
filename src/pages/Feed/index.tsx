import {FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import Post from '../../components/Post';
import {ActivityIndicator} from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';

interface PostUI {
  text?: string;
  id?: string;
  creationDate?: string;
  uid?: string;
}

const Feed = ({}) => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState<Post[]>();

  useEffect(() => {
    const subscriber = firestore()
      .collection('Posts')
      .onSnapshot(querySnapshot => {
        const postsTemp: PostUI[] = [];

        querySnapshot.forEach(documentSnapshot => {
          postsTemp.push({
            ...documentSnapshot.data(),
            id: documentSnapshot.id,
          });
        });
        setPosts(postsTemp);
        setLoading(false);
      });

    return () => subscriber();
  }, []);

  if (loading) {
    return <ActivityIndicator />;
  }

  return (
    <FlatList
      data={posts}
      renderItem={({item}: {item: Post}) => <Post {...item} />}
    />
  );
};

export default Feed;
