import React from 'react';
import { getDaysInMonth, format } from 'date-fns';
import clsx from 'clsx';
import styles from './AttendanceCalendar.module.css';
import { ru } from 'date-fns/locale';
import { Player } from "../../../../../TypesData";
import {useAppContext} from "../../../../../Context";

type Props = {
    position: string,
    player: Player;
    teamId: number;
};

export const AttendanceCalendar: React.FC<Props> = ({
                                                        position,
                                                        player,
                                                        teamId,
                                                    }) => {
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth();
    const daysInMonth = getDaysInMonth(new Date(currentYear, currentMonth));

    const rawMonthName = format(new Date(currentYear, currentMonth), 'LLLL', { locale: ru });
    const monthName = rawMonthName.charAt(0).toUpperCase() + rawMonthName.slice(1);
    const { ...data } = useAppContext();

    const handleAttendanceChange = (teamId: number, playerId: number, updatedAttendance: { [date: string]: boolean }) => {
        data.setTeams(prev =>
            prev.map(team => {
                if (team.id !== teamId) return team;

                return {
                    ...team,
                    players: team.players.map(player =>
                        player.profile.id === playerId
                            ? { ...player, attendance: updatedAttendance }
                            : player
                    ),
                };
            })
        );
    };

    const handleDateClick = (day: number) => {
        if (position === 'player') return;
        const dateStr = format(new Date(currentYear, currentMonth, day), 'yyyy-MM-dd');
        const newAttendance = {
            ...player.attendance,
            [dateStr]: !player.attendance[dateStr],
        };
        handleAttendanceChange(teamId, player.profile.id, newAttendance);
    };


    return (
        <>
            <h5 className={styles.monthName}>{monthName} {currentYear}</h5>
            <div className={styles.calendar}>
                {Array.from({ length: daysInMonth }, (_, i) => {
                    const day = i + 1;
                    const dateStr = format(new Date(currentYear, currentMonth, day), 'yyyy-MM-dd');
                    const attended = player.attendance[dateStr] ?? false;

                    return (
                        <div
                            key={day}
                            className={clsx(
                                styles.day,
                                attended && styles.attended,
                                position === 'player' && styles.disabledDay
                            )}
                            onClick={() => handleDateClick(day)}
                        >
                            {day}
                        </div>
                    );
                })}
            </div>
        </>
    );
};
