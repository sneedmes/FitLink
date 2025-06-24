import React from 'react';
import { SingleWorkout } from "../Coach";
import { Button } from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import style from "./Workout.module.css";

type WorkoutType = {
    workouts: SingleWorkout[];
};

const WorkoutsEnterface = ({ workouts }: WorkoutType) => {
    const navigate = useNavigate();

    return (
        <>
            <div className={style.upper}>
                <Button
                    position={'events'}
                    title={'Создать тренировку'}
                    onClick={() => navigate('/CreateWorkout')}
                    isActive={true}
                />
                <Button
                    position={'role'}
                    title={'Расписание'}
                    onClick={() => navigate('/Schedule')}
                    isActive={false}
                />
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
        </>
    );
};

export default WorkoutsEnterface;
