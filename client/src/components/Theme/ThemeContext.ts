import {createContext} from "react";
import {ITheme} from "./themes";

export interface IThemeContext {
    theme: ITheme | null,
    toggleTheme: () => void
}

const ThemeContext = createContext<IThemeContext>({ theme: null, toggleTheme: () => {} });

export default ThemeContext;