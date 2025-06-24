import React, { useState } from 'react';
import style from "./Profile.module.css";
import Header from "../../components/Header/Header";
import { Button } from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import Title from "../../components/Title/Title";
import Toast from "../../components/Toast/Toast";

type ProfileProps = {
    id: number;
    name: string;
    surname: string;
    fatherName: string;
    dateOfBirth: string;
    mail: string;
    onUpdate: (updatedUser: any) => void;
};

const Profile = ({ id, name, surname, fatherName, dateOfBirth, mail, onUpdate }: ProfileProps) => {
    const [profileData, setProfileData] = useState({
        name,
        surname,
        fatherName,
        dateOfBirth,
        mail
    });

    const [toast, setToast] = useState<{ message: string, type: 'success' | 'error' } | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setProfileData(prev => ({ ...prev, [name]: value }));
    };

    const validateData = () => {
        if (!profileData.name.trim()) return 'Имя не может быть пустым';
        if (!profileData.surname.trim()) return 'Фамилия не может быть пустой';
        if (!profileData.mail.trim()) return 'Почта не может быть пустой';
        if (!profileData.mail.includes('@')) return 'Некорректная почта';
        return null;
    };

    const handleSave = () => {
        const error = validateData();
        if (error) {
            setToast({ message: error, type: 'error' });
            setTimeout(() => setToast(null), 3000);
            return;
        }

        onUpdate({ id, ...profileData });
        setToast({ message: 'Данные сохранены!', type: 'success' });
        setTimeout(() => setToast(null), 3000);
    };

    return (
        <>
            <Header position="coach" />
            <Title title={'Профиль'} />

            <div className='content' style={{ position: 'relative' }}>
                {toast && <Toast message={toast.message} type={toast.type} />}

                <div className={`${style.profile}`}>
                    <h3>Данные пользователя</h3>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <label htmlFor="name">Имя</label>
                        <input type="text" id="name" name="name" value={profileData.name} onChange={handleChange} />

                        <label htmlFor="surname">Фамилия</label>
                        <input type="text" id="surname" name="surname" value={profileData.surname} onChange={handleChange} />

                        <label htmlFor="fatherName">Отчество</label>
                        <input type="text" id="fatherName" name="fatherName" value={profileData.fatherName} onChange={handleChange} />

                        <label htmlFor="dateOfBirth">Дата рождения</label>
                        <input type="date" id="dateOfBirth" name="dateOfBirth" value={profileData.dateOfBirth} onChange={handleChange} />

                        <div className={`${style.form_span}`}>
                            <div className={`${style.form_input}`}>
                                <label htmlFor="mail">Почта</label>
                                <input type="email" id="mail" name="mail" value={profileData.mail} onChange={handleChange} />
                            </div>

                            <Button
                                onClick={handleSave}
                                title={'Сохранить'}
                                position={'events'}
                                isActive={true}
                            />
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Profile;
