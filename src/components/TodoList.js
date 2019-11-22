import React from "react";

class Todos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: []
    };
  }
  entertodo(keypress) {
    var todo = this.refs.newtodo.value;
    if (keypress.charCode === 13) {
      this.setState({
        todo: this.state.todo.concat({ value: todo, checked: false, textDecor: null })
      });
      this.refs.newtodo.value = null;
    }
  }
  todo(data, i) {
    return (
      <li className={data.textDecor}>
        <input type="checkbox" onChange={this.todoCompleted.bind(this, i)} className="option-input checkbox" checked={data.checked} />
        <div key={data.id} className="item">
          {data.value}
          <button onClick={this.remove.bind(this, i)} className="destroy"></button>
        </div>
      </li>
    );
  }
  remove(i) {
    let deletetodo = { ...this.state.todo };
    this.state.todo.splice(i, 1);
    this.setState({ todo: this.state.todo });
  }
  todoCompleted(i) {
    var todo = [...this.state.todo];

    if (!todo[i].checked) {
      todo[i].checked = true;
      todo[i].textDecor = "line";
      this.setState({
        todo
      });
    } else {
      todo[i].checked = false;
      todo[i].textDecor = null;
      this.setState({
        todo
      });
    }
  }

  render() {
    return (
      <div>
        <div className="lines"></div>
        <div>
          <input type="text" ref="newtodo" onKeyPress={this.entertodo.bind(this)} className="inputext" placeholder="todos" />
        </div>
        <div className="app">
          <ul>{this.state.todo.map(this.todo.bind(this))}</ul>
        </div>
      </div>
    );
  }
}

export default Todos;
