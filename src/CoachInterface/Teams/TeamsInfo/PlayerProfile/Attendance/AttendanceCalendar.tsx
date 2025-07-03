import React from 'react';
import { getDaysInMonth, format } from 'date-fns';
import clsx from 'clsx';
import styles from './AttendanceCalendar.module.css';
import { ru } from 'date-fns/locale';
import { Player } from "../../../../Coach";

type Props = {
    player: Player;
    teamId: number;
    onAttendanceChange: (
        teamId: number,
        playerId: number,
        updatedAttendance: { [date: string]: boolean }
    ) => void;
};

export const AttendanceCalendar: React.FC<Props> = ({
                                                        player,
                                                        teamId,
                                                        onAttendanceChange
                                                    }) => {
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth();
    const daysInMonth = getDaysInMonth(new Date(currentYear, currentMonth));

    const rawMonthName = format(new Date(currentYear, currentMonth), 'LLLL', { locale: ru });
    const monthName = rawMonthName.charAt(0).toUpperCase() + rawMonthName.slice(1);

    const handleDateClick = (day: number) => {
        const dateStr = format(new Date(currentYear, currentMonth, day), 'yyyy-MM-dd');
        const newAttendance = {
            ...player.attendance,
            [dateStr]: !player.attendance[dateStr],
        };
        onAttendanceChange(teamId, player.profile.id, newAttendance);
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
                            className={clsx(styles.day, attended && styles.attended)}
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
