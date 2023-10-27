import React from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaUserLarge } from "react-icons/fa6";
import { BiLogoGmail, BiSolidMessageCheck } from "react-icons/bi";

function Form() {
  const form = React.useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hbf9dd9",
        "template_9kqatls",
        form.current,
        "Xr2qsVSSXgMaqDNox"
      )
      .then(
        (result) => {
          e.target.reset();
          toast.success("Message Sent Successfully 😍");
        },
        (error) => {
          console.log(error.text);
          toast.error("Failed To Send Message 🥲");
        }
      );
  };
  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className="input-holder">
        <input type="text" name="user_name" placeholder="Your Name" required />
        <FaUserLarge />
      </div>
      <div className="input-holder">
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
        />
        <BiLogoGmail />
      </div>
      <div className="input-holder">
        <textarea name="message" placeholder="Wrtie Me a Message" required />
        <BiSolidMessageCheck />
      </div>
      <input type="submit" value="Send" />
    </form>
  );
}

export default Form;
