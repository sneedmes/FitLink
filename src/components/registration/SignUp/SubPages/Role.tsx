import {useNavigate} from "react-router-dom";
import React, {useState} from "react";
import style from "../SignUp.module.css";
import Header from "../../Header/Header";
import {Button} from "../../../Button/Button";

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
                    <Button position={"signup"}
                            title={'Далее'}
                            onClick={() => navigate('/FindTeam')}
                            isActive={true}/>
                </div>
            </div>
        </section>
    );
};