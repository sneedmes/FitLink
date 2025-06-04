import React, { createContext, useState, ReactNode } from 'react';

interface IEvent {
    id: number;
    title: string;
    date: string;
    time: string;
    img: string;
}

interface IEventContext {
    events: IEvent[];
    addEvent: (event: Omit<IEvent, 'id'>) => void;
}

export const EventContext = createContext<IEventContext>({
    events: [],
    addEvent: () => {},
});

export const EventProvider = ({ children }: { children: ReactNode }) => {
    const [events, setEvents] = useState<IEvent[]>([
        {
            id: 1,
            title: 'Сборы',
            date: '25.06.2025 - 10.06.2025',
            time: '',
            img: 'logo.png'
        },
        {
            id: 2,
            title: 'Встреча с коучем',
            date: '25.06.2025',
            time: '11:00',
            img: 'logo.png'
        }
    ]);

    const addEvent = (event: Omit<IEvent, 'id'>) => {
        setEvents([...events, { ...event, id: Date.now() }]);
    };

    return (
        <EventContext.Provider value={{ events, addEvent }}>
            {children}
        </EventContext.Provider>
    );
};