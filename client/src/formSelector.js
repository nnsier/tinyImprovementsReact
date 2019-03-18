import {Component} from 'react';
import { MDBSelect, MDBSelectInput, MDBSelectOptions, MDBSelectOption} from "mdbreact";
import axios from 'axios';

class SelectInput extends Component {
  state ={
    users: []
  }

  render() {
    return (
      <div>
        {axios.get('api/user')}
      </div>
    )
  }
}

export default SelectInput;
