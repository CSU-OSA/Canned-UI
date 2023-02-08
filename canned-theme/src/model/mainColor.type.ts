import { colorType } from "./colorName.type";
import { ThemeOptions } from "./theme.type";

export type mainColor = "primary" | "secondary" | "tertiary" | "info" | "warn" | "error" | "surface" | "outline";

export type mainColorType = Pick<ThemeOptions, mainColor>


