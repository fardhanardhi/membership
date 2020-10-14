import React from 'react';
import {Text, View, Dimensions} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import {
  Title,
  Button,
  Card,
  Avatar,
  Divider,
  RadioButton,
  Colors,
} from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {DefaultTheme} from '../styles';

interface IProps {
    voucherCost:number,
  }

const PaymentMethod: React.FC<IProps> = (props) => {
    return (
        <RBSheet
            animationType="slide"
            closeOnDragDown
            closeOnPressBack
            height={Dimensions.get('screen').height}
            duration={300}
            customStyles={{
            container: {
                padding: 15,
                paddingTop: 5,
                elevation: 10,
            },
            draggableIcon: {
                backgroundColor: Colors.grey300,
            },
            wrapper: {
                backgroundColor: 'transparent',
            },
            }}>
                    <Title
                        style={{
                        marginTop: 10,
                        marginBottom: 25,
                        // fontWeight: 'bold',
                        }}>
                        Select a payment method
                    </Title>

                    <Card elevation={2} onPress={() => {}}>
                        <Card.Title
                        title="Point"
                        titleStyle={{fontWeight:'bold'}}
                        subtitle={`Balance: 1000`}
                        subtitleStyle={{color: Colors.green700, lineHeight: 13}}
                        left={
                            <Avatar.Icon
                            {...props}
                            theme={{
                                colors: {
                                primary: Colors.yellow900
                                },
                            }}
                            icon={
                                <MaterialIcons
                                name="alpha-p-circle"
                                color={Colors.yellow900
                                }
                                />
                            }
                            />
                        }
                        right={<RadioButton
                            // value="first"
                            status={'checked'
                            }
                            onPress={() => {}}
                            color={DefaultTheme.colors.primary}
                            />}
                        style={{paddingRight: 10}}
                        />
                        <>
                            <Card.Content>
                            <View style={{marginBottom: 15}}>
                                <Divider />
                                <View style={{marginTop: 15, marginBottom: 20}}>
                                <View
                                    style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    marginBottom: 10,
                                    }}>
                                    <Text>Your point</Text>
                                    {/* <View style={{flex: 1}} /> */}
                                    <Text>Point</Text>
                                </View>
                                <View
                                    style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    marginBottom: 7,
                                    }}>
                                    <Text>Payment amount</Text>
                                    <Text>{props.voucherCost}</Text>
                                </View>
                                <Divider
                                    style={{
                                    backgroundColor: Colors.grey500,
                                    }}
                                />
                                <View
                                    style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    marginTop: 10,
                                    }}>
                                    <Text style={{fontWeight: 'bold'}}>
                                    Your point after transaction
                                    </Text>
                                    {/* <View style={{flex: 1}} /> */}
                                    <Text
                                    style={
                                        {
                                            fontWeight: 'bold',
                                            color: Colors.red600,
                                            }
                                    }>
                                    </Text>
                                </View>
                                </View>
                                <Button
                                color={Colors.green600}
                                mode="contained"
                                onPress={()=>{}}>
                                Pay
                                </Button>
                            </View>
                            </Card.Content>
                        </>
                    </Card>

                    <Card
                        elevation={2}
                        onPress={() => {}}
                        style={{marginTop: 10}}>
                        <Card.Title
                        title="Cash"
                        titleStyle={{fontWeight: 'bold'}
                        }
                        left={<Avatar.Icon
                            {...props}
                            theme={{
                                colors: {
                                primary:Colors.green100,
                                },
                            }}
                            icon={<MaterialIcons
                                name="cash"
                                color={ Colors.green700
                                }
                                />
                            }
                            />
                        }
                        right={<RadioButton
                            // value="first"
                            status={'checked'
                            }
                            onPress={() => {}}
                            color={DefaultTheme.colors.primary}
                            />
                        }
                        style={{paddingRight: 10}}
                        />
                        <>
                            <Card.Content>
                            <View style={{marginBottom: 15}}>
                                <Divider />
                                <Button
                                style={{marginTop: 10}}
                                color={Colors.green600}
                                mode="contained"
                                onPress={()=>{}}>
                                Send Request
                                </Button>
                            </View>
                            </Card.Content>
                        </>
                    </Card>
                );
        </RBSheet>);
  };

  export default PaymentMethod;