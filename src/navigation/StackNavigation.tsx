/* eslint-disable react/react-in-jsx-scope */
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import INote from '../screens/Note';
import constate from 'constate';
import Note from '../screens/Note';

const Stack = createNativeStackNavigator();

export interface INote {
  title: String;
  text: String;
}

const notes = () => {
  const noteList: Array<INote> = [];
  const addNotes = (_note: INote) => noteList.push(_note);
  return {noteList, addNotes};
};

export const [NoteProvider, useNoteContext] = constate(notes);

const MainNavigation = () => {
  return (
    <NoteProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Note" component={Note} />
        </Stack.Navigator>
      </NavigationContainer>
    </NoteProvider>
  );
};

export default MainNavigation;
