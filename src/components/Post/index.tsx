import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import {Avatar, Card, Paragraph} from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';

interface User {
  uid?: string;
  fullName: string;
  email: string;
  birthday: string;
  city: string;
  gender: string;
}

interface PostUI {
  text?: string;
  id?: string;
  creationDate?: string;
  uid?: string;
}

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />;

const Post = (post: PostUI) => {
  const [user, setUser] = useState<User>();
  const navigation = useNavigation();

  useEffect(() => {
    const fetch = async () => {
      const data = await firestore().collection('Users').doc(post.uid).get();
      const userFirestore = JSON.stringify(data.data());
      setUser(JSON.parse(userFirestore));
    };
    fetch();
  }, [post]);

  return (
    <Card
      style={styles.container}
      onPress={() => {
        navigation.navigate({
          name: 'PostDetail',
          params: {
            postUsername: user?.fullName,
            postDate: post.creationDate,
            postContent: post.text,
          },
        });
      }}>
      <Card.Title
        title={user?.fullName}
        subtitle={post.creationDate}
        left={LeftContent}
      />
      <Card.Content>
        <Paragraph>{post.text}</Paragraph>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});

export default Post;
