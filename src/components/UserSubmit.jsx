import React from 'react';

var UserSubmit = (props) => {
  return (
    <form>
      <div>
        <label>Name:</label>
        <input id="name" type="text"/>
        <label>Message:</label>
        <input id="message" type="text"/>
        <input type="submit" value="Send"/>
      </div>
    </form> 
  ) 
}

export default UserSubmit;