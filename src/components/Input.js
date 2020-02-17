import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

const Input = (props) => {
  const handleSubmit = (text) => {
    if (props.handleSubmit) {
      props.handleSubmit(text)
    };
  }

  return (
    <View style={styles.container}>
      <TextInput
        defaultValue={'Type a city'}
        onSubmitEditing={event => handleSubmit(event.nativeEvent.text)}
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '10%',
    width: '100%',
    backgroundColor: 'red'
  },
  input: {
    ...StyleSheet.absoluteFillObject,
  }
});

export default Input;