import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { Table } from 'reactstrap';

const Todo = props=>(
    <tr>
        <td className={props.todo_completed ? 'completed':''}>{props.todo.todo_description}</td>
        <td className={props.todo_completed ? 'completed':''}>{props.todo.todo_responsible}</td>
        <td className={props.todo_completed ? 'completed':''}>{props.todo.todo_priority}</td>
        <td>
            <Link to={"/edit/"+props.todo._id}>Edit</Link>
        </td>
    </tr>
)

export default class TodoList extends Component{
    
    constructor(props){
        super(props);
        this.state={todos:[]};
    }

    componentDidMount(){
        axios.get('http://localhost:4000/todos/')
        .then(res=>{
            this.setState({todos:res.data})
        })
        .catch(function(err){
            console.log(err);
        })
    }

    componentDidUpdate(){
        axios.get('http://localhost:4000/todos/')
        .then(res=>{
            this.setState({todos:res.data})
        })
        .catch(function(err){
            console.log(err);
        })
    }
    
    todoList(){
        return this.state.todos.map(function(currentTodo,i){
            return <Todo todo = {currentTodo} key={i}/>;
        });
    }
    render(){
        return(
            <div>
                <p>Welcome to Todo List Component! </p>
                <Table striped>
                    <thead>
                    <tr>
                        <th>Description</th>
                        <th>Responsible</th>
                        <th>Priority</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.todoList()}
                    {/* <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td> 
                    </tr> */}
                    {/* <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                    </tr>*/}
                    </tbody> 
                </Table>
            </div>
        )
    }
}