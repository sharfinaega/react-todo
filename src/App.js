import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import styled from "styled-components";

import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Home";
import AuthButton from "./components/AuthButton";

// import "./App.css";
import NavBar from "./components/NavBar";
import Todo from "./components/Todo";

const Wrapper = styled.section`
text-align: center
padding: 4em;
background: ${props => (props.dark ? "grey" : "yellow")}`;

const Header = styled.h1`
  text-align: center;
  background: #000;
  color: #fff;
`;

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          {/* <Wrapper> */}
          {/* <Header>React Todo</Header> */}
          {/* <Todo /> */}
          {/* </Wrapper> */}
          {/* <Section dark>Dari Wrapper</Section> */}
        </div>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          {/* <Route path="/login"></Route> */}
          {/* <Login /> */}
          <AuthButton />
          <PrivateRoute path="/todo">
            <Wrapper>
              <Header>React Todo</Header>
              <Todo />
            </Wrapper>
            {/* <Todo /> */}
          </PrivateRoute>
          {/* <PrivateRoute path="/github"></PrivateRoute> */}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
