import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
const list = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false,
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false,
  },
];
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      list: list,
    };
  }

  handleCompleted = (id) => {
    this.setState({
      list: this.state.list.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      }),
    });
  };

  handleAddItem = (task) => {
    const newTask = {
      task: task,
      id: Date.now(),
      completed: false,
    };
    this.setState({
      list: [...this.state.list, newTask],
    });
  };

  handleClear = () => {
    this.setState({
      ...this.state,
      list: this.state.list.filter((item) => {
        return item.completed === false;
      }),
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>

        <TodoForm handleAddItem={this.handleAddItem} />
        <h3>
          <TodoList
            handleClear={this.handleClear}
            handleCompleted={this.handleCompleted}
            list={this.state.list}
          />
        </h3>
      </div>
    );
  }
}

export default App;
