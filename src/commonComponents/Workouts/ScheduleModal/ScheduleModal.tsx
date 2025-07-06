import React, { useState, useEffect } from "react"
import styles from "./ScheduleModal.module.css"

interface DayData {
    label: string
    date: string
    time: string
}

interface Props {
    isOpen: boolean
    onClose: () => void
}

const daysOfWeek = ["В", "П", "В", "С", "Ч", "П", "С"] // начиная с воскресенья

export const ScheduleModal: React.FC<Props> = ({ isOpen, onClose }) => {
    const [schedule, setSchedule] = useState<DayData[]>([])

    useEffect(() => {
        const today = new Date()
        const next7Days: DayData[] = Array.from({ length: 7 }, (_, i) => {
            const date = new Date(today)
            date.setDate(today.getDate() + i)
            const label = daysOfWeek[date.getDay()]
            const formattedDate = date.toLocaleDateString("ru-RU", { day: "2-digit", month: "2-digit" })
            return { label, date: formattedDate, time: "" }
        })
        setSchedule(next7Days)
    }, [])

    const handleTimeChange = (index: number, newTime: string) => {
        const updated = [...schedule]
        updated[index].time = newTime
        setSchedule(updated)
    }

    if (!isOpen) return null

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <button className={styles.backButton} onClick={onClose}>←</button>
                <h2 className={styles.title}>Расписание на неделю</h2>
                <div className={styles.grid}>
                    {schedule.map((day, index) => (
                        <div key={index} className={styles.column}>
                            <div className={styles.dayLabel}>{day.label}</div>
                            <div className={styles.date}>{day.date}</div>
                            <input
                                type="time"
                                value={day.time}
                                onChange={(e) => handleTimeChange(index, e.target.value)}
                                className={styles.timeInput}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
