import React, { Component } from "react";

import { Checkbox } from "semantic-ui-react";
import { Button } from "reactstrap";
// import { Form, Input } from "semantic-ui-react";
import { Form, FormGroup, Input } from "reactstrap";
// import styled from "styled-components";

// const Wrapper = styled.section`
// text-align: center
// padding: 4em;
// background: ${props => (props.dark ? "grey" : "yellow")}`;

// const Header = styled.h1`
//   text-align: center;
//   background: #000;
//   color: #fff;
// `;

const todoCompleteStyle = {
  textDecoration: "line-through",
  color: "#ff6666"
};

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      inputValue: ""
    };
  }

  handleTodoInput = event => {
    // console.log(event.target);
    //   [event.target.name] ==> ini mencari name di inputnya
    // event.target.value ==> mencari value  yang diketikkan di inputnya
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleTodoButton = event => {
    event.preventDefault();
    const todos = this.state.todos.slice(); //copy original state
    if (this.state.inputValue === "") {
      alert("You must enter the text");
      return;
    }

    // console.log(this.state.inputValue);
    const todosObj = {};
    todosObj["id"] = this.state.todos.length + 1;
    todosObj["todo"] = this.state.inputValue;
    todosObj["status"] = false;

    todos.push(todosObj);

    this.setState({ todos, inputValue: "" });
  };

  handleTodoCheckbox = index => {
    // event.preventDefault();
    const todos = this.state.todos.slice();

    todos[index].status = !todos[index].status;
    this.setState({
      todos
    });

    // if (this.state.inputValue === this.checked) {
    //   this.style.inputValue = "line-through";
    // } else {
    //   this.style.inputValue = "none";
    // }
  };

  deleteTodo = idTodo => {
    // console.log(this.state.todos);
    // console.log(indexTodo);

    // cara 1 pakai splice
    const todos = [...this.state.todos];
    // const findTodoIndex = todos.findIndex(element => element.id === idTodo);
    // console.log(findTodoIndex);
    // todos.splice(findTodoIndex, 1);

    //cara 2 pakai filter
    const filterTodo = todos.filter(element => element.id !== idTodo);
    this.setState({
      todos: filterTodo
    });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <Form style={{ display: "-webkit-inline-box", padding: "50px" }} onSubmit={this.handleTodoButton}>
          <FormGroup style={{ width: 300 }}>
            <Input type="text" name="inputValue" value={this.state.inputValue} onChange={this.handleTodoInput} />
          </FormGroup>
          <Button style={{ marginLeft: "10px" }} outline color="secondary">
            Add Todo
          </Button>
          {/* <form onSubmit={this.handleTodoButton}>
          <input type="text" name="inputValue" value={this.state.inputValue} onChange={this.handleTodoInput} /> */}
          {/* <button>Add Todo</button> */}
          {/* <Button outline color="secondary">
            Add Todo
          </Button> */}
          {/* </form> */}
        </Form>
        <div>
          <ul>
            {this.state.todos.map((data, index) => (
              <div>
                <Checkbox style={data.status ? todoCompleteStyle : {}} key={index} label={data.todo} onClick={() => this.handleTodoCheckbox(index)} />
                <button type="button" style={{ marginLeft: "10px" }} span onClick={() => this.deleteTodo(data.id)}>
                  {" "}
                  x{" "}
                </button>
              </div>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Todo;
