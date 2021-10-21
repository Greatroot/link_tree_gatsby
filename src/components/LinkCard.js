import React from 'react';
import {Link} from "gatsby";
import styled from "styled-components";

const LinkCard = ({ heading = 'Title',
                      subheading = 'This is a subheading',
                      link = "/live-events", style = "usefulLink",
                      type = "internal", //Prop only needs to be passed in if it is external link
                      color = "#292929",
                      backgroundColor="#64CBDC"
                  }) => {
    // console.log(heading);

    return (
        <CardStyles backgroundColor={backgroundColor} color={color}>
            <div className="button">
                { type.toLowerCase() === 'internal' ? (
                    <Link to={link}>
                        <h2 className="heading">{heading}</h2>
                        <h3 className="subheading">{subheading}</h3>
                    </Link>
                ) : (
                    <a href={link} target="_blank" rel="noreferrer">
                        <h2 className="heading">{heading}</h2>
                        <h3 className="subheading">{subheading}</h3>
                    </a>
                )}
            </div>
        </CardStyles>
    );
};

export default LinkCard;

const CardStyles = styled.div`
  //padding: 10rem 0;
  margin-top: 2rem;
  .button {
    background-color: ${props => props.backgroundColor};
    padding: 2em 2em;
    //display: inline-block;
    
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30rem;
    height: auto;
    border-radius: 14px;

  }
  
  .heading, .subheading{
    display: flex;
    justify-content: center;
    align-content: center;
    text-align: center;

    color: ${props => props.color};
  }
  
  .heading {
    font-size: 5rem;
  }
  .subheading {
    font-size: 2rem;
  }
  
  @media only screen and (min-width: 768px) {
    .button {
      //margin: 10rem;
      width: 768px;
    }
  }
  
`