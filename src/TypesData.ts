export type ProfileProps = {
    id: number;
    name: string;
    surname: string;
    fatherName: string;
    dateOfBirth: string;
    mail: string;
    img: string,
    onUpdate: (updatedUser: any) => void;
    role: string
};

export type SingleEvent = {
    id: number;
    title: string;
    desc: string,
    time: string;
    date: string;
    members: number;
};

export type ExerciseItem = {
    exercise: string;
    image: string; // или можешь использовать `File` если это локальная картинка
};

export type SingleWorkout = {
    id: number;
    title: string;
    privat: boolean;
    items: ExerciseItem[]; // массив упражнений с картинками
};

export type Role = 'Тренер' | 'Спортсмен' | 'Создатель';

export type Statistic = {
    goals: number,
    assists: number,
    redCards: number,
    yellowCards: number,
    missedBalls: number,
    games: number
}

export type Attendance = {
    [date: string]: boolean; // ключ — строка в формате 'YYYY-MM-DD', значение — был ли игрок в этот день
};

export type Player = {
    profile: ProfileProps;
    role: Role;
    statistics: Statistic;
    attendance: Attendance;
};

export type Coach = {
    profile: ProfileProps;
    role: Role;
}

export type Team = {
    id: number;
    name: string;
    players: Player[];
    coaches: Coach[]
};

