import { ThemeOptions } from "@/model/theme.type";
import { themeFromSourceColor } from "@material/material-color-utilities";

export function createTheme(name: string, options: Partial<ThemeOptions>) {

    //todo: convert partial to full theme options use `themeFromSourceColor` function

    return {
        name,
        options: options as ThemeOptions
    };
}