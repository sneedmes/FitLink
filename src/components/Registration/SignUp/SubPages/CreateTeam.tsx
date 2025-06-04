import React from 'react';
import style from "../SignUp.module.css";
import Header from "../../../Header/Header";
import {Button} from "../../../Button/Button";
import {useNavigate} from "react-router-dom";

const CreateTeam = () => {
    const navigate = useNavigate()

    return (
        <section className={`${style.signup}`}>
            <Header position={'reg'}/>
            <div className={`${style.title}`}>
                <h1>Регистрация</h1>
            </div>
            <div className={`${style.data_container}`}>
                <div className={`${style.signup_form}`}>
                    <h3>Заполните все поля</h3>
                    <form action="" method="">
                        <label htmlFor="name">Название команды</label>
                        <input type="text" id="name" name="team_name"/>

                        <label htmlFor="addCoach">Добавить тренера/ов (введите имя пользователя)</label>
                        <input className={`${style.add_input}`} type="text" id="addCoach" name="addCoach"/>

                        <label htmlFor="addMember">Добавить участника/ов (введите имя пользователя)</label>
                        <input className={`${style.add_input}`} type="text" id="addMember" name="addMember"/>

                        <label htmlFor="logo">Загрузите логотип (необязательно)</label>
                        <input className={`${style.img_input}`} type="image" id="logo" name="team_logo" alt='logo'/>

                        <label htmlFor="sport">Выберите вид спорта</label>
                        <input className={`${style.sport_input}`} type="text" placeholder="Search"/>
                        <ul className={`${style.search_list}`} id="list">
                            <li className="list-group-item">Команда 1</li>
                        </ul>

                        <Button position={"signup"}
                                title={'Далее'}
                                onClick={() => navigate('/')}
                                isActive={true}/>

                    </form>
                </div>
            </div>
        </section>
    );
};

export default CreateTeam;