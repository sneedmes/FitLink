import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Main} from "../Registration/Main/Main";
import React, {useState} from 'react';
import Events from './Events/Events';
import CreateEvent from './Events/CreateEvent';
import Profile from "./Profile/Profile";

export type SingleEvent = {
    id: number;
    title: string;
    desc: string,
    time: string;
    date: string;
    img: string;
};

const EventsWrapper = () => {
    const [events, setEvents] = useState<SingleEvent[]>([
        {
            id: 1,
            title: 'Открытие турнира',
            desc: 'В кипе',
            time: '11:00',
            date: '2025-02-21',
            img: 'logo.png',
        },
        {
            id: 2,
            title: 'Встреча с популярным человеком',
            desc: 'Не опаздывать!',
            time: '11:00',
            date: '2025-02-21',
            img: 'logo.png',
        },
        {
            id: 3,
            title: 'Сборы в Москве',
            desc: 'На две недели',
            time: '11:00',
            date: '2025-02-21',
            img: 'logo.png',
        }
    ]);

    const [profile, setProfile] = useState({
        id: 1,
        name: "Сусанна",
        surname: "Даллакян",
        fatherName: "Тиграновна",
        dateOfBirth: "2006-07-27",
        mail: "sus@mail.com"
    });

    const handleUpdateProfile = (updatedProfile: typeof profile) => {
        setProfile(updatedProfile);
    };

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/Main" element={<Main/>}/>
                <Route path="/" element={<Events events={events}/>}/>
                <Route path="/CreateEvent" element={<CreateEvent setEvents={setEvents}/>}/>
                <Route path="/Profile" element={<Profile id={profile.id}
                                                         name={profile.name}
                                                         surname={profile.surname}
                                                         fatherName={profile.fatherName}
                                                         dateOfBirth={profile.dateOfBirth}
                                                         mail={profile.mail}
                                                         onUpdate={handleUpdateProfile}/>}
                />
            </Routes>
        </BrowserRouter>
    );
};

export default EventsWrapper;


