import React, {useEffect, useState, useRef} from 'react';
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Airtable from "airtable";
import styled from "styled-components";
import LinkCard from "../components/LinkCard";
import Logo from "../assets/images/logo1.svg"
import Layout from "../components/layout";
import Header from "../components/header";

// TODO: Fix the weird offset issue.
const Home = () => {
    const [upcomingEvents, setUpcomingEvents] = useState([]); // A list of all featured events from the airtable.
    const [usefulLinks, setUsefulLinks] = useState([]); // a list of all other links from the airtable.
    const base = new Airtable({ apiKey: 'keyQxHIDEz8hhTfXN'}).base('app0L5mjEUjDEKZl3')
    const firstUpdate = useRef(true); // True if component hasn't mounted yet, false if it already has.
    // Being used so that we can have the useEffect hook do 2 different things based
    // on whether it has run for the first time or sometime after.

    useEffect(() => {
        if(firstUpdate.current)
        {
            firstUpdate.current = false;

            const table_name = "Link Tree Webapp"
            base("Featured Links")
                .select({ view: "Grid view"})
                .eachPage((records, fetchNextPage) => {
                    // console.log(records);
                    setUpcomingEvents(upcomingEvents.concat(records));
                    fetchNextPage();
                });

            base("Important Links")
                .select({ view: "Grid view"})
                .eachPage((records, fetchNextPage) => {
                    // console.log(records);
                    setUsefulLinks(usefulLinks.concat(records));
                    fetchNextPage();
                });
        }
    }, []);

    const renderUpcomingEvents = () => {
        let cardNum = 0;

        return (
            upcomingEvents.map((event, index) => {
                cardNum++;
                return (
                    <div className={cardNum % 3 === 0 ? "link upcomingEvent group__footer" : "link upcomingEvent"} key={index}>
                    <LinkCard heading={event.fields.title}
                                  subheading={event.fields.subtitle}
                                  link={event.fields.link}
                                  type={event.fields.link_type}
                                  color={event.fields.text_color}
                                  backgroundColor={event.fields.card_color}
                        />
                    </div>
                );
            }
        ))
    }

    const renderUsefulLinks = () => {
        let cardNum = 0;

        return (
            usefulLinks.map((event, index) => {
                cardNum++;

                return(
                <div className={cardNum % 3 === 0 ? "link usefulLinks group__footer" : "link usefulLinks"} key={index}>
                    <LinkCard heading={event.fields.title}
                              subheading={event.fields.subtitle}
                              link={event.fields.link}
                              type={event.fields.link_type}
                              color={event.fields.text_color}
                              backgroundColor={event.fields.card_color}
                    />
                </div>);
            })
        );
    }

    return (
        <Layout>
            <HomeStyles className="container">
                <Header />
                <div className="links">
                    <div className="upcoming__events">
                        <h2 className="link__header">Featured Links</h2>
                        {renderUpcomingEvents()}
                    </div>
                </div>
                <div className="links">
                    <div className="useful__links">
                        <h2 className="link__header">Useful Links</h2>
                        {renderUsefulLinks()}
                    </div>
                </div>
            </HomeStyles>
        </Layout>
    );
}

export default Home;

const HomeStyles = styled.div`
    .links {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      
      margin: 4rem 0;
    }
  
  .link__header {
    color: var(--dark);
    font-size: 3rem;
  }
  
  .group__footer {
    margin-bottom: 10rem;
  }
  
`