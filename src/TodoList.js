import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';
import { connect } from 'react-redux';

// eslint-disable-next-line react/prefer-stateless-function
class TodoList extends Component {
  // static propTypes = {
  //   prop: PropTypes
  // }

  render() {
    const { todos, dispatch } = this.props;
    return (
      <View style={{ flex: 1, backgroundColor: '#fff', justifyContent: 'center' }}>
        {
          todos.map(todo => <Text onPress={() => dispatch({ type: 'MARK_AS_COMPLETED', id: todo.id })} style={{ textDecorationLine: todo.completed ? 'line-through' : 'none' }} key={todo.id}>{todo.text}</Text>)
        }
        <Button title="adicionar" onPress={() => dispatch({ type: 'ADD_TODO', text: 'Novo todo' })} />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  todos: state,
});

export default connect(mapStateToProps)(TodoList);
