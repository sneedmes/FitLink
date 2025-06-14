import React from 'react';
import {useNavigate} from 'react-router-dom';
import style from './Events.module.css';
import {SingleEvent} from '../Coach';
import {Button} from "../../Button/Button";

type EventType = {
    events: SingleEvent[];
};

const EventInterface = ({events}: EventType) => {
    const navigate = useNavigate();

    return (
        <section className={style.events}>
            <div className={style.events_container}>
                {events.map((event) => (
                    <div key={event.id} className={style.event}>
                        <h1>{event.title}</h1>
                        <h3>{event.desc}</h3>
                        <p>{event.date}</p>
                        <p>{event.time}</p>
                        <img src={event.img} alt={event.title} className={style.event_image} />
                    </div>
                ))}
            </div>
            <Button onClick={() => navigate('/CreateEvent')} title={'Добавить событие'} position={'events'}
                    isActive={true}/>
        </section>
    );
};

export default EventInterface;
