import style from "./Header.module.css"
import {Button} from "../Button/Button";
import {useNavigate} from 'react-router-dom';
import React from "react";
import logo from '../../assets/logo.png';
import {useAppContext} from "../../Context";
import {initialTeams} from "../../TypesData";

type HeaderProps = {
    position: string
}

const Header = ({position}: HeaderProps) => {
    const navigate = useNavigate()
    const { profile } = useAppContext();

    const player = initialTeams
        .flatMap(team => team.players)
        .find(p => p.profile.name === profile.name && p.profile.surname === profile.surname);
    const playerId = player?.profile.id
    console.log(playerId)

    return (
        <header className='header'>
            <section className={`${style.container}`}>
                <div>
                    <img src={logo} alt=""/>
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
                                        onClick={() => navigate('/')}
                                        isActive={false}/>
                                <Button position={'header'}
                                        title={"Доска"}
                                        onClick={() => navigate('/TacticalBoard')}
                                        isActive={false}/>
                                <Button position={'header'}
                                        title={"Команда"}
                                        onClick={() => navigate('/Teams')}
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
                        : position === 'player' &&
                            <div className={`${style.nav_coach}`}>
                                <Button position={'header'}
                                        title={"События"}
                                        onClick={() => navigate('/')}
                                        isActive={false}/>
                                <Button position={'header'}
                                        title={"Статистика"}
                                        onClick={() => navigate(`/PlayerStat/${playerId}`)}
                                        isActive={false}/>
                                <Button position={'header'}
                                        title={"Команда"}
                                        onClick={() => navigate('/Teams')}
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
                }
            </section>
        </header>
    );
};

export default Header;