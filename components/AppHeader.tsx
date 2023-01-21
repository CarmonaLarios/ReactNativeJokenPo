/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';

class AppHeader extends Component {
  render(): React.ReactNode {
    return (
    <>
      <View style={styles.appHeader}>
        <View style={styles.viewAppName}>
          <Image source={require('../images/header.png')} />
        </View>
        <View style={styles.viewAppName}>
          <Text style={styles.txtAppName}>Jo-ken-pô</Text>
        </View>
      </View>
    </>);
  }
}

const styles = StyleSheet.create({
  appHeader: {
    paddingTop: 20,
    paddingBottom: 20,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  viewImageApp: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  viewAppName:{
    flexDirection: 'row',
    justifyContent: 'center',
  },
  txtAppName: {
    fontSize: 40,
    fontWeight: '900',
    color: '#7E84F7',
  },
});

export default AppHeader;
