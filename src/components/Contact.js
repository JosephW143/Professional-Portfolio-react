import React from "react";

function Contact () {
    return (
      <div className="object-center min-w-[50%]">
        <form id='contact' className="flex flex-col w-full ">
        <h2 className="title-font border-b-4 border-black text-3xl text-center">Contact</h2>
        <div className="relative mb-4">
          <label for="nameInput">Name</label>
          <input type="text" className="text-white bg-slate-600 px-3 py-1border rounded w-full focus:border-blue-500" id="nameInput" placeholder="Please enter your name" />
        </div>
        <div className="relative mb-4">
          <label for="emailInput">Email</label>
          <input type="email" className="text-white bg-slate-600 px-3 py-1border rounded w-full focus:border-blue-500" id="emailInput" placeholder="Please enter your email" />
        </div>
        <div className="relative mb-4">
          <label for="messageInput">Message</label>
          <textarea className="text-white bg-slate-600 w-full border border-slate-600 focus:border-blue-500 h-32 py-1 px-3 resize-none" id="messageInput" placeholder="Message"></textarea>
        </div>
        <button type="submit" className="p-5">Submit</button>
      </form>
      </div>
    );
}

export default Contact;