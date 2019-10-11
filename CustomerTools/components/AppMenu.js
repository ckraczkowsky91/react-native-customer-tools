import React, { Component } from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

class Box extends Component {
  constructor(props){
    super(props);
    this.state = {
        textDisplayed: props.info.title
    };
  };
  render(){
    return(
      <Text onPress={ () => {
        this.setState((state, props) => ({
          textDisplayed: props.info.color
        }));
      }} style={styles.text}>{ this.state.textDisplayed }</Text>
    )
  };
};
export default class AppMenu extends Component {
  constructor() {
    super();
    this.properties = [
      {
        title: 'Box #1',
        color: 'red'
      },
      {
        title: 'Box #2',
        color: 'blue'
      },
      {
        title: 'Box #3',
        color: 'red'
      },
      {
        title: 'Box #4',
        color: 'blue'
      },
      {
        title: 'Box #5',
        color: 'red'
      },
      {
        title: 'Box #6',
        color: 'blue'
      },
      {
        title: 'Box #7',
        color: 'red'
      }
    ];
  };
  static navigationOptions = {
    headerTitle: (
      <Image source={require('../images/lookout-icon.png')} style={{width: 28, height: 28}}/>
    )
  };
  render(){
    handleClick=()=>{console.log('handle click')};
    return(
      <View style={styles.container}>
        <TouchableHighlight activeOpacity={0.6} onPress={()=>this.props.navigation.navigate('Tool')} style={styles.highlight} underlayColor={'white'}>
          <Image source={require('../images/lookout-icon.png')} style={styles.button}/>
        </TouchableHighlight>
      </View>
    )
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingTop: 15
  },
  button: {
    alignSelf: 'center',
    backgroundColor: 'navy',
    borderColor: 'navy',
    borderRadius: 10,
    borderWidth: 2,
    height: 100,
    width: 100
  },
  highlight:{
    height: 90,
    width: 90
  }
});
