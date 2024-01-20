/* eslint-disable react/react-in-jsx-scope */
import { Header, Text } from '@rneui/base';
import { Input } from '@rneui/themed';
import { useEffect, useState } from 'react';
import { BackHandler, View } from 'react-native';
import { useNoteContext } from '../navigation/StackNavigation';
import { INote } from '../navigation/StackNavigation';

const Note = ({ navigation }: { navigation: any }) => {
  const { addNotes } = useNoteContext();
  const [note, setNote] = useState<INote>({ title: 'default title', text: 'default text' });

  useEffect(() => {
    const backAction = () => {
      addNotes(note);
      navigation.goBack(null);
      return true;
    };

    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);
    return () => backHandler.remove();
  }, [note]);

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
        <Input
          placeholder="Heading"
          style={{ fontSize: 24, fontWeight: 'bold' }}
          onChangeText={(title) => {
            setNote({ ...note, title: title });
          }}
        />
        <Text style={{ marginLeft: 18 }}>{'Edited: 01-10 23:23'}</Text>
        <Input
          autoFocus={true}
          placeholder=""
          multiline={true}
          inputContainerStyle={{ borderWidth: 1, borderColor: 'white' }}
          containerStyle={{ height: '100%' }}
          onChangeText={(text) => {
            setNote({ ...note, text: text });
          }}
        />
      </View>
    </View>
  );
};

export default Note;
