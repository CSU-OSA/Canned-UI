import { ThemeOptions } from "@/model/theme.type";
import { themeFromSourceColor, argbFromHex, hexFromArgb } from "@material/material-color-utilities";
import { mainColorType } from "@/model/mainColor.type";
import { CorePalette } from "@material/material-color-utilities";
import { Color } from "@/util/color";
import { Scheme } from "@material/material-color-utilities";


// 参数应该加个seed
export function createTheme(name: string, mode: 'light' | 'dark', seed: Color, options: mainColorType & Partial<ThemeOptions>) {

    if (options == null) {
        // fallback default theme
    }

    const themeOptionsKeys: (keyof ThemeOptions)[] = [
        "primary",
        "onPrimary",
        "primaryContainer",
        "onPrimaryContainer",
        "primaryVariant",
        "onPrimaryVariant",
        "secondary",
        "onSecondary",
        "secondaryContainer",
        "onSecondaryContainer",
        "secondaryVariant",
        "onSecondaryVariant",
        "tertiary",
        "onTertiary",
        "tertiaryContainer",
        "onTertiaryContainer",
        "tertiaryVariant",
        "onTertiaryVariant",
        "error",
        "onError",
        "errorContainer",
        "onErrorContainer",
        "surface",
        "onSurface",
        "surfaceVariant",
        "onSurfaceVariant",
        "info",
        "onInfo",
        "infoContainer",
        "onInfoContainer",
        "warn",
        "onWarn",
        "WarnContainer",
        "onWarnContainer",
        "outline",
    ];

    const cannedThemeOptionsKeys: (keyof ThemeOptions)[] = [
        "primary-0",
        "primary-1",
        "primary-2",
        "primary-3",
        "primary-4",
        "primary-5",
        "primary-6",
        "primary-7",
        "primary-8",
        "primary-9",
        "secondary-0",
        "secondary-1",
        "secondary-2",
        "secondary-3",
        "secondary-4",
        "secondary-5",
        "secondary-6",
        "secondary-7",
        "secondary-8",
        "secondary-9",
        "tertiary-0",
        "tertiary-1",
        "tertiary-2",
        "tertiary-3",
        "tertiary-4",
        "tertiary-5",
        "tertiary-6",
        "tertiary-7",
        "tertiary-8",
        "tertiary-9",
        "info-0",
        "info-1",
        "info-2",
        "info-3",
        "info-4",
        "info-5",
        "info-6",
        "info-7",
        "info-8",
        "info-9",
        "warn-0",
        "warn-1",
        "warn-2",
        "warn-3",
        "warn-4",
        "warn-5",
        "warn-6",
        "warn-7",
        "warn-8",
        "warn-9",
        "error-0",
        "error-1",
        "error-2",
        "error-3",
        "error-4",
        "error-5",
        "error-6",
        "error-7",
        "error-8",
        "error-9",
        "surface-0",
        "surface-1",
        "surface-2",
        "surface-3",
        "surface-4",
        "surface-5",
        "surface-6",
        "surface-7",
        "surface-8",
        "surface-9",
        "outline-0",
        "outline-1",
        "outline-2",
        "outline-3",
        "outline-4",
        "outline-5",
        "outline-6",
        "outline-7",
        "outline-8",
        "outline-9",
    ]

    // 参考scheme.js
    const palette = CorePalette.of(argbFromHex(seed.toHEX()));
    const theme = themeFromSourceColor(argbFromHex(seed.toHEX()), [
        {
            name: "info",
            value: CorePalette.of(palette.a1.tone(40)).a1.tone(40), // randomly select based on seed
            blend: true
        },
        {
            name: "warn",
            value: CorePalette.of(palette.a1.tone(60)).a1.tone(40), // randomly select based on seed
            blend: true
        }
    ])

    // type guard from color type to key of the Scheme
    const isInM3ThemeScheme = (color: string): color is keyof Scheme => {
        return color in theme.schemes.light;
    }

    const generateFromM3ThemeSchemes = (color: keyof Scheme, mode: 'light' | 'dark') => {
        return hexFromArgb(theme.schemes[mode][color] as number);
    };

    type base = 'primary' | 'secondary' | 'tertiary' | 'info' | 'warn' | 'error' | 'surface' | 'outline';
    type tone = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';

    //type guard of base-tone
    const isInM3Palette = (color: string): color is `${base}-${tone}` => {
        return color.match(/^(primary|secondary|tertiary|info|warn|error|surface|outline)-[0-9]$/) !== null;
    }

    const generateFromM3Palette = (color: `${base}-${tone}`, mode: 'light' | 'dark') => {
        const baseColor = color.split('-')[0] as base;
        const tone = color.split('-')[1] as tone;
        switch (baseColor) {
            case 'primary':
                return hexFromArgb(palette.a1.tone(parseInt(tone) * 10));
            case 'secondary':
                return hexFromArgb(palette.a2.tone(parseInt(tone) * 10));
            case 'tertiary':
                return hexFromArgb(palette.a3.tone(parseInt(tone) * 10));
            case 'info':
                return hexFromArgb(CorePalette.of(theme.customColors[0].value).a1.tone(parseInt(tone) * 10));
            case 'warn':
                return hexFromArgb(CorePalette.of(theme.customColors[1].value).a1.tone(parseInt(tone) * 10));
            case 'error':
                return hexFromArgb(palette.error.tone(parseInt(tone) * 10));
            case 'surface':
                return hexFromArgb(CorePalette.of(theme.schemes[mode].surface).a1.tone(parseInt(tone) * 10));
            case 'outline':
                return hexFromArgb(CorePalette.of(theme.schemes[mode].outline).a1.tone(parseInt(tone) * 10));
        }
    }

    // 参考scheme.js


    // 参考scheme.js

    /*  a1 for primary
    22 for secondary
    a3 for tertiary
    n1 for background
    n2 for surfaceVariant and outline
    error for error
    */


    // 根据seed生成theme，和官方重叠的字段直接使用，其余部分根据源码折中

    // target初始化为所有颜色的默认值
    const target: ThemeOptions = [...themeOptionsKeys, ...cannedThemeOptionsKeys].reduce((acc, key) => {
        if (key in options) {
            return { ...acc, [key]: options[key] };
        }
        if (isInM3ThemeScheme(key)) {
            return { ...acc, [key]: generateFromM3ThemeSchemes(key, mode) };
        }
        if (isInM3Palette(key)) {
            return { ...acc, [key]: generateFromM3Palette(key, mode) };
        }
        // fallback as background
        return { ...acc, [key]: generateFromM3ThemeSchemes('background', mode) };
    }, {} as ThemeOptions);

    return {
        name,
        mode,
        options: target,
    };
}
