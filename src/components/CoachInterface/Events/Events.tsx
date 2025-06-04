import React, { useContext } from 'react';
import { EventContext } from './EventContext';
import { useNavigate } from 'react-router-dom';
import Header from "../../Header/Header";
import style from './Events.module.css';

const Events = () => {
    const navigate = useNavigate();
    const { events } = useContext(EventContext);

    return (
        <section className={style.events}>
            <Header position={'coach'}/>
            <div className={style.title}>
                <h1>Мероприятия</h1>
                <button onClick={() => navigate('/create-event')}>
                    Создать мероприятие
                </button>
            </div>
            <div className={style.events_container}>
                {events.map(event => (
                    <div key={event.id} className={style.event}>
                        <img src={event.img} alt={event.title}/>
                        <h2>{event.title}</h2>
                        <p>{event.date}</p>
                        {event.time && <p>{event.time}</p>}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Events;