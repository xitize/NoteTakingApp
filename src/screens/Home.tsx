/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {FAB, Header, Icon} from '@rneui/themed';
import {TouchableOpacity, View} from 'react-native';

const Home = () => {
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <Header
        elevated={true}
        backgroundColor="pink"
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
        placement="right"
        title={'Add Notes'}
        icon={{name: 'edit', color: 'white'}}
        color="maroon"
        size="large"
        upperCase={true}
      />
    </View>
  );
};

export default Home;
