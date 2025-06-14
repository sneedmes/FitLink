import React from 'react';
import style from "../SignUp.module.css";
import Header from "../../../Header/Header";
import {Button} from "../../../Button/Button";
import {useNavigate} from "react-router-dom";
import Title from "../../../Title/Title";

const CreateTeam = () => {
    const navigate = useNavigate()

    return (
        <>
            <Header position={'reg'}/>
            <Title title={'Регистрация'}/>

            <div className='content'>
                <div className={`${style.signup}`}>
                    <h3>Заполните все поля</h3>
                    <form action="" method="">
                        <label htmlFor="name">Название команды</label>
                        <input type="text" id="name" name="team_name"/>

                        <label htmlFor="addCoach">Добавить тренера/ов (введите имя пользователя)</label>
                        <input className={`${style.add_input}`} type="text" id="addCoach" name="addCoach"/>

                        <label htmlFor="addMember">Добавить участника/ов (введите имя пользователя)</label>
                        <input className={`${style.add_input}`} type="text" id="addMember" name="addMember"/>

                        <label htmlFor="logo" className={style.load_img}>Загрузите логотип (необязательно)</label>
                        <input className={`${style.img_input}`} type="file" id="logo" name="team_logo" alt='logo'/>

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
        </>
    );
};

export default CreateTeam;