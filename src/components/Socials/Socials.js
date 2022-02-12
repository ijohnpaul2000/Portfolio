import React from "react";
import { SocialIcons, SocialIconLink, SocialWrapper } from "./SocialsStyles";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
const Socials = () => {
  return (
    <SocialWrapper>
      <SocialIcons>
        <SocialIconLink
          href="https://www.facebook.com/ijohnpaul23"
          target="_blank"
          aria-label="Facebook"
        >
          <FaFacebook />
        </SocialIconLink>
        <SocialIconLink
          href="https://www.instagram.com/ijohnpaul2000/"
          target="_blank"
          aria-label="Instagram"
        >
          <FaInstagram />
        </SocialIconLink>
        <SocialIconLink
          href="https://twitter.com/johnpaul0523"
          target="_blank"
          aria-label="Twitter"
        >
          <FaTwitter />
        </SocialIconLink>
        <SocialIconLink
          href="https://github.com/ijohnpaul2000"
          target="_blank"
          aria-label="Github"
        >
          <FaGithub />
        </SocialIconLink>
        <SocialIconLink
          href="https://www.linkedin.com/in/JP-pineda/"
          target="_blank"
          aria-label="Linkedin"
        >
          <FaLinkedin />
        </SocialIconLink>
      </SocialIcons>
    </SocialWrapper>
  );
};

export default Socials;
