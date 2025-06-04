import style from "./Header.module.css"
import {Button} from "../Button/Button";
import {useNavigate} from 'react-router-dom';
import React from "react";

type HeaderProps = {
    position: string
}

const Header = ({position}: HeaderProps) => {
    const navigate = useNavigate()

    return (
        <header>
            <section className={`${style.container}`}>
                <div>
                    <img src="logo.png" alt=""/>
                </div>
                {position === 'reg' ?
                    <div className={`${style.nav_reg}`}>
                        <span>
                            <Button position={'header'}
                                    title={"Главная"}
                                    onClick={() => navigate('/')}
                                    isActive={false}/>
                        </span>
                        <Button position={'header'}
                                title={"Войти"}
                                onClick={() => navigate('/LogIn')}
                                isActive={false}/>
                        <Button position={'header'}
                                title={"Регистрация"}
                                onClick={() => navigate('/SignUp')}
                                isActive={false}/>
                    </div>
                    : position === 'coach' ?
                        <div className={`${style.nav_coach}`}>
                                <Button position={'header'}
                                        title={"События"}
                                        onClick={() => navigate('/Events')}
                                        isActive={false}/>
                                <Button position={'header'}
                                        title={"Доска"}
                                        onClick={() => navigate('/Board')}
                                        isActive={false}/>
                                <Button position={'header'}
                                        title={"Игроки"}
                                        onClick={() => navigate('/Players')}
                                        isActive={false}/>
                                <Button position={'header'}
                                        title={"Тренировки"}
                                        onClick={() => navigate('/Workouts')}
                                        isActive={false}/>
                                <Button position={'header'}
                                        title={"Профиль"}
                                        onClick={() => navigate('/Profile')}
                                        isActive={false}/>
                                <span>
                                    <Button position={'header'}
                                            title={"Выйти"}
                                            onClick={() => navigate('/Main')}
                                            isActive={false}/>
                                </span>
                        </div>
                        : <></>
                }

            </section>
        </header>
    );
};

export default Header;