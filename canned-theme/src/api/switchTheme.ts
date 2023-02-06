import { ThemeState } from "@/core/state";
import { Container } from "typescript-ioc";

export function switchTheme(name: string) {
    const themeState = Container.get(ThemeState);
    const currentState = themeState.getValue();
    if (!currentState) {
        return false;
    }
    themeState.next({
        ...currentState,
        currrentThemeName: name
    })
    return true;
}