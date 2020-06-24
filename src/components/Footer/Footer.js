import React from "react";
import {
  FooterMain,
  FooterLeft,
  FooterConnection,
  ConnectionIcons,
  FooterIcon,
  FooterRight,
  FooterCenter,
  ConnectionLink,
} from "./Footer.Styles";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import StepsForm from "../StepsForm/StepsForm";
function Footer() {
  return (
    <FooterMain>
      <FooterLeft>
        Developed By{" "}
        <a
          href="https://www.linkedin.com/in/aishwaryapann/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aishwarya
        </a>
        <FooterConnection>
          <span>Stay Connected</span>
          <ConnectionIcons>
            <ConnectionLink href="mailto:aishwarya93.07@gmail.com">
              <FooterIcon icon={faEnvelope} />
            </ConnectionLink>
            <ConnectionLink
              href="https://www.linkedin.com/in/aishwaryapann/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FooterIcon icon={faLinkedin} />
            </ConnectionLink>
            <ConnectionLink
              href="https://github.com/aishwarya257"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FooterIcon icon={faGithub} />
            </ConnectionLink>
          </ConnectionIcons>
        </FooterConnection>
      </FooterLeft>
      <FooterCenter>Made with React & TMDB API </FooterCenter>
      <FooterRight>
        <StepsForm />
      </FooterRight>
    </FooterMain>
  );
}

export default Footer;
