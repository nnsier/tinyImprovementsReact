import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Kudos from './kudos';
import { MDBContainer, MDBRow, MDBCol, MDBBtn} from 'mdbreact';
import Modal from './modal';

class App extends Component {
  render() {
    return (
      <div>
        <MDBContainer fluid>
          <header>
            <p>Your Kudos!</p> 
            <Modal/>
          </header>
        </MDBContainer>
        <MDBContainer>
          <MDBRow>
            <MDBCol>
            </MDBCol>
            <MDBCol size="7">
            <Kudos/>
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
