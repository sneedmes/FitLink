import React, { useState } from 'react';
import style from '../Events.module.css';
import Header from '../../../components/Header/Header';
import { useNavigate } from 'react-router-dom';
import { SingleEvent } from '../../Coach';
import {Button} from "../../../components/Button/Button";
import Title from "../../../components/Title/Title";

type Props = {
    setEvents: React.Dispatch<React.SetStateAction<SingleEvent[]>>;
};

const CreateEvent = ({ setEvents }: Props) => {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const navigate = useNavigate();

    const handleAdd = () => {
        const newEvent: SingleEvent = {
            id: Date.now(),
            title,
            desc,
            date,
            time,
            members: 0
        };

        setEvents(prev => [...prev, newEvent]);
        navigate('/');
    };

    return (
        <>
            <Header position="coach" />
            <Title title={'Создать событие'}/>

            <div className='content'>
                <div className={style.add_event}>
                    <h2>Заполните все поля</h2>
                    <input
                        type="text"
                        name="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Название"
                    />
                    <input
                        type="text"
                        name="description"
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                        placeholder="Описание"
                    />
                    <input
                        type="date"
                        name="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                    <input
                        type="time"
                        name="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        placeholder="Время (необязательно)"
                    />
                    <Button
                        onClick={handleAdd}
                        title={'Добавить'}
                        isActive={true}
                        position={'events'}
                    />
                </div>
            </div>
        </>
    );
};

export default CreateEvent;
