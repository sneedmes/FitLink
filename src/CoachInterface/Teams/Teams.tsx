import React from 'react';
import Header from "../../components/Header/Header";
import Title from "../../components/Title/Title";
import TeamsEnterface from "./TeamsInfo/TeamsEnterface";
import {Team} from "../Coach";

const Teams = ({ teams }: { teams: Team[] }) => {
    return (
        <>
            <Header position="coach" />
            <Title title={'Команда'} />

            <div className='content'>
                <TeamsEnterface teams={teams}/>
            </div>
        </>
    );
};

export default Teams;