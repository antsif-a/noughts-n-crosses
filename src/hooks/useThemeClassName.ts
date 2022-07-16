import { HTMLAttributes } from 'react';
import useTheme from '@/hooks/useTheme';

export default function useThemeClassName<T>(...classNames: HTMLAttributes<T>['className'][]) {
    return `${classNames.join(' ')} theme-${useTheme().theme}`;
}
