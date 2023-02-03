import { colorType } from "./colorName.type";
import { RGB, HCT, HEX, HSL } from "./colorSpace.interface";
export type ThemeOptions = Record<colorType, RGB | HCT | HEX | HSL>;