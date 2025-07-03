import React from 'react';
import Header from "../../components/Header/Header";
import Title from "../../components/Title/Title";
import WorkoutsEnterface from "./WorkoutInfo/WorkoutsEnterface";
import { SingleWorkout } from '../Coach';

const Workout = ({ workouts }: { workouts: SingleWorkout[] }) => {
    return (
        <>
            <Header position="coach" />
            <Title title={'Тренировки'}/>
            <div className='content'>
                <WorkoutsEnterface workouts={workouts}/>
            </div>
        </>
    );
};

export default Workout;