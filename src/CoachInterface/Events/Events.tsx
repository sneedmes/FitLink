import React from 'react';
import Header from '../../components/Header/Header';
import Title from "../../components/Title/Title";
import EventInterface from './EventsInfo/EventInterface';
import { SingleEvent } from '../Coach';

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
