import React from 'react';
import {Link} from "gatsby";
import styled from "styled-components";

const LinkCard = ({ heading = 'Title',
                      subheading = 'This is a subheading',
                      link = "/live-events", style = "usefulLink",
                      type = "internal", //Prop only needs to be passed in if it is external link
                      color = "var(--dark)", backgroundColor="var(--white)"
                  }) => {
    return (
        <CardStyles>
            <div className="container">
                { type.toLowerCase() === 'internal' ? (
                    <Link to={link}>
                        <div className="heading">{heading}</div>
                        <div className="subheading">{subheading}</div>
                    </Link>
                ) : (
                    <a href={link} target="_blank" rel="noreferrer">
                        <div className="heading">{heading}</div>
                        <div className="subheading">{subheading}</div>
                    </a>
                )}
            </div>
        </CardStyles>
    );
};

export default LinkCard;

const CardStyles = styled.div`
  padding: 10rem 0;
  
  
`