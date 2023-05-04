import React, { useContext, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { LangContext } from "./context/lang";
import { textEn, textPl } from "../utils/data";

const Contact = () => {
  const [lang] = useContext(LangContext);
  const data = lang ? textEn : textPl;

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
      setAlert({ type: "error", txt: data.err1 });

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
          setAlert({ type: "success", txt: data.err2 });
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
      <h1>{data.contact}</h1>
      <p className="quote">{data.contactLine}</p>
      <div
        className={`contact__alert ${
          alert.type === "error" ? "contact_alert__err" : "contact_alert__suc"
        }`}
      >
        {alert && <>{alert.txt}</>}
      </div>
      <form ref={form} onSubmit={sendEmail} className="form">
        <div>
          <label htmlFor="user_name">{data.formA1}</label>
          <input
            placeholder={data.formA2}
            type="text"
            name="user_name"
            id="user_name"
            onChange={formChange}
            value={formData.user_name}
            className="ipt"
          />
        </div>
        <div>
          <label htmlFor="user_email">{data.formB1}</label>
          <input
            placeholder={data.formB2}
            type="email"
            name="user_email"
            id="user_email"
            className="ipt"
            onChange={formChange}
            value={formData.user_email}
          />
        </div>
        <div>
          <label htmlFor="message">{data.formC1}</label>
          <textarea
            cols="30"
            rows="5"
            placeholder={data.formC2}
            name="message"
            id="message"
            onChange={formChange}
            value={formData.message}
            className="ipt"
          ></textarea>
        </div>
        <button type="submit" className="btn form__btn">
          {data.formBtn}
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
