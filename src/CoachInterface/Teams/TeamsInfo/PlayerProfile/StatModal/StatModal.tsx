import React from 'react';
import styles from './StatModal.module.css';

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children: React.ReactNode;
};

const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
    if (!isOpen) return null;

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={e => e.stopPropagation()}>
                {title && <h2>{title}</h2>} <br/>
                <div>{children}</div>
                <button className={styles.closeBtn} onClick={onClose}>×</button>
            </div>
        </div>
    );
};

export default Modal;
