import React from 'react';
import UserSubmit from './UserSubmit.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  /*
    Purpose: Combine all functional components of the app
    together and render them to the DOM to be viewed.
  */
  render() {
    return (
      <div>
        <div>
          Server Responses
          <div>Response Goes Here!</div>
        </div>
        <div>
          <UserSubmit />
        </div>
      </div>
    )
  }
}

export default App;