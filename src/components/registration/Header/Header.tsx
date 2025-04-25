import style from "./Header.module.css"
import {Button} from "../../Button/Button";
import { useNavigate } from 'react-router-dom';
import React from "react";

const Header = () => {
    const navigate = useNavigate()

    return (
        <header>
            <section className={`${style.container}`}>
                <div>
                    <img src="logo.png" alt=""/>
                </div>
                <div className={`${style.nav}`}>
                    <span><Button position={'header'} title={"Главная"} onClick={() => navigate('/')} isActive={false}/></span>
                    <Button position={'header'} title={"Войти"} onClick={() => navigate('/LogIn')} isActive={false}/>
                    <Button position={'header'} title={"Регистрация"} onClick={() => navigate('/SignUp')} isActive={false}/>
                </div>
            </section>
        </header>
    );
};

export default Header;