import React, {useState} from 'react';
import ThemeContext, {ThemeType} from './ThemeContext';

const ThemeProvider = (props: { children: any }) => {
    const [theme, setTheme] = useState<ThemeType>(ThemeType.DARK);

    const toggleTheme = function () {
        setTheme((theme) => theme === ThemeType.LIGHT ? ThemeType.DARK : ThemeType.LIGHT);
    }

    return (
        <ThemeContext.Provider value={{ type: theme, toggleTheme }}>
            { props.children }
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;