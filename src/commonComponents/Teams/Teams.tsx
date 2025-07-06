import React from 'react';
import Header from "../../components/Header/Header";
import Title from "../../components/Title/Title";
import {Team} from "../../TypesData";
import style from "./Teams.module.css";
import {Button} from "../../components/Button/Button";
import {useNavigate} from "react-router-dom";

type TeamsProps = {
    position: string,
    teams: Team[]
}

const Teams = ({ position, teams }: TeamsProps) => {
    const navigate = useNavigate()
    return (
        <>
            {position === 'coach' ?
                <Header position="coach" />
                : <Header position="player" />
            }
            <Title title={'Команда'} />

            <div className='content'>
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
                        {position === 'coach' && <Button
                            position={'role'}
                            title={'Создать команду'}
                            onClick={() => navigate('/CreateTeamIn')}
                            isActive={false}
                        />}
                    </div>

                </div>
            </div>
        </>
    );
};

export default Teams;