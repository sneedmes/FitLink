import React, {useState} from 'react';
import {Main} from "./Main/Main";
import style from "./Registration.module.css";
import Header from "./Header/Header";
import LogIn from "./LogIn/LogIn";

const Registration = () => {
    const [tab, setTab] = useState('Main')
    const handleClick=(tab: string)=>{
        setTab(tab)
    }
    return (
        <section className={`${style.registration}`}>
            <div className={`${style.header}`}>
                <Header handleClick={handleClick}/>
            </div>
            <div className={`${style.reg_main}`}>
                {tab === "Main" && <Main/>}
                {tab === "LogIn" && <LogIn/>}
                {tab === "SignUp" && <><h1>Hello</h1></>}
            </div>
        </section>
    );
};

export default Registration;