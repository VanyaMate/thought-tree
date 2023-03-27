import React, {useState} from 'react';
import ThemeContext from './ThemeContext';
import {darkTheme, ITheme, lightTheme} from "./themes";

const ThemeProvider = (props: { children: any }) => {
    const [theme, setTheme] = useState<ITheme>(lightTheme);

    const toggleTheme = function () {
        setTheme((theme) => theme === lightTheme ? darkTheme : lightTheme);
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            { props.children }
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;