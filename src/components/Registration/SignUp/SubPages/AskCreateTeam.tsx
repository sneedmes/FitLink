import React, {useState} from 'react';
import style from "../SignUp.module.css";
import Header from "../../../Header/Header";
import {Button} from "../../../Button/Button";
import {useNavigate} from "react-router-dom";
import Title from "../../../Title/Title";

const AskCreateTeam = () => {
    const navigate = useNavigate()
    const [answer, setAnswer] = useState('Да')
    const changeAnswer = (answer: string) => {
        setAnswer(answer)
    }
    return (
        <>
            <Header position={'reg'}/>
            <Title title={'Регистрация'}/>

            <div className='content'>
                <div className={`${style.act}`}>
                    <div className={`${style.act_form}`}>
                        <div className={`${style.changeData}`}>
                            <h3>Хотите создать команду?</h3>
                            <Button position={"role"}
                                    title={'Да'}
                                    onClick={() => changeAnswer('Да')}
                                    isActive={answer === 'Да'}/>
                            <Button position={"role"}
                                    title={'Нет'}
                                    onClick={() => changeAnswer('Нет')}
                                    isActive={answer === 'Нет'}/>
                        </div>
                        {answer === 'Да' ?
                            <Button position={"signup"}
                                    title={'Далее'}
                                    onClick={() => navigate('/CreateTeam')}
                                    isActive={true}/>
                            : <Button position={"signup"}
                                      title={'Далее'}
                                      onClick={() => navigate('/')}
                                      isActive={true}/>
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default AskCreateTeam;