import React, { Component } from 'React';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default class TodoCell extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={[styles.wrapper, {backgroundColor: this.props.todo.done ? 'green' : 'red'}]}>
        <TouchableOpacity
          style={{flex: 1}}
          onPress={() => {
            if (!this.props.todo.done) {
              this.props.onDone();
            }
          }}
        >
        <Text>{this.props.todo.title}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    minHeight: 40,
  },
});