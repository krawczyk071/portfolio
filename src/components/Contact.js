import React from "react";
import { contact } from "../utils/data";

const Contact = () => {
  return (
    <div className="contact main" id="contact">
      <h1>CONTACT</h1>
      <p className="quote">
        Feel free to Contact me by submitting the form below and I will get back
        to you as soon as possible
      </p>
      <form action="#" method="post" className="form">
        <div>
          <label for="name">Name</label>
          <input
            placeholder="Enter Your Name"
            type="text"
            name="name"
            id="name"
            className="ipt"
          />
        </div>
        <div>
          <label for="email">Email</label>
          <input
            placeholder="Enter Your Email"
            type="email"
            name="email"
            id="email"
            className="ipt"
          />
        </div>
        <div>
          <label for="message">Message</label>
          <textarea
            cols="30"
            rows="10"
            placeholder="Enter Your Message"
            name="message"
            id="message"
            className="ipt"
          ></textarea>
        </div>
        <button type="submit" className="btn form__btn">
          Submit
        </button>
      </form>
      {/* <form on onSubmit={() => console.log("submited")}>
        {contact.map((c) => (
          <input type={c.type} placeholder={c.placeholder} />
        ))}
      </form> */}
    </div>
  );
};

export default Contact;
