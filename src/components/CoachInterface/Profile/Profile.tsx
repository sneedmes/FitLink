import React, { useState } from 'react';
import style from "./Profile.module.css";
import Header from "../../Header/Header";
import { Button } from "../../Button/Button";
import { useNavigate } from "react-router-dom";
import Title from "../../Title/Title";

type ProfileProps = {
    id: number;
    name: string;
    surname: string;
    fatherName: string;
    dateOfBirth: string;
    mail: string;
    onUpdate: (updatedUser: any) => void; // новый проп
};

const Profile = ({ id, name, surname, fatherName, dateOfBirth, mail, onUpdate }: ProfileProps) => {
    const navigate = useNavigate();

    const [profileData, setProfileData] = useState({
        name,
        surname,
        fatherName,
        dateOfBirth,
        mail
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setProfileData(prev => ({ ...prev, [name]: value }));
    };

    const handleSave = () => {
        onUpdate({ id, ...profileData });
        navigate('/Profile');
    };

    return (
        <>
            <Header position="coach" />
            <Title title={'Профиль'} />

            <div className='content'>
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
