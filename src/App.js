import React ,{Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router,Route} from "react-router-dom";


import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';


import logo from "./logo.png";
import CreateTodo from "./Component/create-todo.component";
import EditTodo from "./Component/edit-todo.component";
import TodosList from "./Component/todos-list.component";

class App extends Component {

  
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render(){
    return (
      <Router>
        <div className="container">
          <Navbar color="light" light expand="md">
            <NavbarBrand href="http://www.google.co.in" target="_blank">
              <img src={logo} width="60" height="60" alt="Todo App"></img>
              Todo App</NavbarBrand>
            <NavbarToggler onClick={this.toggle}/>
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/">Todos</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/create">Create Todo</NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Options
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      Option 1
                    </DropdownItem>
                    <DropdownItem>
                      Option 2
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                      Reset
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </Navbar>


          <Route path="/" exact component={TodosList}></Route>
          <Route path="/edit/:id" component={EditTodo}></Route>
          <Route path="/create" component={CreateTodo}></Route>  
        </div>     
      </Router>  
    );  
       
  }
  
}

export default App;
