import React, {useState} from 'react';
import Header from '../../components/Header/Header';
import Title from "../../components/Title/Title";
import { SingleEvent } from '../../TypesData';
import style from "./Events.module.css";
import {Button} from "../../components/Button/Button";
import {useNavigate} from "react-router-dom";

type EventsProps = {
    events: SingleEvent[];
    position: string;
};

const Events = ({ events, position }: EventsProps) => {
    const navigate = useNavigate();
    const [membersMap, setMembersMap] = useState<Record<string, number>>(
        Object.fromEntries(events.map(event => [event.id, event.members]))
    );
    const [joinedEvents, setJoinedEvents] = useState<Record<string, boolean>>({});

    const toggleParticipation = (id: number) => {
        setMembersMap(prev => ({
            ...prev,
            [id]: prev[id] + (joinedEvents[id] ? -1 : 1)
        }));

        setJoinedEvents(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    return (
        <>
            {position === 'coach' ?
                <Header position="coach" />
                : <Header position="player" />
            }
            <Title title={'События'}/>
            <div className='content'>
                <div className={style.events}>
                    <div className={style.events_container}>
                        {events.map((event) => (
                            <div key={event.id} className={style.event}>
                                <div>
                                    <h1>{event.title}</h1>
                                    <h3>{event.desc}</h3>
                                    <h4>{event.date}</h4>
                                    <h4>{event.time}</h4>
                                </div>

                                <div className={style.members}>
                                    <Button title={joinedEvents[event.id] ? 'Отменить участие' : 'Принять участие'}
                                            position={'members'}
                                            onClick={() => toggleParticipation(event.id)}
                                            isActive={!joinedEvents[event.id]}/>
                                    <Button
                                        title="Редактировать"
                                        onClick={() => navigate(`/edit-event/${event.id}`)}
                                        position="edit"
                                        isActive={true}
                                    />
                                    <p>Участников: {membersMap[event.id]}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <Button
                        onClick={() => navigate('/CreateEvent')}
                        title={'Добавить событие'}
                        position={'events'}
                        isActive={true}
                    />
                </div>
            </div>
        </>
    );
};

export default Events;
