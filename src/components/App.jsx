import React from 'react';

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
          <div>server responses go here</div>
        </div>
        <div>
          Submissions
          <div>namebox</div><div>messagebox</div>
        </div>
      </div>
    )
  }
}

export default App;