import { bindActionCreators } from 'redux';
import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';
import { connect } from 'react-redux';
import * as TodoActions from './store/actions/todo';

// eslint-disable-next-line react/prefer-stateless-function
class TodoList extends Component {
  // static propTypes = {
  //   prop: PropTypes
  // }

  render() {
    const { todos, dispatch, markAsCompleted, addTodo } = this.props;
    return (
      <View style={{ flex: 1, backgroundColor: '#fff', justifyContent: 'center' }}>
        {
          todos.map(todo => <Text onPress={() => markAsCompleted(todo.id)} style={{ textDecorationLine: todo.completed ? 'line-through' : 'none' }} key={todo.id}>{todo.text}</Text>)
        }
        <Button title="adicionar" onPress={addTodo} />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  todos: state,
});

const mapDispatchToProps = dispatch => (bindActionCreators(TodoActions, dispatch));


export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
