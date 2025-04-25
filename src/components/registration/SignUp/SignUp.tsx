import React, {useState} from 'react';
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

export const Role = () => {
    const navigate = useNavigate()
    const [role, setRole] = useState('Тренер')
    const changeRole = (role: string) => {
        setRole(role)
    }
    const [hasTeam, setHasTeam] = useState('Да')
    const changeHasTeam = (hasTeam: string) => {
        setHasTeam(hasTeam)
    }
    return (
        <section className={`${style.signup}`}>
            <Header/>
            <div className={`${style.title}`}>
                <h1>Регистрация</h1>
            </div>
            <div className={`${style.data_container} ${style.role}`}>
                <div className={`${style.role_form}`}>
                    <div className={`${style.changeData}`}>
                        <h3>Кто вы?</h3>
                        <Button position={"role"}
                                title={'Тренер'}
                                onClick={() => changeRole('Тренер')}
                                isActive={role === 'Тренер'}/>
                        <Button position={"role"}
                                title={'Спортсмен'}
                                onClick={() => changeRole('Спортсмен')}
                                isActive={role === 'Спортсмен'}/>
                    </div>
                    <div className={`${style.changeData}`}>
                        <h3>Есть ли у вас команда, созданная внутри приложения?</h3>
                        <Button position={"role"}
                                title={'Да'}
                                onClick={() => changeHasTeam('Да')}
                                isActive={hasTeam === 'Да'}/>
                        <Button position={"role"}
                                title={'Нет'}
                                onClick={() => changeHasTeam('Нет')}
                                isActive={hasTeam === 'Нет'}/>
                    </div>
                    <Button position={"signup"}
                            title={'Далее'}
                            onClick={() => navigate('/')}
                            isActive={true}/>
                </div>
            </div>
        </section>
    );
};