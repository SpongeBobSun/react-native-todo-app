import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <Text>???</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#AAA',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
