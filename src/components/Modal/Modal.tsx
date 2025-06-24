// components/Modal/Modal.tsx
import React from 'react';
import style from './Modal.module.css';

type ModalProps = {
    children: React.ReactNode;
    onClose: () => void;
};

const Modal = ({children, onClose}: ModalProps) => {
    return (
        <>
            <div className="content">
                <div className={style.modalOverlay} onClick={onClose}>
                    <div className={style.modalContent} onClick={e => e.stopPropagation()}>
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;