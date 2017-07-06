import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  ListView,
  TouchableOpacity,
} from 'react-native';

export default class App extends Component {
  
  constructor(props) {
    super(props);
    let ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 != r2,
    });
    this.state = {
      dataSource: ds.cloneWithRows([]),
    };
    this.items = [];
  }

  renderRow(row, sectionid, rowid) {
    return (
      <View style={styles.row}>
        <Text>{row.title}</Text>
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
            this.items.push({title: 'Title', done: false})
            this.setState({
              dataSource: this.state.dataSource.cloneWithRows(this.items),
            });
          }}
        >
          <Text>+</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#AAA',
  },
  row: {
    flex: 0,
    flexDirection: 'row',
    backgroundColor: 'red',
    alignItems: 'flex-start',
    minHeight: 40,
  },
  fab: {
    position: 'absolute',
    right: 16,
    bottom: 16,
    width: 50,
    height: 50,
    backgroundColor: 'green',
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
