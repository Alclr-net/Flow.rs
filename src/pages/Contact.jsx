import { useState } from "react";
import { One } from "../components/ContactOne";
import { Two } from "../components/ContactTwo";
import "./Contact.css";
export const Contact = () => {
  const [showFirst, setShow] = useState(true);
  const [input, setInput] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.name.length > 0) {
      setShow(false);
    } else {
      return alert("Enter your GentleMan!");
    }
  };
  return (
    <>
      <section className="contact_word">
        <div id="near_nav">CONTACT</div>
        <span id="pretend_nav">GENERAL INQUIRIES AND APPLICATIONS</span>
        <span id="pretend_email">HELLO@FLOW.COM</span>
      </section>
      <section className="form_submit">
        {showFirst ? (
          <One
            setShow={setShow}
            input={input}
            setInput={setInput}
            handleSubmit={handleSubmit}
          />
        ) : (
          <Two
            setShow={setShow}
            input={input}
            setInput={setInput}
            handleSubmit={handleSubmit}
          />
        )}
      </section>
    </>
  );
};
