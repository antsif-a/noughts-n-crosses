import React, { HTMLProps } from 'react';
import ButtonStyles from './Button.module.scss';

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
    type?: 'button' | 'submit' | 'reset';
    border?: boolean;
}

function Button({ children, className, border, ...props }: ButtonProps) {
    const classNames = border === false
        ? ButtonStyles.button
        : [ButtonStyles.button, ButtonStyles.border].join(' ');

    return (
        <button {...props} className={className || classNames}>
            {children}
        </button>
    );
};

export default Button;
