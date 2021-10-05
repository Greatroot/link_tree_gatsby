import React from 'react';
import {Link} from "gatsby";
import styled from "styled-components";

const LinkCard = ({ heading = 'Title',
                      subheading = 'This is a subheading',
                      link = "/live-events",
                      type = "Link"
                  }) => {
    return (
        <CardStyles>
            <div className="container">
                { type === 'Link' ? (
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