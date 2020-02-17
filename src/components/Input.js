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
    height: '5%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 25
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 6,
    fontSize: 18,
    paddingLeft: 5
  }
});

export default Input;