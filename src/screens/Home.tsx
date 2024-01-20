/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import { BottomSheet, Button, FAB, Header, Icon, Text } from '@rneui/themed';
import { useEffect, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useNoteContext } from '../navigation/StackNavigation';

const Home = ({ navigation }) => {
  const { noteList } = useNoteContext();
  const [showModal, setShowModal] = useState(false);
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    console.log('lists ' + JSON.stringify(notes));
    const unmount = navigation.addListener('focus', () => {
      setNotes(noteList);
      console.log('focus');
    });
    return () => {
      console.log('unmounted');
      unmount;
    };
  }, [noteList]);

  const renderBottomsheet = (
    <BottomSheet
      isVisible={showModal}
      onBackdropPress={() => {
        setShowModal(false);
      }}
      containerStyle={{ backgroundColor: 'transparent' }}
    >
      <View
        style={{
          backgroundColor: '#5e6977',
          paddingHorizontal: 12,
          paddingVertical: 6,
          height: 220,
          borderTopEndRadius: 10,
          borderTopStartRadius: 10,
        }}
      >
        <Text h3 style={{ color: 'white', marginTop: 22 }}>
          {'Add'}
        </Text>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
        >
          <Button
            onPress={() => {
              navigation.navigate('Note');
              setShowModal(false);
            }}
            containerStyle={{
              flex: 1,
              borderRadius: 12,
              margin: 12,
              marginVertical: 24,
            }}
            buttonStyle={{
              flex: 1,
            }}
            icon={{ name: 'edit', color: 'white' }}
            title={'Text'}
            style={{ flex: 1 }}
          />
          <Button
            containerStyle={{
              flex: 1,
              borderRadius: 12,
              margin: 12,
              marginVertical: 24,
            }}
            buttonStyle={{
              flex: 1,
            }}
            icon={{ name: 'checklist', color: 'white' }}
            title={'Checklist'}
            style={{ flex: 1 }}
          />
        </View>
      </View>
    </BottomSheet>
  );

  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <Header
        elevated={true}
        backgroundColor="#5e6977"
        centerComponent={{
          text: 'Note App',
          style: { fontSize: 18, fontWeight: '900' },
        }}
        rightComponent={
          <TouchableOpacity>
            <Icon name="settings" color="white" />
          </TouchableOpacity>
        }
      />
      {notes.map((item) => {
        return (
          <View style={{ padding: 12, backgroundColor: 'pink', marginVertical: 2 }}>
            <Text>{item.title}</Text>
            <Text>{item.text}</Text>
          </View>
        );
      })}

      <FAB
        onPress={() => {
          console.log('fab clicked' + showModal);
          setShowModal(true);
        }}
        placement="right"
        title={'Add Notes'}
        icon={{ name: 'edit', color: 'white' }}
        color="#5e6977"
        size="large"
        upperCase={true}
      />

      {renderBottomsheet}
    </View>
  );
};

export default Home;
