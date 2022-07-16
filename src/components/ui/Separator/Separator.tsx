import React from 'react';
import useThemeClassName from '@/hooks/useThemeClassName';
import SeparatorStyles from './Separator.module.scss';

function Separator() {
    return (
        <div className={useThemeClassName(SeparatorStyles.separator)} />
    );
}

export default Separator;
