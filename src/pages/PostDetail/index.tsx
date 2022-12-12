import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import PostComponent from '../../components/PostComponent';
import PostDetailComponent from '../../components/PostDetailComponent';
import {Post} from '../../models/post';
import {NavigatorStackParams} from '../../routes/app.routes';

interface PostDetailPageProps
  extends NativeStackScreenProps<NavigatorStackParams, 'PostDetail'> {
  post: Post;
}

const PostDetail: React.FC<PostDetailPageProps> = ({route}) => {
  const {post, postIndex} = route.params;

  return (
    <ScrollView style={styles.scrollView}>
      <PostDetailComponent post={post} index={postIndex} />
      {post.comments?.map((comment, index) => (
        <PostComponent
          key={`${index}${comment.username}`}
          index={index}
          post={comment}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    flexDirection: 'column',
    flex: 2,
  },
  scrollView: {
    flex: 1,
  },
});

export default PostDetail;
