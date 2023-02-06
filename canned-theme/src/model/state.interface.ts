import type { ThemeOptions } from "./theme.type";

export interface GlobalState {
  themes: Map<string, ThemeOptions>;
  currrentThemeName: string;
}

