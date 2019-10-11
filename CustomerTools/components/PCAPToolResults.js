import React, { Component } from 'react';
import {
  SectionList,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class PCAPToolResults extends Component{

  static navigationOptions = {
    title: 'Results',
  };

  results = [];

  renderArray = () => {
    var array = this.props.navigation.getParam('arrayFromChild');
    array.forEach( (element) => {
      this.results.unshift(element);
    });
  };

  constructor(props){
    super(props);
  }

  render(){
    this.renderArray();
    console.log('array from component', this.results);
    console.log('title', this.results.title)
    return(
      <View style={styles.container}>
        <SectionList keyExtractor={(item, index)=>index}
          renderItem={({item})=><Text style={styles.sectionItem}>{item}</Text>}
          renderSectionHeader={({section})=><Text style={styles.sectionHeader}>{section.title}</Text>}
          sections={this.results}
          style={styles.list}>
        </SectionList>
      </View>
    );
  };
};

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  list: {
    backgroundColor: 'grey'
  },
  sectionHeader: {
    alignSelf: 'center',
    backgroundColor: 'green',
    borderColor: 'indigo',
    borderWidth: StyleSheet.hairlineWidth,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    width: 250
  },
  sectionItem:{
    alignSelf: 'center',
    backgroundColor: 'white',
    borderColor: 'indigo',
    borderWidth: StyleSheet.hairlineWidth,
    textAlign: 'center',
    width: 250
  }
});
