import type { HCT, HEX, HSL, RGB } from "../model/colorSpace.interface";
import type { colorType } from "../model/colorName.type";

export function getHEX(colorName: colorType): HEX {
    return "#000000";
}

export function getHCT(colorName: colorType): HCT {
    return { h: 0, c: 0, t: 0 };
}

export function getHSL(colorName: colorType): HSL {
    return { h: 0, s: 0, l: 0 };
}

export function getRGB(colorName: colorType): RGB {
    return { r: 0, g: 0, b: 0 };
}