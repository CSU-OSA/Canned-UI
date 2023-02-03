import type {HCT, HEX, HSL, RGB} from "../model/colorSpace.interface";
import {argbFromRgb, Hct} from "@material/material-color-utilities";

/**
 * Convert RGB(HEX) to RGB
 * @param hex RGB(HEX) color - such as "#000000"
 * @constructor
 */
export function HEX2RGB(hex: HEX): RGB {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : { r: 0, g: 0, b: 0 };
}

/**
 * Convert RGB to RGB(HEX)
 * @param rgb RGB color - such as {r: 0, g: 0, b: 0}
 * @constructor
 */
export function RGB2HEX(rgb: RGB): HEX {
  const { r, g, b } = rgb;
  return `#${((r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}

/**
 * Convert RGB(HEX) to HSL
 * @param hex RGB(HEX) color - such as "#000000"
 * @constructor
 */
export function HEX2HSL(hex: HEX): HSL {
  const rgb = HEX2RGB(hex);
  return RGB2HSL(rgb);
}

/**
 * Convert HSL to RGB(HEX)
 * @param hsl HSL color - such as {h: 0, s: 0, l: 0}
 * @constructor
 */
export function HSL2HEX(hsl: HSL): HEX {
  const rgb = HSL2RGB(hsl);
  return RGB2HEX(rgb);
}

/**
 * Convert RGB to HSL
 * @param rgb RGB color - such as {r: 0, g: 0, b: 0}
 * @constructor
 */
export function RGB2HSL(rgb: RGB): HSL {
  const { r, g, b } = rgb;
  const r1 = r / 255;
  const g1 = g / 255;
  const b1 = b / 255;

  const maxColor = Math.max(r1, g1, b1);
  const minColor = Math.min(r1, g1, b1);
  // Calculate L:
  let L = (maxColor + minColor) / 2;
  let S = 0;
  let H = 0;
  if (maxColor !== minColor) {
    // Calculate S:
    if (L < 0.5) {
      S = (maxColor - minColor) / (maxColor + minColor);
    } else {
      S = (maxColor - minColor) / (2.0 - maxColor - minColor);
    }
    // Calculate H:
    if (r1 === maxColor) {
      H = (g1 - b1) / (maxColor - minColor);
    } else if (g1 === maxColor) {
      H = 2.0 + (b1 - r1) / (maxColor - minColor);
    } else {
      H = 4.0 + (r1 - g1) / (maxColor - minColor);
    }
  }
  L = L * 100;
  S = S * 100;
  H = H * 60;
  if (H < 0) {
    H += 360;
  }
  return { h: H, s: S, l: L };
}

/**
 * Convert HSL to RGB
 * @param hsl HSL color - such as {h: 0, s: 0, l: 0}
 * @constructor
 */
export function HSL2RGB(hsl: HSL): RGB {
  const { h, s, l } = hsl;
  let r: number;
  let g: number;
  let b: number;
  if (s === 0) {
    r = g = b = l; // achromatic
  } else {
    const hue2rgb = (p: number, q: number, t: number) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }
  return {
    r: Math.round(r * 255),
    g: Math.round(g * 255),
    b: Math.round(b * 255),
  };
}

/**
 * Convert RGB to Google-HCT
 * @param rgb RGB color - such as {r: 0, g: 0, b: 0}
 * @constructor
 */
export function RGB2HCT(rgb: RGB): HCT {
  const { r, g, b } = rgb;
  const hct = Hct.fromInt(argbFromRgb(r, g, b));
  return { h: hct.hue, c: hct.chroma, t: hct.tone };
}

/**
 * Convert Google-HCT to RGB
 * @param hct Google-HCT color - such as {h: 0, c: 0, t: 0}
 * @constructor
 */
export function HCT2RGB(hct: HCT): RGB {
  const { h, c, t } = hct;
  const hctObj = Hct.from(h, c, t);
  const argb = hctObj.toInt();
  return { r:(argb >> 16) & 0xff, g:(argb >> 8) & 0xff, b:argb & 0xff };
}
