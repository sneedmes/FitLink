import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from 'react';
import {Main} from "../Registration/Main/Main";

import Events from "../commonComponents/Events/Events";
import CreateEvent from "../commonComponents/Events/EventsInfo/CreateEvent";
import EditEvent from "../commonComponents/Events/EventsInfo/EditEvent";
import Profile from "../commonComponents/Profile/Profile";
import Workout from "../commonComponents/Workouts/Workout";
import WorkoutDetails from "../commonComponents/Workouts/WorkoutInfo/WorkoutDetail";
import Teams from "../commonComponents/Teams/Teams";
import TeamPage from "../commonComponents/Teams/TeamsInfo/TeamPage";
import PlayerStat from "../commonComponents/Teams/TeamsInfo/PlayerProfile/PlayerStat/PlayerStat";
import CoachProfile from "../commonComponents/Teams/TeamsInfo/CoachProfile/CoachProfile";

import {useAppContext} from "../Context";
import PlayerProfile from "../commonComponents/Teams/TeamsInfo/PlayerProfile/PlayerProfile";


const Player = () => {
    const handleUpdateProfile = (updatedProfile: typeof data.profile) => {
        data.setProfile(updatedProfile);
    };
    const { ...data } = useAppContext();

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/Main" element={<Main/>}/>

                <Route path="/" element={<Events events={data.events} position="player" />} />
                <Route path="/CreateEvent" element={<CreateEvent position={'player'} setEvents={data.setEvents}/>}/>
                <Route path="/edit-event/:id" element={<EditEvent position={'player'} events={data.events} setEvents={data.setEvents} />}/>

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

                <Route path="/workouts" element={<Workout position={'player'} workouts={data.workouts}/>}/>
                <Route
                    path="/workout/:id"
                    element={<WorkoutDetails position={'player'} workouts={data.workouts} />}
                />

                <Route path="/Teams" element={<Teams position={'player'} teams={data.teams}/>}/>
                <Route path="/team/:id" element={<TeamPage position={'player'} teams={data.teams}/>} />
                <Route path="/coach/:id" element={<CoachProfile position={'player'} teams={data.teams} />} />
                <Route path="/player/:id" element={<PlayerProfile position={'player'} teams={data.teams}/>} />
                <Route path="/playerStat/:id" element={<PlayerStat position={'player'} teams={data.teams}/>} />

            </Routes>
        </BrowserRouter>
    );
};

export default Player


