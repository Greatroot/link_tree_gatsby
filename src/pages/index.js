import React, {useEffect, useState, useRef} from 'react';
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Airtable from "airtable";
import styled from "styled-components";
import LinkCard from "../components/LinkCard";
import Logo from "../assets/images/logo1.svg"

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
            const table_name = "Link Tree Webapp"
            base("Upcoming Events")
                .select({ view: "Grid view"})
                .eachPage((records, fetchNextPage) => {
                    console.log(records);
                    setUpcomingEvents(upcomingEvents.concat(records));
                    fetchNextPage();
                });

            base("Important Links")
                .select({ view: "Grid view"})
                .eachPage((records, fetchNextPage) => {
                    console.log(records);
                    setUsefulLinks(usefulLinks.concat(records));
                    fetchNextPage();
                });
        }
    }, []);

    const renderUpcomingEvents = () => {
        return (
            upcomingEvents.map((event, index) => (
                    <div className="link upcomingEvent" key={index}>
                        <LinkCard title={event.fields.Title}
                                  subheading={event.fields.Subtitle}
                                  link={event.fields.Link}
                                  type={event.fields["Link Type"]}
                                  color="var(--dark)"
                                  backgroundColor="var(--blue)"
                        />
                    </div>
            ))
        );
    }

    const renderUsefulLinks = () => {
        return (
            upcomingEvents.map((event, index) => (
                <div className="link usefulLinks" key={index}>
                    <LinkCard title={event.fields.Title}
                              subheading={event.fields.Subtitle}
                              link={event.fields.Link}
                              type={event.fields["Link Type"]}
                              color="var(--white)"
                              backgroundColor="var(--dark)"
                    />
                </div>
            ))
        );
    }

    return (
        <HomeStyles>
            <div className="header">
                <div className="logo">
                    <img src={Logo} alt="Broadstreet Institute Logo" />
                </div>
            </div>
            <div className="links">
                <div className="upcoming__events">
                    {renderUpcomingEvents()}
                </div>
                <div className="useful__links">
                    {/*{renderUsefulLinks}*/}
                </div>
            </div>
        </HomeStyles>
    );
}

export default Home;

const HomeStyles = styled.div`
  
`