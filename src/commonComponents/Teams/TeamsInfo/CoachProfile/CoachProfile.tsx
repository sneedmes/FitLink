import React from 'react';
import Header from "../../../../components/Header/Header";
import Title from "../../../../components/Title/Title";
import {Coach, Team} from "../../../../TypesData";
import {useNavigate, useParams} from "react-router-dom";
import styles from "./CoachProfile.module.css";
import {Button} from "../../../../components/Button/Button";

type CoachProfileProps = {
    position: string,
    teams: Team[];
};

const CoachProfile: React.FC<CoachProfileProps> = ({position, teams}) => {
    const {id} = useParams<{ id: string }>();
    const playerId = Number(id);
    const navigate = useNavigate()

    let foundCoach: Coach | undefined;
    let teamId: number | undefined;

    for (const team of teams) {
        const coach = team.coaches.find(c => c.profile.id === playerId);
        if (coach) {
            foundCoach = coach;
            teamId = team.id;
            break;
        }
    }

    if (!foundCoach || teamId === undefined) {
        return <div className={styles.notFound}>Тренер не найден</div>;
    }

    return (
        <>
            {position === 'coach' ?
                <Header position="coach" />
                : <Header position="player" />
            }
            <Title title={`${foundCoach.profile.surname} ${foundCoach.profile.name}`}/>
            <div className="content">
                <Button position={'edit'} title={'Назад'} onClick={()=>navigate(`/team/${teamId}`)} isActive={false}/>
                <div className={styles.card}>
                        <p><span
                            className={styles.label}>ФИО:</span> {foundCoach.profile.surname} {foundCoach.profile.name} {foundCoach.profile.fatherName}
                        </p>
                        <p><span className={styles.label}>Дата рождения:</span> {foundCoach.profile.dateOfBirth}</p>
                        <p><span className={styles.label}>Почта:</span> {foundCoach.profile.mail}</p>
                        <p><span className={styles.label}>Роль:</span> {foundCoach.role === 'Создатель' ? foundCoach.role + ', тренер' : foundCoach.role}</p>
                </div>
            </div>
        </>
    );
};

export default CoachProfile;
