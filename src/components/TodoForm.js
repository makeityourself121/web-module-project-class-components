import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: "",
    };
  }

  handleChanges = (e) => {
    this.setState({
      ...this.state,
      inputValue: e.target.value,
    });
  };

  handleClick = (e) => {
    e.preventDefault();
    this.props.handleAddItem(this.state.inputValue);
    this.setState({
      inputValue: "",
    });
  };

  render() {
    return (
      <form>
        <input
          onChange={this.handleChanges}
          type="text"
          name="task"
          placeholder="Todo Tasks"
          value={this.state.inputValue}
        />
        <button onClick={this.handleClick}>Add Task</button>
      </form>
    );
  }
}
export default TodoForm;
