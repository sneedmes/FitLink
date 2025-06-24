import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Main} from "../Registration/Main/Main";
import React, {useState} from 'react';
import Events from './Events/Events';
import CreateEvent from './Events/CreateEvent';
import Profile from "./Profile/Profile";
import TacticalBoard from "./TacticalBoard/TacticalBoard";
import EditEvent from "./Events/EditEvent";
import Workout from "./Workouts/Workout";
import EditWorkout from "./Workouts/EditWorkout";
import CreateWorkout from "./Workouts/CreateWorkout";
import WorkoutDetails from "./Workouts/WorkoutDetail";

export type SingleEvent = {
    id: number;
    title: string;
    desc: string,
    time: string;
    date: string;
    members: number;
};

export type ExerciseItem = {
    exercise: string;
    image: string; // или можешь использовать `File` если это локальная картинка
};

export type SingleWorkout = {
    id: number;
    title: string;
    privat: boolean;
    items: ExerciseItem[]; // массив упражнений с картинками
};


const EventsWrapper = () => {
    const [events, setEvents] = useState<SingleEvent[]>([
        {
            id: 1,
            title: 'Открытие турнира',
            desc: 'В кипе',
            time: '11:00',
            date: '2025-02-21',
            members: 0
        },
        {
            id: 2,
            title: 'Встреча с популярным человеком',
            desc: 'Не опаздывать!',
            time: '11:00',
            date: '2025-02-21',
            members: 0
        },
        {
            id: 3,
            title: 'Сборы в Москве',
            desc: 'На две недели',
            time: '11:00',
            date: '2025-02-21',
            members: 0
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

    const [workouts, setWorkouts] = useState<SingleWorkout[]>([
        {
            id: 1,
            title: "Full Body Training",
            privat: false,
            items: [
                { exercise: "Push-ups", image: "pushups.jpg" },
                { exercise: "Squats", image: "squats.jpg" }
            ]
        }
    ])

    const handleUpdateProfile = (updatedProfile: typeof profile) => {
        setProfile(updatedProfile);
    };

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/Main" element={<Main/>}/>

                <Route path="/" element={<Events events={events}/>}/>
                <Route path="/CreateEvent" element={<CreateEvent setEvents={setEvents}/>}/>
                <Route path="/edit-event/:id" element={<EditEvent events={events} setEvents={setEvents} />}/>

                <Route path="/Profile" element={<Profile id={profile.id}
                                                         name={profile.name}
                                                         surname={profile.surname}
                                                         fatherName={profile.fatherName}
                                                         dateOfBirth={profile.dateOfBirth}
                                                         mail={profile.mail}
                                                         onUpdate={handleUpdateProfile}/>}/>

                <Route path="/TacticalBoard" element={<TacticalBoard/>}/>

                <Route path="/workouts" element={<Workout workouts={workouts}/>}/>
                <Route path="/CreateWorkout" element={<CreateWorkout setWorkout={setWorkouts}/>}/>
                <Route path="/edit-workout/:id" element={<EditWorkout workouts={workouts} setWorkout={setWorkouts} />}/>
                <Route
                    path="/workout/:id"
                    element={<WorkoutDetails workouts={workouts} setWorkout={setWorkouts} />}
                />



            </Routes>
        </BrowserRouter>
    );
};

export default EventsWrapper;


