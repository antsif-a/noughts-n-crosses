import { HTMLAttributes } from 'react';
import useThemeContext from '@/hooks/useThemeContext';

export default function useThemeClassName<T>(...classNames: HTMLAttributes<T>['className'][]) {
    return `${classNames.join(' ')} theme-${useThemeContext().theme}`;
}
