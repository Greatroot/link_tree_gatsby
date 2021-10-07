import React from 'react';
import styled from "styled-components";

//TODO: Add social media icons and GitHub link

const Footer = () => {
    return (
        <FooterStyles>
            <h2>Made by Ben Kosa</h2>
            <h2>Code available on GitHub</h2>
        </FooterStyles>
    );
};

export default Footer;

const FooterStyles = styled.div`
  margin-top: 30rem;
  margin-bottom: 4rem;
  
  h2 {
    color: var(--dark);
    font-size: 2.4rem;
    margin: 1rem 2rem;
  }
`