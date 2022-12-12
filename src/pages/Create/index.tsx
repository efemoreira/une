import {View} from 'react-native';
import React from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {ActivityIndicator, Button, TextInput} from 'react-native-paper';
import {useAuth} from '../../contexts/auth';

const Create = ({navigation}) => {
  const [text, setText] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const {user} = useAuth();

  React.useEffect(() => {
    const publish = () => {
      setLoading(true);
      firestore()
        .collection('Posts')
        .add({
          text: text,
          uid: auth().currentUser?.uid,
          creationDate: new Date().toString(),
        })
        .then(() => {
          console.log('Post added!');
          setLoading(false);
          navigation.goBack();
        });
    };

    navigation.setOptions({
      headerRight: () => <Button onPress={() => publish()}>Publicar</Button>,
    });
  }, [navigation, text, user]);

  if (loading) {
    return <ActivityIndicator />;
  }

  return (
    <View>
      <TextInput
        label="Escreva"
        value={text}
        multiline
        style={{height: 100}}
        onChangeText={textML => setText(textML)}
      />
    </View>
  );
};

export default Create;
