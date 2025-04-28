import {useNavigate} from "react-router-dom";
import React from "react";
import style from "../SignUp.module.css";
import Header from "../../Header/Header";
import {Button} from "../../../Button/Button";

export const FindTeam = () => {
    const navigate = useNavigate()

    return (
        <section className={`${style.signup}`}>
            <Header/>
            <div className={`${style.title}`}>
                <h1>Регистрация</h1>
            </div>
            <div className={`${style.data_container} ${style.find_team}`}>
                <div className={`${style.find_team_form}`}>
                    <h3>Введите название команды</h3>
                    <div className={`${style.search_container}`}>
                        <input className={`${style.search_input}`} type="text" placeholder="Search"/>
                        <ul className={`${style.search_list}`} id="list">
                            <li className="list-group-item">Команда 1</li>
                        </ul>
                        <Button position={"team"}
                                title={'Далее'}
                                onClick={() => navigate('/')}
                                isActive={true}/>
                    </div>
                </div>
            </div>
        </section>
    );
};