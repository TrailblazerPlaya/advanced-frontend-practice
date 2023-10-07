import { useContext } from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "./ThemeContext";

interface UseThemeResult {
    toggleTheme: () => void;
    theme: Theme;
}

export function useTheme(): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);
    if (theme === undefined) {
        // Обработка ситуации, когда theme равно undefined
        // Можно установить значение по умолчанию или выбрать другую логику
        // Например, можно выбрать тему по умолчанию и установить ее
        setTheme(Theme.LIGHT);
    }
    const toggleTheme = () => {
        const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };
    return {
        theme: theme as Theme,
        toggleTheme,
    };
}
