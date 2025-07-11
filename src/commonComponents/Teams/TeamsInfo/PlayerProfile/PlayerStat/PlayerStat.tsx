import React, {useState} from 'react';
import {Player, StatKey, Team} from "../../../../../TypesData";
import Header from "../../../../../components/Header/Header";
import Title from "../../../../../components/Title/Title";
import {Button} from "../../../../../components/Button/Button";
import styles from "../PlayerProfile.module.css";
import {useNavigate, useParams} from "react-router-dom";
import StatCard from './StatCard';
import Modal from '../StatModal/StatModal'; // поправь путь, если нужно
import {useAppContext} from "../../../../../Context";
import {AttendanceCalendar} from "../Attendance/AttendanceCalendar";

type PlayerStatProps = {
    position: string,
    teams: Team[];
};


const PlayerStat = ({position, teams}: PlayerStatProps) => {
    const {id} = useParams<{ id: string }>();
    const playerId = Number(id);
    const navigate = useNavigate();

    const {stats, setStats} = useAppContext();

    const [modalOpen, setModalOpen] = useState(false);
    const [modalMode, setModalMode] = useState<'add' | 'edit'>('add');
    const [currentKey, setCurrentKey] = useState<StatKey | null>(null);
    const [currentIndex, setCurrentIndex] = useState<number | null>(null);
    const [formLabel, setFormLabel] = useState('');
    const [formValue, setFormValue] = useState<number | string>('');

    // Теперь поиск игрока, ПОСЛЕ хуков
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

    // Открыть модалку на добавление
    const openAddModal = (key: StatKey) => {
        setModalMode('add');
        setCurrentKey(key);
        setCurrentIndex(null);
        setFormLabel('');
        setFormValue('');
        setModalOpen(true);
    };

    // Открыть модалку на редактирование
    const openEditModal = (key: StatKey, index: number) => {
        setModalMode('edit');
        setCurrentKey(key);
        setCurrentIndex(index);
        const item = stats[key][index];
        setFormLabel(item.label);
        setFormValue(item.value);
        setModalOpen(true);
    };

    // Сохранить данные из модалки
    const saveModal = () => {
        if (!currentKey) return;
        if (!formLabel.trim()) {
            alert('Название не может быть пустым');
            return;
        }
        const valueToSave = isNaN(Number(formValue)) ? formValue : Number(formValue);

        if (modalMode === 'add') {
            setStats((prev: any) => ({
                ...prev,
                [currentKey]: [...prev[currentKey], {label: formLabel, value: valueToSave}]
            }));
        } else if (modalMode === 'edit' && currentIndex !== null) {
            const newItems = [...stats[currentKey]];
            newItems[currentIndex] = {label: formLabel, value: valueToSave};
            setStats((prev: any) => ({
                ...prev,
                [currentKey]: newItems
            }));
        }
        setModalOpen(false);
    };

    // const changeCardCount = (index: number, delta: number) => {
    //     setStats((prev: any) => {
    //         const newCards = [...prev.cards];
    //         newCards[index] = {
    //             ...newCards[index],
    //             value: Math.max(0, Number(newCards[index].value) + delta), // не меньше 0
    //         };
    //         return {...prev, cards: newCards};
    //     });
    // };

    // Удаление записи
    const handleDeleteStat = (key: StatKey, index: number) => {
        if (window.confirm('Удалить запись?')) {
            setStats((prev: any) => ({
                ...prev,
                [key]: prev[key].filter((_: any, i: any) => i !== index)
            }));
        }
    };

    const incrementCard = (index: number) => {
        setStats((prev: any) => {
            const updated = [...prev.cards];
            updated[index].value = Number(updated[index].value) + 1;
            return {...prev, cards: updated};
        });
    };

    const decrementCard = (index: number) => {
        setStats((prev: any) => {
            const updated = [...prev.cards];
            updated[index].value = Math.max(0, Number(updated[index].value) - 1); // не уходим в минус
            return {...prev, cards: updated};
        });
    };

    return (
        <>
            {position === 'coach' ?
                <Header position="coach"/>
                : <Header position="player"/>
            }
            <Title title={`${foundPlayer.profile.surname} ${foundPlayer.profile.name}`}/>
            <div className="content">
                {position === 'coach' &&
                    <>
                        <Button position={'edit'} title={'Назад'} onClick={() => navigate(`/player/${playerId}`)}
                                isActive={false}/>
                        <div className={styles.card}>
                            <h4><span
                                className={styles.label}>ФИО:</span> {foundPlayer.profile.surname} {foundPlayer.profile.name} {foundPlayer.profile.fatherName}
                            </h4>
                            <h4><span className={styles.label}>Дата рождения:</span> {foundPlayer.profile.dateOfBirth}
                            </h4>
                            <h4><span className={styles.label}>Почта:</span> {foundPlayer.profile.mail}</h4>
                            <h4><span className={styles.label}>Роль:</span> {foundPlayer.role}</h4>
                        </div>
                    </>
                }
                <h2>Статистика</h2>
                <div className={styles.statCardsContainer}>
                    <StatCard
                        position={position}
                        title="Голы"
                        total={stats.goals.reduce((sum: any, g: any) => sum + Number(g.value), 0)}
                        items={stats.goals}
                        onAdd={() => openAddModal('goals')}
                        onEdit={(i) => openEditModal('goals', i)}
                        onDelete={(i) => handleDeleteStat('goals', i)}
                        addLabel="Добавить гол"
                    />
                    <StatCard
                        position={position}
                        title="Голевые передачи"
                        total={stats.assists.reduce((sum: any, g: any) => sum + Number(g.value), 0)}
                        items={stats.assists}
                        onAdd={() => openAddModal('assists')}
                        onEdit={(i) => openEditModal('assists', i)}
                        onDelete={(i) => handleDeleteStat('assists', i)}
                        addLabel="Добавить передачу"
                    />
                    <StatCard
                        position={position}
                        title="Карточки"
                        total={stats.cards.reduce((sum: any, g: any) => sum + Number(g.value), 0)}
                        items={stats.cards}
                        onIncrement={incrementCard}
                        onDecrement={decrementCard}
                        showControls={false}
                        showValue={true}
                    />
                    <StatCard
                        position={position}
                        title="Сыгранные матчи"
                        total={stats.matches.length}
                        items={stats.matches}
                        onAdd={() => openAddModal('matches')}
                        onEdit={(i) => openEditModal('matches', i)}
                        onDelete={(i) => handleDeleteStat('matches', i)}
                        addLabel="Добавить матч"
                        showValue={false}
                    />

                </div>
                {position === 'player' &&
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
                }
            </div>

            <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}
                   title={modalMode === 'add' ? 'Добавить запись' : 'Редактировать запись'}>
                <form onSubmit={e => {
                    e.preventDefault();
                    saveModal();
                }}>
                    <label>
                        Игра:<br/>
                        <input
                            type="text"
                            value={formLabel}
                            onChange={e => setFormLabel(e.target.value)}
                            autoFocus
                        />
                    </label>
                    <br/>
                    <label>
                        Количество:<br/>
                        <input
                            type="text"
                            value={formValue}
                            onChange={e => setFormValue(e.target.value)}
                        />
                    </label>
                    <br/>
                    <div className={styles.buttonGroup}>
                        <button className={`${styles.btn} ${styles.cancelBtn}`} type="button"
                                onClick={() => setModalOpen(false)}>Отмена
                        </button>
                        <button className={`${styles.btn} ${styles.saveBtn}`} type="submit">Сохранить</button>
                    </div>
                </form>
            </Modal>
        </>
    );
};

export default PlayerStat;
