import React from 'react';
import style from './SignUp.module.css'
import Header from "../Header/Header";
import {Button} from "../../Button/Button";
import {useNavigate} from "react-router-dom";

export const SignUp = () => {
    const navigate = useNavigate()
    return (
        <section className={`${style.signup}`}>
            <Header/>
            <div className={`${style.title}`}>
                <h1>Регистрация</h1>
            </div>
            <div className={`${style.data_container}`}>
                <div className={`${style.signup_form}`}>
                    <h3>Введите свои данные</h3>
                    <form action="" method="">
                        <label htmlFor="name">Имя</label>
                        <input type="text" id="name" name="user_name"/>

                        <label htmlFor="name">Фамилия</label>
                        <input type="text" id="surname" name="user_surname"/>

                        <label htmlFor="name">Отчество (необязательно)</label>
                        <input type="text" id="fathername" name="user_fathername"/>

                        <label htmlFor="name">Дата рождения</label>
                        <input type="date" id="dateOfBirth" name="user_dateOfBirth"/>

                        <div className={`${style.signup_form_span}`}>
                            <div className={`${style.signup_form_input}`}>
                                <label htmlFor="name">Почта</label>
                                <input type="email" id="email" name="user_email"/>
                            </div>

                            <Button position={"signup"}
                                    title={'Далее'}
                                    onClick={() => navigate('/Code')}
                                    isActive={true}/>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};