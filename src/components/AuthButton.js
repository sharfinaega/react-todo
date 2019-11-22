import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import { fakeAuth } from "../helpers/fakeAuth";
import Todo from "../components/Todo";

const Wrapper = styled.section`
text-align: center
padding: 4em;
background: ${props => (props.dark ? "grey" : "yellow")}`;

const Header = styled.h1`
  text-align: center;
  background: #000;
  color: #fff;
`;

function AuthButton() {
  let history = useHistory();

  return fakeAuth.isAuthenticated ? (
    <p>
      Welcome!{""}
      <Wrapper>
        <Header>React Todo</Header>
        <Todo />
      </Wrapper>
      {/* <button
        onClick={() => {
          fakeAuth.signout(() => history.push("/"));
        }}
      >
        Sign out
      </button> */}
    </p>
  ) : (
    <p>You are not logged in.</p>
  );
}

export default AuthButton;
