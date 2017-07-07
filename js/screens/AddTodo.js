import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  Animated,
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native';

import { connect } from 'react-redux';

import { addTodo } from '../actions/actions';

class _AddTodo extends Component {
  
  static navigatorStyle = {
    navBarHidden: true,
  };

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.shakeAnimation = new Animated.Value(0);
  }

  shake() {
    this.shakeAnimation.setValue(0);
    Animated.spring(this.shakeAnimation, {
      toValue: 1,
    }).start(() => {
      this.shakeAnimation.setValue(0);
    });
  };

  dismiss() {
    Keyboard.dismiss();
    this.props.navigator.dismissModal({
                animationType: 'slide-down'
              });
  }

  render() {
    return (
      <KeyboardAvoidingView
        style={styles.wrapper}
        behavior='padding'
        keyboardVerticalOffset={20}
      >
        <View style={styles.header}>
          <View style={{flexDirection: 'row', marginTop: 16,}}>
            <TouchableOpacity
            style={{alignItems: 'center'}}
            onPress={()=>{
              this.dismiss();
            }}
            >
            <Text style={styles.title}>{'<'}</Text>
            </TouchableOpacity>
            <Text style={[styles.title, {marginLeft: 0}]}>Add Todo</Text>
          </View>
          <Text style={styles.title}>Title</Text>
          <TextInput
            ref={'textInput'}
            onChangeText={(text) => {
              this.todo = text;
            }}
            returnKeyType={'done'}
            placeholder={'New Todo'}
            blurOnSubmit={true}
            style={styles.titleInput}
          />
        </View>
        <View style={styles.body}>
          <Text>Input below will NOT be saved</Text>
          <TextInput
            style={styles.bottomEdit}
            multiline={true}
            keyboardDismissMode={'interactive'}
            />
          <Animated.View
            style={[{
                      transform: [
                        {
                          translateX: this.shakeAnimation.interpolate({
                            inputRange: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
                            outputRange: [0, 2, -3, 4, -4, 3, -3, 4, -5, 2, 0],
                          }),
                        },
                      ],
                    }, styles.fab]}
          >
            <TouchableOpacity
              style={{flex: 1, justifyContent: 'center', width: 50,}}
              onPress={() => {
                if (this.refs.textInput == null || this.todo == null || this.todo.length == 0) {
                  Keyboard.dismiss();
                  this.shake();
                  return;
                }
                this.props.addTodo({
                  title: this.todo,
                  done: false,
                });
                this.dismiss();
              }}
            >
              <Text style={{color: 'white', textAlign: 'center', textAlignVertical: 'center'}}>√</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  header: {
    flex: 0,
    backgroundColor: '#61AFEF',
    paddingVertical: 16,
  },
  title: {
    color: 'white',
    fontSize: 20,
    margin: 8,
  },
  titleInput: {
    backgroundColor: 'transparent',
    margin: 8,
  },
  body: {
    flex: 0.7,
    padding: 8,
  },
  fab: {
    position: 'absolute',
    right: 16,
    top: -25,
    width: 50,
    height: 50,
    backgroundColor: '#C678D2',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset:{
            height: 3,
        },
    shadowColor: 'gray',
    shadowOpacity: 5.0,
  },
  bottomEdit: {
    textAlignVertical: 'top', 
    backgroundColor: '#AAA', 
    minHeight: 60,
    position: 'absolute',
    bottom: 8,
    left: 8,
    right: 8,
  }
});

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    addTodo: (todo) => dispatch(addTodo(todo)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(_AddTodo);