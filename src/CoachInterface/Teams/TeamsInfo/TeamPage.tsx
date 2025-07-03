import React from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {Team} from '../../Coach';
import styles from '../Teams.module.css';
import Header from "../../../components/Header/Header";
import Title from "../../../components/Title/Title";
import PlayerProfile from "./PlayerProfile/PlayerProfile";
import {Button} from "../../../components/Button/Button";
import profile from "../../Profile/Profile";

type TeamPageProps = {
    teams: Team[];
    handleAttendanceChange: (
        teamId: number,
        playerId: number,
        updatedAttendance: { [date: string]: boolean }
    ) => void;
};

const TeamPage: React.FC<TeamPageProps> = ({teams, handleAttendanceChange}) => {
    const {id} = useParams();
    const teamId = Number(id);
    const team = teams.find((t) => t.id === teamId);
    const navigate = useNavigate()

    if (!team) return <div className={styles.notFound}>Команда не найдена</div>;

    return (
        <>
            <Header position="coach"/>
            <Title title={team.name}/>
            <div className="content">
                <div className={styles.upper}>
                    <Button position={'edit'} title={'Назад'} onClick={() => navigate(`/Teams`)} isActive={false}/>
                    <h2>Состав команды</h2>
                </div>
                <div className={styles.structure}>
                    <div className={styles.coaches}>
                        <h4>Тренеры</h4>
                        {team.coaches.map((coach) => (
                            <div className={styles.card} key={coach.profile.id}>
                                <Button position={'player'}
                                        title={coach.profile.surname + " " + coach.profile.name}
                                        onClick={() => navigate(`/coach/${coach.profile.id}`)}
                                        isActive={false}/>
                                <p className={styles.label}> {coach.role.slice(0, 2)}</p>
                            </div>
                        ))}
                    </div>

                    <div className={styles.players}>
                        <h4>Спортсмены</h4>
                        {team.players.map((player) => (
                            <div className={styles.card} key={player.profile.id}>
                                <Button position={'player'}
                                        title={player.profile.surname + " " + player.profile.name}
                                        onClick={() => navigate(`/player/${player.profile.id}`)}
                                        isActive={false}/>
                                <p className={styles.label}> {player.role.slice(0, 2)}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default TeamPage;
