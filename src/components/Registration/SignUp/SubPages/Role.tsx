import {useNavigate} from "react-router-dom";
import React, {useState} from "react";
import style from "../SignUp.module.css";
import Header from "../../../Header/Header";
import {Button} from "../../../Button/Button";
import Title from "../../../Title/Title";

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
    const checkAnswers = (role: string, hasTeam: string) => {
        if ((role === 'Тренер' || role === 'Спортсмен') && hasTeam === 'Да') {
            return <>
                <Button position={"signup"}
                        title={'Далее'}
                        onClick={() => navigate('/FindTeam')}
                        isActive={true}/>
            </>
        } else if (role === 'Тренер' && hasTeam === 'Нет') {
            return <>
                <Button position={"signup"}
                        title={'Далее'}
                        onClick={() => navigate('/AskCreateTeam')}
                        isActive={true}/>
            </>
        } else {
            return <>
                <Button position={"signup"}
                        title={'Далее'}
                        onClick={() => navigate('/')}
                        isActive={true}/>
            </>
        }
    }

    return (
        <>
            <Header position={'reg'}/>
            <Title title={'Регистрация'}/>

            <div className='content'>
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
                    {checkAnswers(role, hasTeam)}
                </div>
            </div>
        </>
    );
};