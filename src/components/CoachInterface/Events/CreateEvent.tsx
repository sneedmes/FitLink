import React, { useState, useContext } from 'react';
import { EventContext } from './EventContext';
import { useNavigate } from 'react-router-dom';
import Header from "../../Header/Header";
import style from './Events.module.css';

const CreateEvent = () => {
    const navigate = useNavigate();
    const { addEvent } = useContext(EventContext);
    const [formData, setFormData] = useState({
        title: '',
        date: '',
        time: '',
        img: 'logo.png'
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        addEvent(formData);
        navigate('/');
    };

    return (
        <section className={style.events}>
            <Header position={'coach'}/>
            <div className={style.title}>
                <h1>Создать мероприятие</h1>
            </div>

            <form onSubmit={handleSubmit} className={style.eventForm}>
                <input
                    type="text"
                    name="title"
                    placeholder="Название"
                    value={formData.title}
                    onChange={handleChange}
                    required
                />
                <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                />
                <input
                    type="time"
                    name="time"
                    placeholder="Время (необязательно)"
                    value={formData.time}
                    onChange={handleChange}
                />
                <div className={style.buttons}>
                    <button type="submit">Создать</button>
                    <button type="button" onClick={() => navigate('/')}>
                        Отмена
                    </button>
                </div>
            </form>
        </section>
    );
};

export default CreateEvent;