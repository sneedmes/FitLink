import React, { createContext, useState, useContext, ReactNode } from "react";
import {SingleEvent, ProfileProps, SingleWorkout, Team, initialTeams, StatKey, StatItem} from "./TypesData";
import img from "./assets/profile-photo.jpg"

type AppContextType = {
    profile: ProfileProps;
    setProfile: React.Dispatch<React.SetStateAction<ProfileProps>>;
    events: SingleEvent[];
    setEvents: React.Dispatch<React.SetStateAction<SingleEvent[]>>;
    workouts: SingleWorkout[];
    setWorkouts: React.Dispatch<React.SetStateAction<SingleWorkout[]>>;
    teams: Team[];
    setTeams: React.Dispatch<React.SetStateAction<Team[]>>;
    stats: Record<StatKey, StatItem[]>;
    setStats: React.Dispatch<React.SetStateAction<Record<StatKey, StatItem[]>>>;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
    const [profile, setProfile] = useState<ProfileProps>({
        id: 1,
        name: "Сусанна",
        surname: "Даллакян",
        fatherName: "Тиграновна",
        dateOfBirth: "2006-07-27",
        mail: "sus@mail.com",
        img: "",
        onUpdate: () => null,
        role: 'Спортсмен'
    });

    const [events, setEvents] = useState<SingleEvent[]>([
        { id: 1, title: "Открытие турнира", desc: "В кипе", time: "11:00", date: "2025-02-21", members: 0 },
        { id: 2, title: "Встреча с популярным человеком", desc: "Не опаздывать!", time: "11:00", date: "2025-02-21", members: 0 },
        { id: 3, title: "Сборы в Москве", desc: "На две недели", time: "11:00", date: "2025-02-21", members: 0 }
    ]);

    const [workouts, setWorkouts] = useState<SingleWorkout[]>([
        {
            id: 1,
            title: "Full Body Training",
            privat: false,
            items: [
                { exercise: "Push-ups", image: img },
                { exercise: "Squats", image: img }
            ]
        }
    ]);

    const [teams, setTeams] = useState<Team[]>(initialTeams); // Можно передать initialTeams, если есть

    const [stats, setStats] = useState<Record<StatKey, StatItem[]>>({
        goals: [
            { label: 'КС - Рубин', value: 1 },
            { label: 'КС - Зенит', value: 3 },
            { label: 'ЦСКА - КС', value: 1 },
            { label: 'Сочи - КС', value: 2 },
        ],
        assists: [
            { label: 'КС - Рубин', value: 1 },
            { label: 'КС - Зенит', value: 3 },
            { label: 'ЦСКА - КС', value: 1 },
            { label: 'Сочи - КС', value: 2 },
        ],
        cards: [
            { label: 'Желтые', value: 0 },
            { label: 'Красные', value: 0 },
        ],
        matches: [
            { label: 'КС - Рубин', value: '' },
            { label: 'КС - Зенит', value: '' },
            { label: 'ЦСКА - КС', value: '' },
            { label: 'Сочи - КС', value: '' },
        ],
    });

    return (
        <AppContext.Provider value={{ profile, setProfile, events, setEvents, workouts, setWorkouts, teams, setTeams, stats, setStats }}>
            {children}
        </AppContext.Provider>
);
};

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error("useAppContext must be used within AppProvider");
    }
    return context;
};
