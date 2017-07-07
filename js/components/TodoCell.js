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
    let dotStyle = this.props.todo.done ? styles.checkedDot : styles.uncheckedDot;
    return (
      <View style={{flex: 1}}>
        <TouchableOpacity
          style={styles.wrapper}
          onPress={() => {
            if (!this.props.todo.done) {
              this.props.onDone();
            } else {
              this.props.onUncheck();
            }
          }}
        >
        <View 
          style={{flex: 1, alignContent: 'center', flexDirection: 'row'}}
          >
          <View style={dotStyle} />
          <View style={{justifyContent: 'center'}}>
            <Text style={{textAlignVertical: 'center', marginLeft: 8}}>{this.props.todo.title}</Text>
          </View>
        </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    minHeight: 50,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#BBBBBB',
    paddingVertical: 8,
  },
  checkedDot: {
    flex: 0,
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: '#61AFEF',
    backgroundColor: '#4692E3',
    borderRadius: 15,
    alignSelf: 'center',
  },
  uncheckedDot: {
    flex: 0,
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: '#61AFEF',
    borderRadius: 15,
    alignSelf: 'center',
  },
});