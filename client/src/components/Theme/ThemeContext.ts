import {createContext} from "react";

export enum ThemeType {
    DARK,
    LIGHT
}

export interface IThemeContext {
    type: ThemeType,
    toggleTheme: () => void
}

const ThemeContext = createContext<IThemeContext>({ type: ThemeType.DARK, toggleTheme: () => {} });

export default ThemeContext;