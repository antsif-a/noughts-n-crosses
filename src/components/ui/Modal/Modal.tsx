import React, { HTMLProps } from 'react';
import mergeStyles from '../../../helpers/mergeStyles';
import ModalStyles from './Modal.module.scss';

interface ModalProps extends HTMLProps<HTMLElement> {
    active: boolean;
    onClose: () => void;
}

function Modal({ children, active, onClose }: ModalProps) {
    const classNames = mergeStyles(ModalStyles.modal, active && ModalStyles.active);

    return (
        <div
          className={classNames}
          onClick={onClose}
          role="dialog"
        >
            <div
              className={ModalStyles.content}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
            >
                {children}
            </div>
        </div>
    );
}

export default Modal;
