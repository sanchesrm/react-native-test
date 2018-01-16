import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Dimensions
} from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import DatePicker from 'react-native-datepicker';

var width = Dimensions.get('window').width; 

class AddCompromisso extends Component {
  render() {
    return (
      <View style={ styles.container }>
        <FormLabel>Class</FormLabel>
        <FormInput placeholder="Type the class"/>

        <DatePicker mode="date" style={ styles.datePicker } />
        <DatePicker mode="time" format="HH:mm" style={ styles.datePicker } />

        <Button title='Add New Class' style={ styles.submitButton } />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50, 
    padding: 20, 
    flex: 1
  }, 
  datePicker: {
    width: width, 
    paddingTop: 20,
    paddingRight: 50, 
    paddingLeft: 20 
  }, 
  submitButton: {
    position: 'absolute',
    bottom: 50
  }
});

export default AddCompromisso;