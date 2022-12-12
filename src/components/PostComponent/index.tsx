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
import GlobalStyle from '../../utils/GlobalStyle';

interface PostComponentProps {
  index: number;
  post: Post;
}

const PostComponent: React.FC<PostComponentProps> = ({post, index}) => {
  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image style={styles.avatar} />
      </View>

      <View style={styles.postContent}>
        {post.username && (
          <View style={{flexDirection: 'row'}}>
            <Text style={[GlobalStyle.font, styles.title]}>
              {post.username}
            </Text>
            {/* este é o @ do usuario
            <Text style={[GlobalStyle.font, styles.titleAt]}>
              {' '}
              @{post.username.toLowerCase()}
            </Text> */}
            {/* TODO tempo do post */}
            <Text style={[GlobalStyle.font, styles.titleAt]}>
              {' '}
              {post.timeElapsed}
            </Text>
          </View>
        )}
        {post.postContentText && (
          <Text style={[GlobalStyle.font, styles.postContent]}>
            {post.postContentText}
          </Text>
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
              <TouchableWithoutFeedback
                key={`${image}.Post.Image.${index}`}
                onPress={() => {}}>
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

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            padding: 10,
            justifyContent: 'space-between',
          }}>
          {/* {icons.map((icon, i) => (
            <IconFooter
              key={`${i}${icon}.Post.${index}`}
              iconName={icon}
              number={getNumberForIcon(i)}
              filled={post.like}
            />
          ))} */}
        </View>
      </View>

      <Icon name="more-vert" color="#676D6C" size={20} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    flex: 1,
    marginBottom: 15,
    borderBottomWidth: 1,
    // borderBottomColor: '#2D3434',
  },
  avatarContainer: {
    flex: 1,
  },
  avatar: {
    width: 50,
    height: 50,
  },
  postContent: {
    flex: 4,
    flexDirection: 'column',
    fontSize: 12.5,
    // color: 'white',
  },
  title: {
    // color: 'white',
    fontWeight: 'bold',
  },
  titleAt: {
    // color: '#757A75',
    fontSize: 13,
  },
  content: {
    // color: 'white',
    overflow: 'hidden',
    textAlign: 'justify',
  },
  postImage: {
    marginTop: 15,
    width: '100%',
    height: 140,
    borderRadius: 8,
  },
  postSeveralImages: {
    width: '45%',
    height: 100,
    borderRadius: 8,
    margin: 3,
  },
});

export default PostComponent;
