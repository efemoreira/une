import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useRef} from 'react';
import HeaderTitle from '../../components/HeaderTitle';
import {Button, Menu, TextInput} from 'react-native-paper';
import {useAuth} from '../../contexts/auth';

const Register = ({navigation}) => {
  const {register} = useAuth();

  const [fullName, setFullName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [birthday, setBirthday] = React.useState('');
  const [city, setCity] = React.useState('');
  const [gender, setGender] = React.useState('');
  const [genderVisible, setGenderVisible] = React.useState(false);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const birthdayRef = useRef(null);
  const cityRef = useRef(null);

  const openMenu = () => setGenderVisible(true);

  const closeMenu = () => setGenderVisible(false);

  function handlePolitics() {
    navigation.navigate('Politics');
  }

  function handleRegister() {
    register({fullName, email, birthday, city, gender}, password);
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <HeaderTitle title={'Cadastro'} />
          <TextInput
            label="Nome Completo"
            value={fullName}
            mode={'outlined'}
            onChangeText={text => setFullName(text)}
            returnKeyType={'next'}
            autoCapitalize={'words'}
            onSubmitEditing={() => emailRef.current.focus()}
          />
          <TextInput
            label="Email"
            value={email}
            mode={'outlined'}
            onChangeText={text => setEmail(text)}
            keyboardType={'email-address'}
            returnKeyType={'next'}
            autoCapitalize={'none'}
            ref={emailRef}
            onSubmitEditing={() => passwordRef.current.focus()}
          />
          <TextInput
            label="Senha"
            value={password}
            mode={'outlined'}
            onChangeText={text => setPassword(text)}
            secureTextEntry={true}
            returnKeyType={'next'}
            ref={passwordRef}
            autoCapitalize={'none'}
            onSubmitEditing={() => birthdayRef.current.focus()}
          />
          <TextInput
            label="Data de Nascimento"
            value={birthday}
            mode={'outlined'}
            onChangeText={text => setBirthday(text)}
            keyboardType={'number-pad'}
            returnKeyType={'next'}
            ref={birthdayRef}
            onSubmitEditing={() => cityRef.current.focus()}
          />
          <TextInput
            label="Cidade"
            value={city}
            mode={'outlined'}
            onChangeText={text => setCity(text)}
            returnKeyType={'next'}
            autoCapitalize={'words'}
            ref={cityRef}
          />
          <Button
            mode="text"
            onPress={handlePolitics}
            hitSlop={{top: 20, bottom: 20, left: 50, right: 50}}>
            Porque pedimos esses dados?
          </Button>
          <Menu
            visible={genderVisible}
            onDismiss={() => closeMenu()}
            anchor={
              <TextInput
                label="Com qual gênero você se identifica?"
                value={gender}
                mode={'outlined'}
                onPressIn={() => {
                  openMenu();
                  Keyboard.dismiss();
                }}
                showSoftInputOnFocus={false}
                focusable={false}
                caretHidden={true}
                right={<TextInput.Icon icon="chevron-down" />}
              />
            }>
            <Menu.Item
              onPress={() => {
                setGender('Ele');
                closeMenu();
              }}
              title="Ele"
            />
            <Menu.Item
              onPress={() => {
                setGender('Ela');
                closeMenu();
              }}
              title="Ela"
            />
          </Menu>

          <Button mode="contained" onPress={handleRegister}>
            Cadastrar
          </Button>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    flex: 1,
  },
});

export default Register;
