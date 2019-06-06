import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import './src/config/ReactotronConfig';
import store from './src/store';
import TodoList from './src/TodoList';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


// eslint-disable-next-line react/prefer-stateless-function
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <TodoList />
        </View>
      </Provider>
    );
  }
}
