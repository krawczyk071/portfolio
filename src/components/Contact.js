import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [alert, setAlert] = useState({});
  const [formData, setFormData] = useState({});
  const form = useRef();

  const formChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const { user_name, user_email, message } = formData;
    if (!user_name || !user_email || !message) {
      setAlert({ type: "error", txt: "Please provide value for each field" });

      return;
    }

    emailjs
      .sendForm(
        process.env.REACT_APP_MAILJS_SERVICE_ID,
        "template_myh855m",
        form.current,
        "2txkHWAn6NyflTMvH"
      )
      .then(
        (result) => {
          setAlert({ type: "success", txt: "Email sent. Thank you." });
          // console.log(result);
          // e.target.reset();
          setFormData({ user_name: "", user_email: "", message: "" });
        },
        (error) => {
          setAlert({ type: "error", txt: error.text });
        }
      );
  };
  return (
    <div className="contact main" id="contact">
      <h1>CONTACT</h1>
      <p className="quote">
        Feel free to Contact me by submitting the form below and I will get back
        to you as soon as possible
      </p>
      <div
        className={`contact__alert ${
          alert.type === "error" ? "contact_alert__err" : "contact_alert__suc"
        }`}
      >
        {alert && <>{alert.txt}</>}
      </div>
      <form ref={form} onSubmit={sendEmail} className="form">
        <div>
          <label for="user_name">Name</label>
          <input
            placeholder="Enter Your Name"
            type="text"
            name="user_name"
            id="user_name"
            onChange={formChange}
            value={formData.user_name}
            className="ipt"
          />
        </div>
        <div>
          <label for="user_email">Email</label>
          <input
            placeholder="Enter Your Email"
            type="email"
            name="user_email"
            id="user_email"
            className="ipt"
            onChange={formChange}
            value={formData.user_email}
          />
        </div>
        <div>
          <label for="message">Message</label>
          <textarea
            cols="30"
            rows="5"
            placeholder="Enter Your Message"
            name="message"
            id="message"
            onChange={formChange}
            value={formData.message}
            className="ipt"
          ></textarea>
        </div>
        <button type="submit" className="btn form__btn">
          Send
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
