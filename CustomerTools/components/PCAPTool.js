import React, { Component } from 'react';
import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

class Timer extends Component {
  constructor(props){
    super(props);
    this.state = {
      number: 5,
      currentTime: null,
      resultArray: []
    };
    this.startTimer = (props) => {
      this.interval = setInterval(() => {
        console.log(this.state.number)
        if(this.state.number != 0) {
          this.setState({number: this.state.number - 1})
        } else {
          clearInterval(this.interval);
          Alert.alert(
            'Scan successful',
            'The scan has completed successfully. A file with the network activity of this device during this time has been captured and sent to Lookout Support.',
          [
            { text: 'OK', onPress: () => console.log('OK pressed')},
            { text: 'See Results', onPress: () => {
              console.log(this);
              this.props.navigation.navigate('Detail');
            }}
          ]);
          this.setState({number: 10});
          this.setState({currentTime: new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds()});
          this.setState(()=>{this.state.resultArray.push({
            title: this.state.currentTime,
            data: ['PCAP Results']
          }
          )});
          this.state.resultArray.forEach(function(element) {
            console.log('element:', element);
          });
          this.props.getTimeCallback(this.state.currentTime);
          this.props.getArrayCallback(this.state.resultArray);
        }
        }, 1000);
    };
  };

  componentDidMount(){
  };

  render(){
    return(
      <View>
        <Text style={styles.timer}>{this.state.number}</Text>
        <TouchableHighlight activeOpacity={0.6} onPress={()=>{this.startTimer();}} style={styles.highlight} underlayColor={'white'}>
          <Text style={styles.button}>Start the Scan</Text>
        </TouchableHighlight>
      </View>
  )};
};

export default class PCAPTool extends Component {

  static navigationOptions = {
    title: 'PCAP Tool'
  };

  state = {
    timeFromChild: null,
    arrayFromChild: []
  };

  getTimeFromChild = (childData) => {
    this.setState({timeFromChild: childData})
  };

  getArrayFromChild = (childData) => {
    this.setState({arrayFromChild: childData})
  };

  render(){
    return(
      <View style={styles.container}>
        <Timer navigation={this.props.navigation} getTimeCallback={this.getTimeFromChild} getArrayCallback={this.getArrayFromChild}/>
        <TouchableHighlight activeOpacity={0.6} onPress={()=>{this.startTimer();}} style={styles.highlight} underlayColor={'white'}>
          <Text onPress={() => {
            console.log(this.state.arrayFromChild);
            this.props.navigation.navigate('Detail', {
              currentTime: this.state.timeFromChild,
              arrayFromChild: this.state.arrayFromChild
            });
          }
          } style={styles.button}>See Past Results</Text>
        </TouchableHighlight>
      </View>
    );
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center'
  },
  button: {
    alignSelf: 'center',
    backgroundColor: 'white',
    borderColor: 'green',
    borderWidth: 2,
    borderRadius: 10,
    color: 'green',
    fontWeight: '200',
    marginBottom: 10,
    padding: 20,
    textAlign: 'center',
    width: 'auto'
  },
  timer: {
    fontSize: 50,
    marginBottom: 40,
    textAlign: 'center'
  }
});
