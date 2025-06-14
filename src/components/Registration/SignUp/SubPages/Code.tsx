import {useNavigate} from "react-router-dom";
import style from "../SignUp.module.css";
import Header from "../../../Header/Header";
import {Button} from "../../../Button/Button";
import React from "react";
import Title from "../../../Title/Title";

export const Code = () => {
    const navigate = useNavigate()
    return (
        <>
            <Header position={'reg'}/>
            <Title title={'Регистрация'}/>

            <div className='content'>
                <div className={`${style.code}`}>
                    <h3>Придумайте пароль для входа</h3>
                    <form action="" method="">
                        <input type="password" id="password-1" name="user_password" placeholder='Новый пароль'/>
                        <input type="password" id="password-2" name="user_password" placeholder='Повторите пароль'/>
                        <Button position={"signup"}
                                title={'Далее'}
                                onClick={() => navigate('/Role')}
                                isActive={true}/>
                    </form>
                </div>
            </div>
        </>
    );
};