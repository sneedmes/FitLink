import React from 'react';
import style from './LogIn.module.css'
import {Button} from "../../Button/Button";
import Header from "../../Header/Header";
import {useNavigate} from "react-router-dom";
import Title from "../../Title/Title";

const LogIn = () => {
    const navigate = useNavigate()
    return (
        <>
            <Header position={'reg'}/>
            <Title title={'Авторизация'}/>

            <div className='content'>
                <div className={`${style.login}`}>
                    <h3>Введите почту и пароль</h3>
                    <form action="" method="">
                        <div className={`${style.form_input}`}>
                            <label htmlFor="name">Почта</label>
                            <input type="email" id="email" name="user_email"/>

                            <label htmlFor="name">Пароль</label>
                            <input type="password" id="password" name="user_password"/>
                        </div>

                        <Button position={"login"}
                                title={'Войти'}
                                onClick={() => navigate('/')}
                                isActive={true}/>
                    </form>
                </div>
            </div>
        </>
    );
};

export default LogIn;