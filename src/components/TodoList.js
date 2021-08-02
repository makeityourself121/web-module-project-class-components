// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

class TodoList extends React.Component {
  handleClick = () => {
    this.props.handleClear();
  };

  render() {
    return (
      <div>
        {this.props.list.map((item) => (
          <Todo
            handleCompleted={this.props.handleCompleted}
            key={item.id}
            item={item}
          />
        ))}
        <button onClick={this.handleClick}>Clear Completed</button>
      </div>
    );
  }
}
export default TodoList;
