import React from "react";
import "./Todo.css";

class Todo extends React.Component {
  handleClick = () => {
    this.props.handleCompleted(this.props.item.id);
  };
  render() {
    return (
      <div
        onClick={this.handleClick}
        className={`item ${this.props.item.completed ? "completed" : ""}`}
      >
        <p>{this.props.item.task}</p>
      </div>
    );
  }
}
export default Todo;
