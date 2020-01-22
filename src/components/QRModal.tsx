import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import Modal from 'react-native-modal';
import {Colors, Title} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import QRCode from 'react-native-qrcode-svg';

interface IProps {
  title?: string;
  subtitle: string;
  value: string;
  isVisible: boolean;
  onHide(): any;
}

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

const QRModal: React.FC<IProps> = props => {
  const title = props.title ? props.title : 'QR Code';
  const subtitle = props.subtitle;
  return (
    <Modal
      isVisible={props.isVisible}
      backdropColor={'black'}
      backdropOpacity={0.75}
      useNativeDriver={true}
      onSwipeComplete={props.onHide}
      onBackButtonPress={props.onHide}
      swipeDirection="down"
      deviceHeight={deviceHeight}
      deviceWidth={deviceWidth}>
      <View
        style={{
          backgroundColor: Colors.white,
          borderRadius: 15,
          padding: 20,
          paddingBottom: 15,
          width: 350,
          maxWidth: 350,
          minWidth: 250,
          margin: 20,
        }}>
        <Title style={{fontWeight: 'bold'}}>{title}</Title>
        <Text>{subtitle}</Text>
        <View style={{alignItems: 'center', marginTop: 20}}>
          <QRCode value={props.value} size={175} color={Colors.black} />
          <Text style={{fontSize: 30, fontWeight: 'bold', marginTop: 10}}>
            {props.value}
          </Text>
          <Text style={{marginTop: 20}}>Slide down to close</Text>
          <MaterialCommunityIcons name="chevron-down" size={20} />
        </View>
      </View>
    </Modal>
  );
};

export default QRModal;
