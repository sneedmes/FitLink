import React, {useState} from 'react';
import {SingleWorkout} from "../../TypesData";
import {Button} from "../../components/Button/Button";
import {useNavigate} from "react-router-dom";
import style from "./Workout.module.css";
import {ScheduleModal} from "./ScheduleModal/ScheduleModal";
import Header from "../../components/Header/Header";
import Title from "../../components/Title/Title";

type WorkoutType = {
    position: string,
    workouts: SingleWorkout[];
};

const Workout = ({position, workouts}: WorkoutType) => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false)

    return (
        <>
            {position === 'coach' ?
                <Header position="coach" />
                : <Header position="player" />
            }
            <Title title={'Тренировки'}/>
            <div className='content'>
                <div className={style.upper}>
                    {position === 'coach' &&
                        <Button
                            position={'events'}
                            title={'Создать тренировку'}
                            onClick={() => navigate('/CreateWorkout')}
                            isActive={true}
                        />
                    }
                    <Button
                        position={'role'}
                        title={'Расписание'}
                        onClick={() => setOpen(true)}
                        isActive={false}
                    />
                    <ScheduleModal isOpen={open} onClose={() => setOpen(false)}/>
                </div>

                <div className={style.workouts_container}>
                    {workouts.map((w) => (
                        <div key={w.id} className={style.workout}>
                            <div>
                                <h1>{w.title}</h1>
                                <p>{w.privat ? "Приватная тренировка" : "Общая тренировка"}</p>
                            </div>

                            <div className={style.edit}>
                                <Button
                                    title="Перейти"
                                    onClick={() => navigate(`/workout/${w.id}`)}
                                    position="edit"
                                    isActive={true}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Workout;
