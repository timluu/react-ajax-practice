import React from 'react';

var UserSubmit = (props) => {
  return (
    <form>
      <div>
        <label>Name:</label>
        <input id="name" type="text" onChange={props.onChange}/>
        <label>Message:</label>
        <input id="message" type="text" onChange={props.onChange}/>
        <input type="submit" value="Send Message" onClick={props.onClick}/>
      </div>
    </form> 
  ) 
}

export default UserSubmit;