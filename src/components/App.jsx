import React from 'react';
import $ from 'jquery';
import UserSubmit from './UserSubmit.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      name: '',
      message: '',
      response: 'Response goes here!'
    }
  }

  /*
    Purpose: post name and message to server once the button
    is clicked.
  */
  postToServer(e) {
    e.preventDefault();
    var userState = {name: this.state.name, message: this.state.message};
    console.log(userState);
    $.ajax({
      url: "http://ec2-13-57-25-101.us-west-1.compute.amazonaws.com:3000/api/hrsf110/greeting",
      type: "POST",
      data: JSON.stringify(userState),
      contentType: "application/json",
      success: (data) => {
        this.setState({
          response: data
        })
      },
      error: (data) => {
        console.log("Something probably failed.");
      }
    })
  } 

  /*
    Purpose: change value of text form as user types.
  */
  handleChange(event) {
    if(event.target.id === 'name') {
      this.setState({
        name: event.target.value
      });
    } else if(event.target.id === 'message') {
      this.setState({
        message: event.target.value
      })
    }
  }

  /*
    Purpose: once the DOM renders, send an AJAX request
    to get information from the server.
  */
  // componentDidMount() {
  //   this.getAJAXRequest();
  // }

  /*
    Purpose: combine all functional components of the app
    together and render them to the DOM to be viewed.
  */
  render() {
    return (
      <div>
        <div>
          Server Response:
          <div>{this.state.response}</div>
        </div>
        <div>
          <UserSubmit value={this.state.value} onChange={this.handleChange.bind(this)} onClick={this.postToServer.bind(this)}/>
        </div>
      </div>
    )
  }
}

export default App;