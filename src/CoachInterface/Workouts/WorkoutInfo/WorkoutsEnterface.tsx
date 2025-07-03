import React, {useState} from 'react';
import { SingleWorkout } from "../../Coach";
import { Button } from "../../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import style from "../Workout.module.css";
import {ScheduleModal} from "../ScheduleModal/ScheduleModal";

type WorkoutType = {
    workouts: SingleWorkout[];
};

const WorkoutsEnterface = ({ workouts }: WorkoutType) => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false)

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
                    onClick={() => setOpen(true)}
                    isActive={false}
                />
                <ScheduleModal isOpen={open} onClose={() => setOpen(false)} />
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
