import React, { HTMLProps } from 'react';
import ModalStyles from './Modal.module.scss';
import useThemeClassName from '@/hooks/useThemeClassName';

interface ModalProps extends HTMLProps<HTMLElement> {
    active: boolean;
    onClose: () => void;
}

function Modal({ children, active, onClose }: ModalProps) {
    return (
        <div
          className={useThemeClassName(ModalStyles.modal, active ? ModalStyles.active : '')}
          onClick={onClose}
          role="dialog"
        >
            <div
              className={useThemeClassName(ModalStyles.content)}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
            >
                {children}
            </div>
        </div>
    );
}

export default Modal;
