import React, { HTMLProps } from 'react';
import ButtonStyles from './Button.module.scss';
import useStyles from '../../hooks/useStyles';

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
    type?: 'button' | 'submit' | 'reset';
    border?: boolean;
}

function Button({ children, className, border, ...props }: ButtonProps) {
    const classNames = useStyles(ButtonStyles.button, border && ButtonStyles.border, className);

    return (
        <button {...props} className={classNames}>
            {children}
        </button>
    );
}

Button.defaultProps = {
    type: 'button',
    border: true,
};

export default Button;
