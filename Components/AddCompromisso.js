import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet
} from 'react-native';
import { FormLabel, FormInput } from 'react-native-elements';
import DatePicker from 'react-native-datepicker';

class AddCompromisso extends Component {
  render() {
    return (
      <View style={ styles.container }>
        <FormLabel>Class</FormLabel>
        <FormInput placeholder="Type the class"/>

        <DatePicker mode="date" />
        <DatePicker mode="time" format="HH:mm" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50, 
    padding: 20
  }
});

export default AddCompromisso;