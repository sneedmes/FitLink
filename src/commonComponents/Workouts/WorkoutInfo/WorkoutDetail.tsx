import React, {useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {SingleWorkout} from '../../../TypesData';
import Header from '../../../components/Header/Header';
import Title from '../../../components/Title/Title';
import {Button} from '../../../components/Button/Button';
import style from '../Workout.module.css';
import Modal from '../../../components/Modal/Modal'; // Предполагается, что у вас есть компонент Modal

type WorkoutDetailsProps = {
    position: string,
    workouts: SingleWorkout[];
};

const WorkoutDetails = ({position, workouts}: WorkoutDetailsProps) => {
    const {id} = useParams();
    const navigate = useNavigate();
    const workoutId = parseInt(id!);
    const workout = workouts.find(w => w.id === workoutId);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    if (!workout) return <p>Тренировка не найдена</p>;

    const handleImageClick = (imageUrl: string) => {
        setSelectedImage(imageUrl);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <>
            {position === 'coach' ?
                <Header position="coach"/>
                : <Header position="player"/>
            }
            <Title title={workout.title}/>

            <div className="content">
                <Button position={'edit'} title={'Назад'} onClick={() => navigate(`/Workouts`)} isActive={false}/>
                <div className={style.details}>
                    <h3>Упражнения:</h3>
                    <div className={style.itemsList}>
                        {workout.items.map((item, index) => (
                            <div key={index} className={style.exerciseCard}>
                                <div className={style.cardContent}>
                                    <h5 className={style.exerciseTitle}>
                                        <strong>{item.exercise}</strong>
                                    </h5>
                                    {item.image && (
                                        <div
                                            className={style.imageContainer}
                                            onClick={() => handleImageClick(item.image)}
                                        >
                                            <img
                                                src={item.image}
                                                alt={item.exercise}
                                                className={style.exerciseImage}
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                    <h5><i>{workout.privat ? 'Приватная тренировка' : 'Общая тренировка'}</i></h5>

                    <div className={style.buttons}>
                        {position === 'coach' &&
                            <Button
                                title="Редактировать"
                                onClick={() => navigate(`/edit-workout/${workout.id}`)}
                                position="edit"
                                isActive={true}
                            />}
                    </div>
                </div>

            </div>


            {/* Модальное окно для просмотра изображения */}
            {selectedImage && (
                <Modal onClose={closeModal}>
                    <div className={style.modalImageContainer}>
                        <img
                            src={selectedImage}
                            alt="Изображение"
                            className={style.modalImage}
                        />
                        <button
                            onClick={closeModal}
                            className={style.closeButton}
                        >
                            ×
                        </button>
                    </div>
                </Modal>
            )}
        </>
    );
};

export default WorkoutDetails;