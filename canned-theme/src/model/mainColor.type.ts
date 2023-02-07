import { colorType } from "./colorName.type";

type mainColor = Record<colorType, boolean>

export type mainColorType = Pick<mainColor, "primary" | "secondary" | "tertiary" | "info" |
    "warn" | "error" | "surface" | "outline">

export type mainColorTypeKey = Partial<mainColorType>

