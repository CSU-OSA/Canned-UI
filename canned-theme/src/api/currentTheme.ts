import { ThemeOptions } from "@/model/theme.type";
import { Container } from "typescript-ioc";
import { ThemeState } from "@/core/state";
import { BehaviorSubject, map } from "rxjs";

export const currentTheme = new BehaviorSubject<ThemeOptions | null>(null);
Container.get(ThemeState)
    .pipe(
        map((state) => state?.themes.get(state.currrentThemeName) || null),
    ).subscribe(currentTheme);
