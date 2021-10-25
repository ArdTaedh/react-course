import React from 'react';
import {Head} from "next/document";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A First Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg',
        address: "Some Address",
        description: "This is a first meetup"
    },
    {
        id: 'm2',
        title: 'A Second Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg',
        address: "Some Address",
        description: "This is a second meetup"
    },
]

function HomePage() {
    return (
        <div>
            <MeetupList meetups={DUMMY_MEETUPS} />
        </div>
    );
};

export default HomePage;