import React, { HTMLProps } from 'react';
import useThemeClassName from '@/hooks/useThemeClassName';
import ButtonStyles from './Button.module.scss';

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
    type?: 'button' | 'submit' | 'reset';
    border?: boolean;
}

function Button({ children, border, ...props }: ButtonProps) {
    return (
        <button {...props} className={useThemeClassName(ButtonStyles.button, border ? ButtonStyles.border : '')}>
            {children}
        </button>
    );
}

Button.defaultProps = {
    type: 'button',
    border: true,
};

export default Button;
