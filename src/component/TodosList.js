import React from 'react';
import TodoItem from './TodoItem';

class TodosList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }

  render() {
    return (
        <div>
            <ul>
            {this.props.todos.map((todo) => (
          <TodoItem
           key={todo.id}
           todo={todo}
           handleChangeProps={this.props.handleChangeProps}
           deleteTodoProps={this.props.deleteTodoProps}
           setUpdate={this.props.setUpdate}
           />
            ))}
            </ul>
        </div>
    );
  }
}

export default TodosList;
