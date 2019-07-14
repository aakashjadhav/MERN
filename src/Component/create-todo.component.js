import React from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';

import axios from 'axios';

export default class CreateTodo extends React.Component {

    constructor(props){
        super(props);
        
        this.onChangedTodoDescription=this.onChangedTodoDescription.bind(this);
        this.onChangedTodoResponsible=this.onChangedTodoResponsible.bind(this);
        this.onChangedTodoPriority=this.onChangedTodoPriority.bind(this);
        this.onSubmit=this.onSubmit.bind(this);

        this.state={
            todo_description:'',
            todo_responsible:'',
            todo_priority:'',
            todo_completed:false,
        }
    }

    onChangedTodoDescription(e){
        this.setState({
            todo_description: e.target.value
        });
    }


    onChangedTodoResponsible(e){
        this.setState({
            todo_responsible: e.target.value
        });
    }


    onChangedTodoPriority(e){
        this.setState({
            todo_priority: e.target.value
        });
    }


    onSubmit(e){
        e.preventDefault();

        console.log("Form Submitted");
        console.log(`Todo Descrption: ${this.state.todo_description}`);
        console.log(`Todo Responsible: ${this.state.todo_responsible}`);
        console.log(`Todo Priority: ${this.state.todo_priority}`);
        console.log(`Todo Completed: ${this.state.todo_completed}`);

        const newTodo={
          todo_description:this.state.todo_description,
          todo_responsible:this.state.todo_responsible,
          todo_priority:this.state.todo_priority,
          todo_completed:this.state.todo_completed,
        }

        axios.post('http://localhost:4000/todos/add',newTodo)
        .then(res=> console.log(res.data));

        


        this.setState({
            todo_description:'',
            todo_responsible:'',
            todo_priority:'',
            todo_completed:false,
        });
    }

   render() {
    return (
      <Form onSubmit={this.onSubmit}>
        <h3>Create New Todo</h3>
         
        <FormGroup>
          <Label>Descrption:</Label>
          <Input type="text" value={this.state.todo_description} onChange={this.onChangedTodoDescription} />
        </FormGroup>
        
        <FormGroup>
          <Label>Responsible:</Label>
          <Input type="text" value={this.state.todo_responsible} onChange={this.onChangedTodoResponsible} />
        </FormGroup>
        
        <div className="form-group">
            <div className="form-check form-check-inline">
                <input type="radio"
                className="form-check-input"
                name="priorityOptions"
                id="priorityLow"
                value="Low"
                checked={this.state.todo_priority==='Low'}
                onChange={this.onChangedTodoPriority}></input>
                <label className="form-check-label">Low</label>
            </div>

            <div className="form-check form-check-inline">
                <input type="radio"
                className="form-check-input"
                name="priorityOptions"
                id="priorityMedium"
                value="Medium"
                checked={this.state.todo_priority==="Medium"}
                onChange={this.onChangedTodoPriority}></input>
                <label className="form-check-label">Medium</label>
            </div>

            <div className="form-check form-check-inline">
                <input type="radio"
                className="form-check-input"
                name="priorityOptions"
                id="priorityHigh"
                value="High"
                checked={this.state.todo_priority==="High"}
                onChange={this.onChangedTodoPriority}></input>
                <label className="form-check-label">High</label>
            </div>
        </div>



          {/*<FormGroup check disabled>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              High
            </Label>
             </FormGroup>
        
         <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">Select</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelectMulti">Select Multiple</Label>
          <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">Text Area</Label>
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleFile">File</Label>
          <Input type="file" name="file" id="exampleFile" />
          <FormText color="muted">
            This is some placeholder block-level help text for the above input.
            It's a bit lighter and easily wraps to a new line.
          </FormText>
        </FormGroup>
        <FormGroup tag="fieldset">
          <legend>Radio Buttons</legend>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              Option one is this and that—be sure to include why it's great
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              Option two can be something else and selecting it will deselect option one
            </Label>
          </FormGroup>
          <FormGroup check disabled>
            <Label check>
              <Input type="radio" name="radio1" disabled />{' '}
              Option three is disabled
            </Label>
          </FormGroup>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" />{' '}
            Check me out
          </Label>
        </FormGroup> */}
        <Button color="primary">Submit</Button>
      </Form>
    );
  }
}