import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {Post} from '../../models/post';
import {NavigatorStackParams} from '../../routes/app.routes';

interface PostDetailComponentProps {
  index: number;
  post: Post;
  isDetail?: boolean;
}

const PostDetailComponent: React.FC<PostDetailComponentProps> = ({
  post,
  index,
}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<NavigatorStackParams>>();

  const onPress = (image: any) => {
    navigation.navigate('ImageDetail', {image});
  };

  return (
    <View style={styles.container}>
      <View style={{paddingHorizontal: 20}}>
        <View style={styles.avatarContainer}>
          <Image style={styles.avatar} />
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'flex-start',
              marginLeft: 10,
              flex: 1,
            }}>
            <Text style={styles.title}>{post.username}</Text>
            <Text style={styles.titleAt}>@{post.username.toLowerCase()}</Text>
          </View>

          <Icon name="more-vert" color="#676D6C" size={20} />
        </View>

        <View style={styles.postContent}>
          {post.postContentText && (
            <Text style={styles.postContent}>{post.postContentText}</Text>
          )}

          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 8,
            }}>
            {post.images?.length &&
              post.images?.map(image => (
                <TouchableWithoutFeedback onPress={() => onPress(image)}>
                  <Image
                    style={
                      post.images!.length > 1
                        ? styles.postSeveralImages
                        : styles.postImage
                    }
                    source={image}
                  />
                </TouchableWithoutFeedback>
              ))}
          </View>

          <View style={{flexDirection: 'row'}}>
            <Text style={{...styles.titleAt, marginTop: 10}}>
              2:57 p. m. - 28 jun. 22 -
            </Text>
            <Text
              style={{
                ...styles.titleAt,
                marginTop: 10,
                marginLeft: 5,
                color: '#00AEE1',
              }}>
              Twitter Web App
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          padding: 10,
          justifyContent: 'space-between',
          borderBottomWidth: 1,
          borderBottomColor: '#2D3434',
          paddingHorizontal: 20,
        }}>
        {/* {icons.map((icon, i) => (
          <IconFooter
            key={`${i}${icon}`}
            iconName={icon}
            number={getNumberForIcon(i)}
            numberLabel={getNumberLabelForIcon(i)}
            filled={post.like}
            showIcon={false}
          />
        ))} */}
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          padding: 10,
          justifyContent: 'space-around',
          paddingHorizontal: 20,
        }}>
        {/* {icons.map((icon, i) => (
          <IconFooter
            key={`${icon}${i}`}
            iconName={icon}
            number={''}
            numberLabel={getNumberLabelForIcon(i)}
            filled={post.like}
          />
        ))} */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#2D3434',
  },
  avatarContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
  },
  postContent: {
    marginTop: 5,
    flex: 4,
    flexDirection: 'column',
    fontSize: 12.5,
    color: 'white',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 13,
  },
  titleAt: {
    color: '#757A75',
    fontSize: 12,
  },
  postImage: {
    marginTop: 15,
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  postSeveralImages: {
    width: '45%',
    height: 100,
    borderRadius: 8,
    margin: 3,
  },
});

export default PostDetailComponent;
