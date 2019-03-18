import React from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

class Modal extends React.Component {
  state = {
    modal: false
  }

  toggle = () => {
    this.setState ({
      modal: !this.state.modal
    })
  }

  render() {
    return (
      <MDBContainer>
        <MDBBtn onClick = {this.toggle}>Modal</MDBBtn>
        <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
          <MDBModalHeader toggle={this.toggle}>Add Kudos!</MDBModalHeader>
          <MDBModalBody>

          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={this.toggle}>Close</MDBBtn>
            <MDBBtn color="primary">Submit</MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    )
  }
}

export default Modal;