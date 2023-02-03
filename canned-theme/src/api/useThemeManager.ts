import { ThemeState } from "@/core/state";
import { ThemeOptions } from "@/model/theme.type";
import { Container } from "typescript-ioc";
import { createTheme } from "./createTheme";

export function useThemeManager(themes: ReturnType<typeof createTheme>[], defaultThemeName: string = '__default__') {
    Container.bind(ThemeState).to(
        new ThemeState({
            themes: themes.reduce((prev, curr)=>prev.set(curr.name, curr.options), new Map<string, ThemeOptions>()),
            currrentThemeName: defaultThemeName
        })
    )
}