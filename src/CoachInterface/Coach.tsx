import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Main} from "../Registration/Main/Main";
import React from 'react';

import Events from '../commonComponents/Events/Events';
import CreateEvent from '../commonComponents/Events/EventsInfo/CreateEvent';
import EditEvent from "../commonComponents/Events/EventsInfo/EditEvent";

import Profile from "../commonComponents/Profile/Profile";
import TacticalBoard from "./TacticalBoard/TacticalBoard";

import Workout from "../commonComponents/Workouts/Workout";
import EditWorkout from "../commonComponents/Workouts/WorkoutInfo/EditWorkout";
import CreateWorkout from "../commonComponents/Workouts/WorkoutInfo/CreateWorkout";
import WorkoutDetails from "../commonComponents/Workouts/WorkoutInfo/WorkoutDetail";

import Teams from "../commonComponents/Teams/Teams";
import TeamPage from "../commonComponents/Teams/TeamsInfo/TeamPage";
import PlayerProfile from "../commonComponents/Teams//TeamsInfo/PlayerProfile/PlayerProfile";
import CoachProfile from "../commonComponents/Teams//TeamsInfo/CoachProfile/CoachProfile";
import PlayerStat from "../commonComponents/Teams//TeamsInfo/PlayerProfile/PlayerStat/PlayerStat";

import {useAppContext} from "../Context";

const CoachInterface = () => {
    const handleUpdateProfile = (updatedProfile: typeof data.profile) => {
        data.setProfile(updatedProfile);
    };
    const { ...data } = useAppContext();
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/Main" element={<Main/>}/>

                <Route path="/" element={<Events position="coach" events={data.events} />} />
                <Route path="/CreateEvent" element={<CreateEvent position="coach" setEvents={data.setEvents}/>}/>
                <Route path="/edit-event/:id" element={<EditEvent position="coach" events={data.events} setEvents={data.setEvents} />}/>

                <Route path="/Profile" element={<Profile id={data.profile.id}
                                                         name={data.profile.name}
                                                         surname={data.profile.surname}
                                                         fatherName={data.profile.fatherName}
                                                         dateOfBirth={data.profile.dateOfBirth}
                                                         mail={data.profile.mail}
                                                         img={data.profile.img}
                                                         onUpdate={handleUpdateProfile}
                                                         role={data.profile.role}
                />}/>

                <Route path="/TacticalBoard" element={<TacticalBoard/>}/>

                <Route path="/workouts" element={<Workout position={'coach'} workouts={data.workouts}/>}/>
                <Route path="/CreateWorkout" element={<CreateWorkout setWorkout={data.setWorkouts}/>}/>
                <Route path="/edit-workout/:id" element={<EditWorkout workouts={data.workouts} setWorkout={data.setWorkouts} />}/>
                <Route
                    path="/workout/:id"
                    element={<WorkoutDetails position={'coach'} workouts={data.workouts}  />}
                />

                <Route path="/Teams" element={<Teams position={'coach'} teams={data.teams}/>}/>
                <Route path="/team/:id" element={<TeamPage position={'coach'} teams={data.teams} />} />
                <Route path="/player/:id" element={<PlayerProfile position={'coach'} teams={data.teams} />} />
                <Route path="/playerStat/:id" element={<PlayerStat position={'coach'} teams={data.teams}/>} />
                <Route path="/coach/:id" element={<CoachProfile position={'coach'} teams={data.teams} />} />

            </Routes>
        </BrowserRouter>
    );
};

export default CoachInterface;


