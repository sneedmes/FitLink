import {Main} from "./Main/Main";
import style from "./Registration.module.css";
import Header from "./Header/Header";
import LogIn from "./LogIn/LogIn";
import {SignUp, Code, Role} from "./SignUp/SignUp";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Registration = () => {
    return (
        <section className={`${style.registration}`}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="Main" element={<Header/>}/>
                    <Route path="SignUp" element={<SignUp/>}/>
                    <Route path="Code" element={<Code/>}/>
                    <Route path="Role" element={<Role/>}/>
                </Routes>
            </BrowserRouter>
        </section>
    );
};

export default Registration;