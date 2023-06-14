import React, {createContext, useState} from "react";
import { lightTheme, darkTheme } from "./theme";

export const ThemeContex = createContext();

export const ThemeProvider = ({children}) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        console.log(isDarkMode)
        setIsDarkMode(!isDarkMode);
    }

    const theme = isDarkMode ? darkTheme : lightTheme;

    return(
        <ThemeContex.Provider value= {{theme, toggleTheme}}>
            {children}
        </ThemeContex.Provider>
    )
}