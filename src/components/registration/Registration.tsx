import {Main} from "./Main/Main";
import style from "./Registration.module.css";
import Header from "./Header/Header";
import {SignUp} from "./SignUp/SignUp";
import {Code} from "./SignUp/SubPages/Code";
import {Role} from "./SignUp/SubPages/Role";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {FindTeam} from "./SignUp/SubPages/FindTeam";

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
                    <Route path="FindTeam" element={<FindTeam/>}/>
                </Routes>
            </BrowserRouter>
        </section>
    );
};

export default Registration;