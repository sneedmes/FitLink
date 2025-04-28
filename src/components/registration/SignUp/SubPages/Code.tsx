import {useNavigate} from "react-router-dom";
import style from "../SignUp.module.css";
import Header from "../../Header/Header";
import {Button} from "../../../Button/Button";
import React from "react";

export const Code = () => {
    const navigate = useNavigate()
    return (
        <section className={`${style.signup}`}>
            <Header/>
            <div className={`${style.title}`}>
                <h1>Регистрация</h1>
            </div>
            <div className={`${style.data_container} ${style.code}`}>
                <div className={`${style.signup_form}`}>
                    <h3>Введите код, отправленный на указанный номер</h3>
                    <form action="" method="" className={`${style.code_form}`}>
                        <input type="text" id="code" name="code"/>
                        <Button position={"signup"}
                                title={'Далее'}
                                onClick={() => navigate('/Role')}
                                isActive={true}/>
                    </form>
                </div>
            </div>
        </section>
    );
};