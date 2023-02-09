import { colorType } from "./colorName.type";
import { RGBUtil, HCTUtil, HEXUtil, HSLUtil } from "./colorSpace.interface";
export type ThemeOptions = Record<colorType, RGBUtil | HCTUtil | HEXUtil | HSLUtil>;