/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {BottomSheet, Button, FAB, Header, Icon, Text} from '@rneui/themed';
import {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';

const Home = ({navigation}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <Header
        elevated={true}
        backgroundColor="#5e6977"
        centerComponent={{
          text: 'Note App',
          style: {fontSize: 18, fontWeight: '900'},
        }}
        rightComponent={
          <TouchableOpacity>
            <Icon name="settings" color="white" />
          </TouchableOpacity>
        }
      />
      <FAB
        onPress={() => {
          console.log('fab clicked' + showModal);
          setShowModal(true);
        }}
        placement="right"
        title={'Add Notes'}
        icon={{name: 'edit', color: 'white'}}
        color="#5e6977"
        size="large"
        upperCase={true}
      />

      <BottomSheet
        isVisible={showModal}
        onBackdropPress={() => {
          setShowModal(false);
        }}
        containerStyle={{backgroundColor: 'transparent'}}>
        <View
          style={{
            backgroundColor: '#5e6977',
            paddingHorizontal: 12,
            paddingVertical: 6,
            height: 220,
            borderTopEndRadius: 10,
            borderTopStartRadius: 10,
          }}>
          <Text h3 style={{color: 'white', marginTop: 22}}>
            {'Add'}
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
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
              icon={{name: 'edit', color: 'white'}}
              title={'Text'}
              style={{flex: 1}}
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
              icon={{name: 'checklist', color: 'white'}}
              title={'Checklist'}
              style={{flex: 1}}
            />
          </View>
        </View>
      </BottomSheet>
    </View>
  );
};

export default Home;
