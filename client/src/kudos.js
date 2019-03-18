import React from 'react';
import axios from 'axios';
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardText, MDBCardTitle } from "mdbreact";


class Kudos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      kudos : [],
      newKudos: ''
    }
  }

  componentDidMount() {
    this.kudosList();
  }

  kudosList() {
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
        {this.state.kudos.map(kudos => {
          return (
            <MDBCard>
              <MDBCardBody className="card">
                <p>From {kudos.sender.name}</p>
                <p>To {kudos.receiver.name}</p>
                <MDBCardTitle>{kudos.title}</MDBCardTitle>
                <MDBCardText>
                  {kudos.body}
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          )
        })}
      </div>
    )
  }
}

export default Kudos;