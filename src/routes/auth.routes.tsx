import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LogIn from '../pages/LogIn';
import Register from '../pages/Register';
import Politics from '../pages/Politics';

const AuthStack = createNativeStackNavigator();

const AuthRoutes: React.FC = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen
      name="LogIn"
      component={LogIn}
      options={{headerShown: false}}
    />
    <AuthStack.Screen
      name="Register"
      component={Register}
      options={{headerTitle: ''}}
    />
    <AuthStack.Screen name="Politics" component={Politics} />
  </AuthStack.Navigator>
);

export default AuthRoutes;
