import React from 'react';
import { MDBInput, MDBBtn } from "mdbreact";
import axios from 'axios';

class Form extends React.Component {

  state = {
    title: '',
    body: '',
    sender:'',
    receiver: '',
    users: []
  }

  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    })
  }

  getUsers(){
    axios.get('/api/user')
    .then(response => {
      this.setState({users: response.data})
      console.log(this.state.users);
    })
  }

  componentDidMount() {
    this.getUsers();
  }

  submitHandler =() => {
    console.log('Clicked');
    const data = {
      title: this.state.title,
      body: this.state.body,
      sender: this.state.sender,
      receiver: this.state.receiver
    }
    console.log(data);
    axios.post('/api/kudos', data
    ).then(response => {
      console.log(response)
    })
  }

  render() {
  
    return (
      <div className="form-group">
        <MDBInput onChange={this.handleInputChange} name="title" value={this.state.title} label="Title"/>
        <label>Sender:</label>
        <select name="sender" onChange={this.handleInputChange} className="browser-default custom-select">
        <option disabled>Sender</option>
          {this.state.users.map(user => {
            return(
              <option value={user._id} key={user._id}>{user.name}</option>
            )
          })}
        </select>
        <label>Receiver:</label>
        <select name="receiver" onChange={this.handleInputChange} className="browser-default custom-select">
        <option disabled>Receiver</option>
          {this.state.users.map(user => {
            return(
              <option value={user._id} key={user._id}>{user.name}</option>
            )
          })}
        </select>
        
        <MDBInput onChange={this.handleInputChange} name="body" value={this.state.body} type="textarea" label="Body" rows="5" />
        <MDBBtn onClick={this.submitHandler} color="primary">Submit</MDBBtn>
      </div>
  )}
}

export default Form;