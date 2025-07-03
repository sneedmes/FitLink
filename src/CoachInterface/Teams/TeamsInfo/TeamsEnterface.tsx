import React, {useState} from 'react';
import style from "../Teams.module.css";
import {Button} from "../../../components/Button/Button";
import {useNavigate} from "react-router-dom";
import {Team} from "../../Coach";

type TeamType = {
    teams: Team[];
};


const TeamsEnterface = ({ teams }: TeamType) => {
    const navigate = useNavigate()

    return (
        <div>
            <div className={style.teams_container}>
                {teams.map((t) => (
                    <div key={t.id} className={style.team}>
                        <div>
                            <h1>{t.name}</h1>
                        </div>

                        <div className={style.goto}>
                            <Button
                                title="Перейти"
                                onClick={() => navigate(`/team/${t.id}`)}
                                position="edit"
                                isActive={true}
                            />
                        </div>
                    </div>
                ))}
                <Button
                    position={'role'}
                    title={'Создать команду'}
                    onClick={() => navigate('/CreateTeamIn')}
                    isActive={false}
                />
            </div>

        </div>
    );
};

export default TeamsEnterface;