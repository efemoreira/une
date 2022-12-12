import React from 'react';
import {
  View,
  StyleSheet,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';
import HeaderTitle from '../../components/HeaderTitle';
import {TextInput, Button} from 'react-native-paper';

import {useAuth} from '../../contexts/auth';

const LogIn: React.FC = ({navigation}) => {
  const {logIn} = useAuth();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleLogin() {
    logIn(email, password);
  }

  function handleForgot() {
    logIn(email, password);
  }

  function handleRegister() {
    navigation.navigate('Register');
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <HeaderTitle title={'Welcome to Une'} />
          <TextInput
            label="Email"
            value={email}
            mode={'outlined'}
            onChangeText={text => setEmail(text)}
            keyboardType={'email-address'}
            autoCapitalize={'none'}
          />
          <TextInput
            label="Senha"
            value={password}
            mode={'outlined'}
            onChangeText={text => setPassword(text)}
            secureTextEntry={true}
            autoCapitalize={'none'}
          />
          <Button mode="contained" onPress={handleLogin}>
            Login
          </Button>
          <Button
            mode="text"
            onPress={handleForgot}
            hitSlop={{top: 20, bottom: 20, left: 50, right: 50}}>
            Esqueceu a senha?
          </Button>
          <Button mode="contained" onPress={handleRegister}>
            Cadastre-se
          </Button>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default LogIn;
