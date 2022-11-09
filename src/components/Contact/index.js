import React from "react";

function Contact () {
    return (
        <form id='contact'>
        <div className="form-group">
          <label for="nameInput">Name</label>
          <input type="text" className="form-control" id="nameInput" placeholder="Please enter your name" />
        </div>
        <div className="form-group">
          <label for="emailInput">Email</label>
          <input type="email" className="form-control" id="emailInput" placeholder="Please enter your email" />
        </div>
        <div className="form-group">
          <label for="messageInput">Message</label>
          <textarea className="form-control" id="messageInput" placeholder="Message"></textarea>
        </div>
        <button type="submit" className="btn btn-secondary">Submit</button>
      </form>
    );
}

export default Contact;