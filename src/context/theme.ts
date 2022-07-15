import { createContext } from 'react';
import ThemeType from '@/models/ThemeType';

const ThemeContext = createContext({
    theme: ThemeType.light,
    toggleTheme: () => {},
});

export default ThemeContext;
