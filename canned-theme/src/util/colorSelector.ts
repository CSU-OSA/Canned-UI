import type { HCTUtil, HEXUtil, HSLUtil, RGBUtil } from "../model/colorSpace.interface";
import type { colorType } from "../model/colorName.type";

export function getHEX(colorName: colorType): HEXUtil {
    return "#000000";
}

export function getHCT(colorName: colorType): HCTUtil {
    return { h: 0, c: 0, t: 0 };
}

export function getHSL(colorName: colorType): HSLUtil {
    return { h: 0, s: 0, l: 0 };
}

export function getRGB(colorName: colorType): RGBUtil {
    return { r: 0, g: 0, b: 0 };
}