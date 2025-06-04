import {Main} from "./Main/Main";
import Header from "../Header/Header";
import {SignUp} from "./SignUp/SignUp";
import {Code} from "./SignUp/SubPages/Code";
import {Role} from "./SignUp/SubPages/Role";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {FindTeam} from "./SignUp/SubPages/FindTeam";
import AskCreateTeam from "./SignUp/SubPages/AskCreateTeam";
import CreateTeam from "./SignUp/SubPages/CreateTeam";
import LogIn from "./LogIn/LogIn";

const Registration = () => {
    return (
        <section className='registration'>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="Header" element={<Header position={'reg'}/>}/>
                    <Route path="SignUp" element={<SignUp/>}/>
                    <Route path="LogIn" element={<LogIn/>}/>
                    <Route path="Code" element={<Code/>}/>
                    <Route path="Role" element={<Role/>}/>
                    <Route path="FindTeam" element={<FindTeam/>}/>
                    <Route path="AskCreateTeam" element={<AskCreateTeam/>}/>
                    <Route path="CreateTeam" element={<CreateTeam/>}/>
                </Routes>
            </BrowserRouter>
        </section>
    );
};

export default Registration;