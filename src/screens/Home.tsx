/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import { BottomSheet, Button, FAB, Header, Icon, Text } from '@rneui/themed';
import { useCallback, useEffect, useState } from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';
import { INote, useNoteContext } from '../navigation/StackNavigation';
import { useFocusEffect } from '@react-navigation/native';

const Home = ({ navigation }: { navigation: any }) => {
  const { getNotes } = useNoteContext();
  const [showModal, setShowModal] = useState(false);
  const [notes, setNotes] = useState<Array<INote>>();

  console.log('home top');

  useFocusEffect(
    useCallback(() => {
      setNotes([...getNotes]);
      console.log('is focuse');
    }, [getNotes])
  );

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
          style: { fontSize: 18, fontWeight: '900', color: 'white' },
        }}
        rightComponent={
          <TouchableOpacity
            onPress={() => {
              //
            }}
          >
            <Icon name="settings" color="white" />
          </TouchableOpacity>
        }
      />

      <FlatList
        data={notes}
        renderItem={({ item, index }) => (
          <View key={index} style={{ padding: 12, backgroundColor: 'pink', marginVertical: 2 }}>
            <Text>{item.title}</Text>
            <Text>{item.text}</Text>
          </View>
        )}
      />
      <FAB
        onPress={() => {
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
