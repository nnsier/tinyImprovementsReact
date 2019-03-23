import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Kudos from './kudos';
import { MDBContainer, MDBRow, MDBCol, MDBBtn} from 'mdbreact';
import Modal from './modal';

class App extends Component {
  state = {
    kudos: []
  }

  componentDidMount() {
    this.kudosList();
  }

  kudosList = () => {
    axios.get('api/kudos')
    .then(response => {
      console.log({response});
      this.setState({
        kudos: response.data
      })
    })
  }

  render() {
    return (
      <div>
        <MDBContainer fluid>
          <header>
            <nav class="navbar fixed-top navbar-expand-lg navbar-dark default-color scrolling-navbar">
              <Modal/>
            </nav>
            
          </header>
        </MDBContainer>
        <MDBContainer className="body">
          <MDBRow>
            <MDBCol>
            </MDBCol>
            <MDBCol size="7">
            <Kudos kudos={this.state.kudos}/>
            </MDBCol>
            
            <MDBCol>
            </MDBCol>
          </MDBRow>
          
        </MDBContainer>
      </div>
     
    );
  }
}

export default App;
