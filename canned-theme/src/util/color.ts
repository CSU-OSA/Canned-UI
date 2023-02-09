import { HEXUtil } from "@/model/colorSpace.interface";
import { HCT2RGB, HSL2HEX, RGB2HEX } from "@/util/colorSpaceConverter";

export interface Color {
  toHEX(): HEXUtil;
}

export class RGB implements Color {
  constructor(private r: number, private g: number, private b: number) {
    this.r = r;
    this.g = g;
    this.b = b;
  }

  setRgb(r: number, g: number, b: number) {
    this.r = r;
    this.g = g;
    this.b = b;
  }

  getRGB() {
    return {
      r: this.r,
      g: this.g,
      b: this.b
    }
  }
  getR() { return this.r; }
  getG() { return this.g; }
  getB() { return this.b; }

  toHEX(): HEXUtil {
    return RGB2HEX(this.getRGB());
  }
}

export class HSL implements Color {
  constructor(private h: number, private s: number, private l: number) {
    this.h = h;
    this.s = s;
    this.l = l;
  }

  setHsl(h: number, s: number, l: number) {
    this.h = h;
    this.s = s;
    this.l = l;
  }

  getHSL() {
    return {
      h: this.h,
      s: this.s,
      l: this.l
    }
  }
  getH() { return this.h; }
  getS() { return this.s; }
  getL() { return this.l; }

  toHEX(): HEXUtil {
    return HSL2HEX(this.getHSL());
  }

}

export class HCT implements Color {
  constructor(private h: number, private c: number, private t: number) {
    this.h = h;
    this.c = c;
    this.t = t;
  }

  setHct(h: number, c: number, t: number) {
    this.h = h;
    this.c = c;
    this.t = t;
  }

  getHCT() {
    return {
      h: this.h,
      c: this.c,
      t: this.t
    }
  }
  getH() { return this.h; }
  getC() { return this.c; }
  getT() { return this.t; }

  toHEX(): HEXUtil {
    return RGB2HEX(HCT2RGB(this.getHCT()));
  }
}

export class HEX implements Color {
  constructor(private hex: string) {
    this.hex = hex;
  }

  getHex() { return this.hex; }

  toHEX(): HEXUtil {
    return this.hex;
  }
};
