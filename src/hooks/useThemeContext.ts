import { useContext } from 'react';
import ThemeContext from '@/context/theme';

export default function useThemeContext() {
    return useContext(ThemeContext);
}