export const initialTeams: Team[] = [
    {
        id: 1,
        name: 'Барселона',
        players: [
            {
                profile: {
                    id: 1,
                    name: 'Алексей',
                    surname: 'Козлов',
                    fatherName: 'Викторович',
                    dateOfBirth: '1990-05-10',
                    mail: 'alex@example.com',
                    img: '../assets/profile-photo.jpg',
                    onUpdate: (user) => console.log('Updated', user),
                    role: 'player'
                },
                role: 'Спортсмен',
                statistics: {
                    goals: 2,
                    assists: 3,
                    redCards: 4,
                    yellowCards: 3,
                    missedBalls: 2,
                    games: 1
                },
                attendance: {
                    '2025-10-02': true,
                    '2025-10-03': true,
                },
            },
            {
                profile: {
                    id: 2,
                    name: 'Дмитрий',
                    surname: 'Ильин',
                    fatherName: 'Алексеевич',
                    dateOfBirth: '1995-07-20',
                    mail: 'dmitry@example.com',
                    img: '../assets/profile-photo.jpg',
                    onUpdate: (user) => console.log('Updated', user),
                    role: 'player'
                },
                role: 'Спортсмен',
                statistics: {
                    goals: 1,
                    assists: 2,
                    redCards: 3,
                    yellowCards: 4,
                    missedBalls: 5,
                    games: 6
                },
                attendance: {
                    '2025-10-02': false,
                    '2025-10-03': true,
                },
            },
            {
                profile: {
                    id: 3,
                    name: 'Сусанна',
                    surname: 'Даллакян',
                    fatherName: 'Тиграновна',
                    dateOfBirth: '1990-05-10',
                    mail: 'alex@example.com',
                    img: '../assets/profile-photo.jpg',
                    onUpdate: (user) => console.log('Updated', user),
                    role: 'player'
                },
                role: 'Спортсмен',
                statistics: {
                    goals: 2,
                    assists: 3,
                    redCards: 4,
                    yellowCards: 3,
                    missedBalls: 2,
                    games: 1
                },
                attendance: {
                    '2025-10-02': true,
                    '2025-10-03': true,
                },
            },
            {
                profile: {
                    id: 4,
                    name: 'Мария',
                    surname: 'Иванова',
                    fatherName: 'Викторовна',
                    dateOfBirth: '1990-05-10',
                    mail: 'alex@example.com',
                    img: '../assets/profile-photo.jpg',
                    onUpdate: (user) => console.log('Updated', user),
                    role: 'player'
                },
                role: 'Спортсмен',
                statistics: {
                    goals: 2,
                    assists: 3,
                    redCards: 4,
                    yellowCards: 3,
                    missedBalls: 2,
                    games: 1
                },
                attendance: {
                    '2025-10-02': true,
                    '2025-10-03': true,
                },
            },
        ],
        coaches: [
            {
                profile: {
                    id: 5,
                    name: 'Алина',
                    surname: 'Белицкая',
                    fatherName: 'Александровна',
                    dateOfBirth: '1990-05-10',
                    mail: 'al@example.com',
                    img: '../assets/profile-photo.jpg',
                    onUpdate: () => null,
                    role: 'player'
                },
                role: 'Тренер'
            },
            {
                profile: {
                    id: 6,
                    name: 'Мария',
                    surname: 'Лучшая',
                    fatherName: 'Александровна',
                    dateOfBirth: '1994-05-10',
                    mail: 'ma@example.com',
                    img: '../assets/profile-photo.jpg',
                    onUpdate: () => null,
                    role: 'player'
                },
                role: 'Создатель'
            },
        ]
    },
    {
        id: 2,
        name: 'Крылья',
        players: [
            {
                profile: {
                    id: 7,
                    name: 'Игорь',
                    surname: 'Мельников',
                    fatherName: 'Андреевич',
                    dateOfBirth: '1992-03-15',
                    mail: 'igor.m@example.com',
                    img: '../assets/profile-photo.jpg',
                    onUpdate: (user) => console.log('Updated', user),
                    role: 'player'
                },
                role: 'Спортсмен',
                statistics: {
                    goals: 4,
                    assists: 1,
                    redCards: 0,
                    yellowCards: 2,
                    missedBalls: 1,
                    games: 5
                },
                attendance: {
                    '2025-10-02': true,
                    '2025-10-03': false,
                },
            },
            {
                profile: {
                    id: 8,
                    name: 'Тимур',
                    surname: 'Гусев',
                    fatherName: 'Ильич',
                    dateOfBirth: '1998-11-22',
                    mail: 'timur.gusev@example.com',
                    img: '../assets/profile-photo.jpg',
                    onUpdate: (user) => console.log('Updated', user),
                    role: 'player'
                },
                role: 'Спортсмен',
                statistics: {
                    goals: 0,
                    assists: 5,
                    redCards: 1,
                    yellowCards: 1,
                    missedBalls: 4,
                    games: 8
                },
                attendance: {
                    '2025-10-02': true,
                    '2025-10-03': true,
                },
            },
            {
                profile: {
                    id: 9,
                    name: 'Екатерина',
                    surname: 'Орлова',
                    fatherName: 'Сергеевна',
                    dateOfBirth: '1997-06-01',
                    mail: 'ekaterina.orlova@example.com',
                    img: '../assets/profile-photo.jpg',
                    onUpdate: (user) => console.log('Updated', user),
                    role: 'player'
                },
                role: 'Спортсмен',
                statistics: {
                    goals: 3,
                    assists: 2,
                    redCards: 0,
                    yellowCards: 3,
                    missedBalls: 0,
                    games: 4
                },
                attendance: {
                    '2025-10-02': false,
                    '2025-10-03': false,
                },
            },
            {
                profile: {
                    id: 10,
                    name: 'Лев',
                    surname: 'Калинин',
                    fatherName: 'Романович',
                    dateOfBirth: '1993-08-14',
                    mail: 'lev.kalinin@example.com',
                    img: '../assets/profile-photo.jpg',
                    onUpdate: (user) => console.log('Updated', user),
                    role: 'player'
                },
                role: 'Спортсмен',
                statistics: {
                    goals: 1,
                    assists: 1,
                    redCards: 2,
                    yellowCards: 2,
                    missedBalls: 3,
                    games: 7
                },
                attendance: {
                    '2025-10-02': true,
                    '2025-10-03': true,
                },
            },
        ],
        coaches: [
            {
                profile: {
                    id: 11,
                    name: 'Анна',
                    surname: 'Громова',
                    fatherName: 'Владимировна',
                    dateOfBirth: '1989-04-30',
                    mail: 'anna.gromova@example.com',
                    img: '../assets/profile-photo.jpg',
                    onUpdate: () => null,
                    role: 'player'
                },
                role: 'Тренер'
            },
            {
                profile: {
                    id: 12,
                    name: 'Олег',
                    surname: 'Морозов',
                    fatherName: 'Игоревич',
                    dateOfBirth: '1985-12-12',
                    mail: 'oleg.morozov@example.com',
                    img: '../assets/profile-photo.jpg',
                    onUpdate: () => null,
                    role: 'player'
                },
                role: 'Создатель'
            },
        ]
    }
];