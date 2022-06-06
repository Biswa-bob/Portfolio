import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import { themeContext } from "../../Context";
const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  
  const [userData, setUserData] = useState({
    firstName: "",
    email: "",
    message: "",
  });

  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };

  // connect with firebase
  const submitData = async (event) => {
    event.preventDefault();
    const { firstName, email, message } = userData;

    if (firstName && email && message) {
      const res = fetch(
        "https://biswaportfolio-default-rtdb.firebaseio.com/userDataRecords.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName,
            email,
            message,
          }),
        }
      );

      if (res) {
        setUserData({
          firstName: "",

          email: "",

          message: "",
        });
        alert("Data Stored");
      } else {
        alert("plz fill the data");
      }
    } else {
      alert("plz fill the data");
    }
  };

  return (
    <div className="contact-form" id="contact">
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
          <span style={{ color: darkMode ? "white" : "" }}>Get in Touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form ref={form}>
          <input
            type="text"
            name="firstName"
            className="user"
            value={userData.firstName}
            placeholder="Name"
            onChange={postUserData}
          />
          <input
            type="email"
            name="email"
            className="user"
            value={userData.email}
            placeholder="Email"
            onChange={postUserData}
          />
          <textarea
            name="message"
            className="message"
            value={userData.message}
            placeholder="Message"
            onChange={postUserData}
          />
          <input
            type="submit"
            value="Send"
            className="button"
            onClick={submitData}
          />
          {/* <span>{done && "Thanks for Contacting me"}</span> */}
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
