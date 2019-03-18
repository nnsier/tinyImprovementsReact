import React from 'react';
import { MDBInput } from "mdbreact";
import FormSelector from './formSelector';

class InputPage extends React.Component {

  state = {
    kudos: {}
  }

}

const InputPage = () => {
  return (
    <div className="form-group">
      <MDBInput label="Title"/>
      <MDBInput label="Sender"/>
      {/* Add new element here to grab Sender as a form input */}
      {/* Add new element here to grab Receiver as a form input */}
      <MDBInput type="textarea" label="Body" rows="5" />
    </div>
  )
}