import React from 'react';
import style from './LogIn.module.css'
import {Button} from "../../Button/Button";
import Header from "../../Header/Header";
import {useNavigate} from "react-router-dom";

const LogIn = () => {
    const navigate = useNavigate()
    return (
        <section className={`${style.login}`}>
            <Header position={'reg'}/>
            <div className={`${style.title}`}>
                <h1>Авторизация</h1>
            </div>
            <div className={`${style.data_container}`}>
                <div className={`${style.login_form}`}>
                    <h3>Введите почту и пароль</h3>
                    <form action="" method="">
                        <div className={`${style.login_form_input}`}>
                            <label htmlFor="name">Почта</label>
                            <input type="email" id="email" name="user_email"/>

                            <label htmlFor="name">Пароль</label>
                            <input type="password" id="password" name="user_password"/>
                        </div>

                        <Button position={"login"}
                                title={'Далее'}
                                onClick={() => navigate('/')}
                                isActive={true}/>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default LogIn;