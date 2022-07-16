import useTheme from '@/hooks/useTheme';

export default function useThemeClassName(...classNames: string[]) {
    return `${classNames.join(' ')} theme-${useTheme().theme}`;
}
