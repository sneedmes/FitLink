// components/Toast/Toast.tsx
import React from 'react';
import style from './Toast.module.css';

type ToastProps = {
    message: string;
    type?: 'success' | 'error';
};

const Toast = ({ message, type = 'success' }: ToastProps) => {
    return (
        <div className={`${style.toast} ${type === 'error' ? style.error : ''}`}>
            {message}
        </div>
    );
};

export default Toast;
