// import React, {useEffect, useState, useRef} from 'react';
// import LinkCard from "../components/LinkCard";
// import Airtable from "airtable";
//
// const Home = () => {
//     const [upcomingEvents, setUpcomingEvents] = useState([]);
//     const [usefulLinks, setUsefulLinks] = useState([]);
//     const base = new Airtable({ apiKey: 'keyQxHIDEz8hhTfXN'}).base('app0L5mjEUjDEKZl3')
//     const firstUpdate = useRef(true); // True if component hasn't mounted yet, false if it already has.
//     // Being used so that we can have the useEffect hook do 2 different things based
//     // on whether it has run for the first time or sometime after.
//
//     useEffect(() => {
//         if(firstUpdate.current)
//         {
//             const table_name = "Link Tree Webapp"
//             base("Upcoming Events")
//                 .select({ view: "Grid view"})
//                 .eachPage((records, fetchNextPage) => {
//                     console.log(records);
//                     setUpcomingEvents(upcomingEvents.concat(records));
//                     fetchNextPage();
//                 });
//
//             base("Important Links")
//                 .select({ view: "Grid view"})
//                 .eachPage((records, fetchNextPage) => {
//                     console.log(records);
//                     setUsefulLinks(usefulLinks.concat(records));
//                     fetchNextPage();
//                 });
//         }
//     }, []);
//
//     return (
//         <div>
//             Home
//         </div>
//     );
// };
//
// export default Home;