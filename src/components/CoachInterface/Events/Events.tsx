import React from 'react';
import Header from '../../Header/Header';
import EventInterface from './EventInterface';
import { SingleEvent } from '../Coach';
import Title from "../../Title/Title";

const Events = ({ events }: { events: SingleEvent[] }) => {
    return (
        <>
            <Header position="coach" />
            <Title title={'События'}/>
            <div className='content'>
                <EventInterface events={events}/>
            </div>
        </>
    );
};

export default Events;
