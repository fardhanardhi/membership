import React from 'react';
import {View, Dimensions} from 'react-native';
import Modal from 'react-native-modal';
import {Portal, Colors, Subheading, Button} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface IProps {
  isModalVisible: boolean;
}

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

const ErrorModal: React.FC<IProps> = (props) => {
  return (
    <Portal>
      <Modal
        isVisible={props.modalVisible}
        backdropColor={'black'}
        backdropOpacity={0.75}
        useNativeDriver={true}
        deviceHeight={deviceHeight}
        deviceWidth={deviceWidth}>
        <View
          style={{
            backgroundColor: Colors.white,
            borderRadius: 15,
            padding: 20,
            paddingBottom: 15,
            maxWidth: 350,
            minWidth: 250,
            margin: 20,
            alignItems: 'center',
          }}>
          <MaterialCommunityIcons
            color="#4D4B47"
            size={50}
            name="emoticon-sad-outline"
          />
          <Subheading>Something Went Wrong</Subheading>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <Button
              onPress={() => {
                props.navigation.navigate('AuthLoading');
              }}>
              Retry
            </Button>
          </View>
        </View>
      </Modal>
    </Portal>
  );
};

export default ErrorModal;
