import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import style from '../Workout.module.css';
import { SingleWorkout, ExerciseItem } from '../../../TypesData';
import { Button } from '../../../components/Button/Button';
import Header from "../../../components/Header/Header";
import Title from "../../../components/Title/Title";

type EditWorkoutProps = {
    workouts: SingleWorkout[];
    setWorkout: React.Dispatch<React.SetStateAction<SingleWorkout[]>>;
};

const EditWorkout = ({ workouts, setWorkout }: EditWorkoutProps) => {
    const navigate = useNavigate();
    const { id } = useParams();
    const workoutId = parseInt(id!);
    const workout = workouts.find(w => w.id === workoutId);
    // const [items, setItems] = useState<ExerciseItem[]>([{ exercise: '', image: '' }]);
    // const [titleError, setTitleError] = useState('');
    // const [itemsError, setItemsError] = useState('');


    const [formData, setFormData] = useState({
        title: workout?.title || '',
        privat: workout?.privat || false,
        items: workout?.items || [{ exercise: '', image: '' }],
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, type, value, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleItemChange = (index: number, field: keyof ExerciseItem, value: string) => {
        const updatedItems = [...formData.items];
        updatedItems[index][field] = value;
        setFormData(prev => ({ ...prev, items: updatedItems }));
    };

    const handleImageUpload = (index: number, file: File | null) => {
        if (!file) return;

        const reader = new FileReader();
        reader.onloadend = () => {
            const updatedItems = [...formData.items];
            updatedItems[index].image = reader.result as string;
            setFormData(prev => ({ ...prev, items: updatedItems }));
        };
        reader.readAsDataURL(file);
    };

    const handleAddItem = () => {
        setFormData(prev => ({
            ...prev,
            items: [...prev.items, { exercise: '', image: '' }]
        }));
    };

    const handleRemoveItem = (index: number) => {
        setFormData(prev => ({
            ...prev,
            items: prev.items.filter((_, i) => i !== index)
        }));
    };

    const handleSave = () => {
        setWorkout(prev =>
            prev.map(w =>
                w.id === workoutId ? { ...w, ...formData } : w
            )
        );
        navigate('/workouts');
    };

    const handleDelete = () => {
        setWorkout(prev => prev.filter(w => w.id !== workoutId));
        navigate('/workouts');
    };

    if (!workout) return <p>Тренировка не найдена</p>;

    return (
        <>
            <Header position="coach" />
            <Title title="Редактировать тренировку" />
            <div className="content">
                <div className={style.edit_workout}>
                    <label>
                        <h2>Название / дата тренировки</h2>

                        <input
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            placeholder="Название тренировки"
                        />
                    </label>

                    <div className={style.exercise_input}>
                        {formData.items.map((item, index) => (
                            <div key={index}>
                                <h2>Упражнение</h2>
                                <input
                                    type="text"
                                    placeholder="Название упражнения"
                                    value={item.exercise}
                                    onChange={(e) =>
                                        handleItemChange(index, 'exercise', e.target.value)
                                    }
                                />
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) =>
                                        handleImageUpload(index, e.target.files?.[0] || null)
                                    }
                                />
                                {item.image && (
                                    <img
                                        src={item.image}
                                        alt="Упражнение"
                                        style={{width: 100, height: 100, objectFit: 'cover', marginTop: 8}}
                                    />
                                )}

                                {formData.items.length > 1 && (
                                    <button
                                        type="button"
                                        onClick={() => handleRemoveItem(index)}
                                        className={style.remove_button}
                                    >
                                        Удалить упражнение
                                    </button>
                                )}
                            </div>
                        ))}

                    </div>

                    <Button
                        onClick={handleAddItem}
                        title="Добавить упражнение"
                        isActive={true}
                        position="edit"
                    />

                    <label className={style.checkbox_container}>
                        <span className={style.checkbox_text}>Приватная тренировка</span>
                        <label className={style.checkbox_label}>
                            <input
                                type="checkbox"
                                name="privat"
                                className={style.checkbox_input}
                                checked={formData.privat}
                                onChange={handleChange}
                            />
                            <span className={style.checkbox_slider}></span>
                        </label>
                    </label>

                    <div className={style.buttons}>
                        <Button
                            title="Сохранить"
                            onClick={handleSave}
                            position="events"
                            isActive={true}
                        />
                        <Button
                            title="Удалить"
                            onClick={handleDelete}
                            position="delete"
                            isActive={false}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default EditWorkout;
