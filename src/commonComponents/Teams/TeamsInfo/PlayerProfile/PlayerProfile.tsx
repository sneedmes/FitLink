import React from 'react';
import Header from "../../../../components/Header/Header";
import Title from "../../../../components/Title/Title";
import {Player, Team} from "../../../../TypesData";
import {useNavigate, useParams} from "react-router-dom";
import styles from "./PlayerProfile.module.css";
import {AttendanceCalendar} from "./Attendance/AttendanceCalendar";
import {Button} from "../../../../components/Button/Button";

type PlayerProfileProps = {
    position: string,
    teams: Team[];
};

const PlayerProfile: React.FC<PlayerProfileProps> = ({position, teams}) => {
    const {id} = useParams<{ id: string }>();
    const playerId = Number(id);
    const navigate = useNavigate()

    let foundPlayer: Player | undefined;
    let teamId: number | undefined;

    for (const team of teams) {
        const player = team.players.find(p => p.profile.id === playerId);
        if (player) {
            foundPlayer = player;
            teamId = team.id;
            break;
        }
    }

    if (!foundPlayer || teamId === undefined) {
        return <div className={styles.notFound}>Игрок не найден</div>;
    }

    return (
        <>
            {position === 'coach' ?
                <Header position="coach"/>
                : <Header position="player"/>
            }
            <Title title={`${foundPlayer.profile.surname} ${foundPlayer.profile.name}`}/>
            <div className="content">
                <Button position={'edit'} title={'Назад'} onClick={() => navigate(`/team/${teamId}`)} isActive={false}/>
                <div className={styles.card}>
                    <h4><span
                        className={styles.label}>ФИО:</span> {foundPlayer.profile.surname} {foundPlayer.profile.name} {foundPlayer.profile.fatherName}
                    </h4>
                    <h4><span className={styles.label}>Дата рождения:</span> {foundPlayer.profile.dateOfBirth}</h4>
                    <h4><span className={styles.label}>Почта:</span> {foundPlayer.profile.mail}</h4>
                    <h4><span className={styles.label}>Роль:</span> {foundPlayer.role}</h4>
                </div>

                <div className={styles.stat_container}>

                    <div className={styles.stat}>
                        <h2>Посещаемость</h2>
                        <div className={styles.card}>

                            <AttendanceCalendar
                                position={position}
                                player={foundPlayer}
                                teamId={teamId}
                            />
                        </div>
                    </div>

                    <div className={styles.stat}>
                        <h2>Статистика</h2>
                        <div className={styles.card}>
                            <div className={styles.card_stat}>
                                <h4>Голы:<span className={styles.label}> {foundPlayer.statistics.goals}</span></h4>
                                <h4>Голевые передачи:<span
                                    className={styles.label}> {foundPlayer.statistics.assists}</span>
                                </h4>
                                <h4>Красные карточки:<span
                                    className={styles.label}> {foundPlayer.statistics.redCards}</span>
                                </h4>
                                <h4>Желтые карточки:<span
                                    className={styles.label}> {foundPlayer.statistics.yellowCards}</span>
                                </h4>
                                <h4>Пропущенные мячи:<span
                                    className={styles.label}> {foundPlayer.statistics.missedBalls}</span>
                                </h4>
                                <h4>Игры:<span className={styles.label}> {foundPlayer.statistics.games}</span></h4>
                            </div>
                            {position === 'coach' &&
                                <Button position={'delete'} title={'Изменить достижения'}
                                        onClick={() => navigate(`/playerStat/${foundPlayer.profile.id}`)}
                                        isActive={false}/>
                            }
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default PlayerProfile;
