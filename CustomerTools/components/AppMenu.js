import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text
} from 'react-native';

export default class AppMenu extends Component {

  static navigationOptions = {
    title: 'Customer Tools'
  };

  render(){
    return(
      <ScrollView styles={styles.container}>
        <Text style={styles.text}>Hello world!</Text>
      </ScrollView>
    )
  };
};

const styles = StyleSheet.create({
  container: {
    color: 'lightgrey'
  },
  text: {
    alignItems: 'center'
  }
});
