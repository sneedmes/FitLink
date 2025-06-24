import React from 'react';
import style from './Main.module.css'
import {Button} from "../../components/Button/Button";
import {useNavigate} from 'react-router-dom';
import Header from "../../components/Header/Header";
import Title from "../../components/Title/Title";

export const Main = () => {
    const navigate = useNavigate()

    const about = [
        {
            title: 'FitLink – спортивная экосистема будущего',
            description: 'Цифровая тренировочная экосистема для команд и спортсменов: инструменты для тренеров, персонализированные планы и улучшенное командное взаимодействие.',
        },
        {
            title: 'Немного о разработчиках',
            description: 'Мы — команда, влюблённая в спорт и технологии. Объединяем опыт в разработке и спорте, чтобы сделать тренировочный процесс удобнее и эффективнее. Сердце проекта — Сусанна Даллакян (@sneedme, dallaqyan0610@gmail.com). Павел - организатор и менеджер, вдохновляет и не даёт нам сойти с пути. И, конечно, наш наставник — Фатеев Владимир Алексеевич, без которого мы бы шли к цели в разы дольше.',
        },
    ]

    return (
        <>
            <Header position={'reg'}/>
            <Title title={'Главная'}/>

            <div className='content'>
                <div className={`${style.info_main}`}>
                    {about.slice(0, 1).map((info) => (
                        <>
                            <h1>{info.title}</h1>
                            <h3>{info.description}</h3>
                        </>
                    ))}
                </div>

                <div className={`${style.info_developers}`}>
                    {about.slice(1, 2).map((info) => (
                        <>
                            <h1>{info.title}</h1>
                            <h3>{info.description}</h3>
                        </>
                    ))}
                </div>

                <div className={`${style.info_coach}`}>
                    <h1>Что получит тренер?</h1>
                    <h3>
                        <ul>
                            <li>Возможность отслеживать и изменять статистику спортсмена</li>
                            <li>Тактическую доску для моделирования</li>
                            <li>Создание тренировок для себя и для команды</li>
                            <li>Создание мероприятий для команды и для спортивного сообщества</li>
                        </ul>
                    </h3>
                </div>

                <div className={`${style.info_athlete}`}>
                    <h1>Что получит спортсмен?</h1>
                    <h3>
                        <ul>
                            <li>Создание индивидуальных тренировок</li>
                            <li>Отслеживание своей статистки и своих достижений</li>
                            <li>Расписание тренировок на неделю</li>
                            <li>Создание мероприятий для команды и для спортивного сообщества</li>
                        </ul>
                    </h3>
                </div>

                <div className={`${style.info_button}`}>
                    <Button position={"main"}
                            title={"Перейти к регистрации"}
                            onClick={() => navigate('/SignUp')}
                            isActive={true}/>
                </div>

            </div>
        </>
    );
};