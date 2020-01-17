import React from 'react';
import {View, Text} from 'react-native';
import {List} from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';

const ProfileItem = props => {
  return (
    <List.Item
      title={props.title}
      left={props => <List.Icon {...props} icon={props.icon} />}
      right={props => <List.Icon {...props} icon="chevron-right" />}
    />
  );
};

export default ProfileItem;
