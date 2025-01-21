import React from 'react';
import styled from 'styled-components';
import { FaInstagram, FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'; // Import icons

const FooterContainer = styled.footer`
  background-color: #2c3e50;
  padding: 20px;
  text-align: center;
  color: #fff;
  margin-top: 50px;
`;

const SocialMediaLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 10px;
`;

const SocialMediaIcon = styled.a`
  color: #fff;
  font-size: 24px;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #3498db;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>Follow me on:</p>
      <SocialMediaLinks>
        <SocialMediaIcon href="https://www.instagram.com/aabid072/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </SocialMediaIcon>
        <SocialMediaIcon href="https://www.facebook.com/profile.php?id=100054966173992" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </SocialMediaIcon>
        <SocialMediaIcon href="https://github.com/Khan072" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </SocialMediaIcon>
        <SocialMediaIcon href="https://www.linkedin.com/in/aabid-khan-402666216/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </SocialMediaIcon>
      </SocialMediaLinks>
    </FooterContainer>
  );
};

export default Footer;
