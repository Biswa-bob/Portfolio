import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>biswajeetpanda.bp@gmail.com</span>
        <div className="f-icons">
          <a
            href="https://github.com/Biswa-bob"
            target="_blank"
            rel="noreferrer"
          >
            <Gitub color="white" size={"3rem"} />
          </a>
          <a
            href="https://www.linkedin.com/in/biswajeetpanda-/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedIn color="white" size={"3rem"} />
          </a>
          <a
            href="https://www.instagram.com/b.o.b_builder_/"
            target="_blank"
            rel="noreferrer"
          >
            <Insta color="white" size={"3rem"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
