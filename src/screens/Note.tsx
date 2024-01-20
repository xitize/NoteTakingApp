/* eslint-disable react/react-in-jsx-scope */
import { Header, Text } from '@rneui/base';
import { Input } from '@rneui/themed';
import { useEffect } from 'react';
import { BackHandler, View } from 'react-native';
import { useNoteContext } from '../navigation/StackNavigation';

const Note = ({ navigation }) => {
  const { addNotes, noteList } = useNoteContext();

  useEffect(() => {
    const backAction = () => {
      addNotes({ title: 'somethings', text: 'good morning' });
      console.log('listCount ' + noteList.length);
      navigation.navigate('Home');
      return true;
    };

    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);
    return () => backHandler.remove();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <Header
        elevated={false}
        backgroundColor="#5e6977"
        centerComponent={
          <Text style={{ color: 'white', fontSize: 18, fontWeight: '900' }}>Note</Text>
        }
      />
      <View>
        <Input placeholder="Heading" style={{ fontSize: 24, fontWeight: 'bold' }} />
        <Text style={{ marginLeft: 18 }}>{'Edited: 01-10 23:23'}</Text>
        <Input
          autoFocus={true}
          placeholder=""
          multiline={true}
          inputContainerStyle={{ borderWidth: 1, borderColor: 'white' }}
          containerStyle={{ height: '100%' }}
        />
      </View>
    </View>
  );
};

export default Note;
