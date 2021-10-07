import * as React from "react"
import { Link } from "gatsby"
import Logo from "../assets/images/logo1.svg";
import styled from "styled-components";

const Header = () => {


    return (
        <HeaderStyles>
            <div className="logo">
                <img src={Logo} alt="Broadstreet Institute Logo" />
            </div>
        </HeaderStyles>
    );
}

export default Header;

const HeaderStyles = styled.div`
  top: 0;
  left: 0;
  height: 13rem;
  width: 100%;
  padding: 1rem 0;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  
    img {
      width: 200px;
    }
`
