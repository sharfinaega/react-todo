import React from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

import { fakeAuth } from "../helpers/fakeAuth";
// import { useHistory } from "react-router-dom";

// let history = useHistory();
class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  // const Example = props => {
  //   const [isOpen, setIsOpen] = useState(false);

  //   const toggle = () => setIsOpen(!isOpen);
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand>
            <b>Your Todo List</b>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to="/">
                  <NavLink>Home </NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/todo">
                  <NavLink href="/todo">Todo</NavLink>
                </Link>
              </NavItem>
              {/* <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
              </NavItem> */}
              {fakeAuth.isAuthenticated && (
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Options
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem
                      onClick={() => {
                        fakeAuth.signout(() => this.props.history.push("/"));
                      }}
                    >
                      Sign Out
                    </DropdownItem>
                    {/* <DropdownItem>Settings</DropdownItem> */}
                    {/* <DropdownItem divider />
                  <DropdownItem>Log Out</DropdownItem> */}
                  </DropdownMenu>
                </UncontrolledDropdown>
              )}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default withRouter(NavBar);
