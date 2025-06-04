import React from 'react';
import Header from "../Header/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Main} from "../Registration/Main/Main";
import Events from "./Events/Events";
import CreateEvent from "./Events/CreateEvent";
import { EventProvider } from "./Events/EventContext"; // Импортируем провайдер

const Coach = () => {
    return (
        <section className='coach'>
            <BrowserRouter>
                <EventProvider> {/* Обертываем все роуты в провайдер */}
                    <Routes>
                        <Route path="/Header" element={<Header position={'coach'}/>}/>
                        <Route path="/Main" element={<Main/>}/>
                        <Route path="/create-event" element={<CreateEvent/>}/>
                        <Route path="/" element={<Events/>}/>
                    </Routes>
                </EventProvider>
            </BrowserRouter>
        </section>
    );
};

export default Coach;