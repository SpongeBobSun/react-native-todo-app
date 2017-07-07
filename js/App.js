import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  ListView,
  TouchableOpacity,
  Platform,
  AsyncStorage,
} from 'react-native';

import TodoCell from './components/TodoCell';
import { connect } from 'react-redux';
import { addTodo, doneTodo, uncheck } from './actions/actions';

class _App extends Component {
  
  constructor(props) {
    super(props);
    let ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });
    this.state = {
      dataSource: ds.cloneWithRows(this.props.todos == null ? [] : this.props.todos),
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(Object.assign({}, nextProps.todos)),
    });
  } 

  renderRow(row, sectionid, rowid) {
    return (
      <View style={styles.row}>
        <TodoCell todo={row} onDone={this.props.onDone.bind(this, row)} onUncheck={this.props.onUncheck.bind(this, row)} />
      </View>
    );
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <ListView
          style={{
            flex: 1,
          }}
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)}
          />
        <TouchableOpacity
          style={styles.fab}
          onPress={() => {
            // this.props.addTodo({title: 'Title', done: false});
            this.props.navigator.showModal({
              screen: 'todo.AddTodo',
              title: 'New Todo',
            });
          }}
        >
          <Text style={{color: 'white'}}>+</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingHorizontal: 8,
    paddingTop: 8,
  },
  row: {
    flex: 1,
  },
  fab: {
    position: 'absolute',
    right: 16,
    bottom: 16,
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
  }
});

function mapStateToProps(state) {
  return {
    todos: state.todos,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addTodo: (todo) => dispatch(addTodo(todo)),
    onDone: (todo) => dispatch(doneTodo(todo)),
    onUncheck: (todo) => dispatch(uncheck(todo)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(_App);
