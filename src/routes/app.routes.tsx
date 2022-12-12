import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../pages/Home';
import Create from '../pages/Create';
import PostDetail from '../pages/PostDetail';
import ImageDetail from '../pages/ImageDetail';

import {Post} from '../models/post';

export type NavigatorStackParams = {
  Home: undefined;
  Create: undefined;
  PostDetail: {
    post: Post;
    postIndex: number;
  };
  ImageDetail: {
    image: any;
  };
};

const AppStack = createNativeStackNavigator<NavigatorStackParams>();

const AppRoutes: React.FC = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen name="Home" component={Home} />
      <AppStack.Screen name="Create" component={Create} />
      <AppStack.Screen name="PostDetail" component={PostDetail} />
      <AppStack.Screen name="ImageDetail" component={ImageDetail} />
    </AppStack.Navigator>
  );
};

export default AppRoutes;
