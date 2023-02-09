import { ThemeOptions } from "@/model/theme.type";
import { themeFromSourceColor, argbFromHex, hexFromArgb } from "@material/material-color-utilities";
import { mainColorType } from "@/model/mainColor.type";
import { CorePalette } from "@material/material-color-utilities";
import { Color } from "@/util/color";


// 参数应该加个seed
export function createTheme(name: string, seed: Color, options: Partial<mainColorType>) {

    if (options == null) {
        // callback default theme
    }


    // target初始化为所有颜色的值为null
    let target: Partial<ThemeOptions> = {
        primary: "null",
        onPrimary: "null",
        primaryContainer: "null",
        onPrimaryContainer: "null",
        primaryVariant: "null",
        onPrimaryVariant: "null",
        secondary: "null",
        onSecondary: "null",
        secondaryContainer: "null",
        onSecondaryContainer: "null",
        secondaryVariant: "null",
        onSecondaryVariant: "null",
        tertiary: "null",
        onTertiary: "null",
        tertiaryContainer: "null",
        onTertiaryContainer: "null",
        tertiaryVariant: "null",
        onTertiaryVariant: "null",
        error: "null",
        onError: "null",
        errorContainer: "null",
        onErrorContainer: "null",
        surface: "null",
        onSurface: "null",
        surfaceVariant: "null",
        onSurfaceVariant: "null",
        info: "null",
        onInfo: "null",
        infoContainer: "null",
        onInfoContainer: "null",
        warn: "null",
        onWarn: "null",
        WarnContainer: "null",
        onWarnContainer: "null",
        outline: "null",
        "primary-0": "null",
        "primary-1": "null",
        "primary-2": "null",
        "primary-3": "null",
        "primary-4": "null",
        "primary-5": "null",
        "primary-6": "null",
        "primary-7": "null",
        "primary-8": "null",
        "primary-9": "null",
        "secondary-0": "null",
        "secondary-1": "null",
        "secondary-2": "null",
        "secondary-3": "null",
        "secondary-4": "null",
        "secondary-5": "null",
        "secondary-6": "null",
        "secondary-7": "null",
        "secondary-8": "null",
        "secondary-9": "null",
        "tertiary-0": "null",
        "tertiary-1": "null",
        "tertiary-2": "null",
        "tertiary-3": "null",
        "tertiary-4": "null",
        "tertiary-5": "null",
        "tertiary-6": "null",
        "tertiary-7": "null",
        "tertiary-8": "null",
        "tertiary-9": "null",
        "info-0": "null",
        "info-1": "null",
        "info-2": "null",
        "info-3": "null",
        "info-4": "null",
        "info-5": "null",
        "info-6": "null",
        "info-7": "null",
        "info-8": "null",
        "info-9": "null",
        "warn-0": "null",
        "warn-1": "null",
        "warn-2": "null",
        "warn-3": "null",
        "warn-4": "null",
        "warn-5": "null",
        "warn-6": "null",
        "warn-7": "null",
        "warn-8": "null",
        "warn-9": "null",
        "error-0": "null",
        "error-1": "null",
        "error-2": "null",
        "error-3": "null",
        "error-4": "null",
        "error-5": "null",
        "error-6": "null",
        "error-7": "null",
        "error-8": "null",
        "error-9": "null",
        "surface-0": "null",
        "surface-1": "null",
        "surface-2": "null",
        "surface-3": "null",
        "surface-4": "null",
        "surface-5": "null",
        "surface-6": "null",
        "surface-7": "null",
        "surface-8": "null",
        "surface-9": "null",
        "outline-0": "null",
        "outline-1": "null",
        "outline-2": "null",
        "outline-3": "null",
        "outline-4": "null",
        "outline-5": "null",
        "outline-6": "null",
        "outline-7": "null",
        "outline-8": "null",
        "outline-9": "null",
    }

    // 将用户定义好的颜色传入target
    let key: keyof mainColorType;
    for (key in options) {
        target[key] = options[key];
    }


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


    // 参考scheme.js
    /*  a1 for primary
    22 for secondary
    a3 for tertiary
    n1 for background
    n2 for surfaceVariant and outline
    error for error
*/

    // 根据seed生成theme，和官方重叠的字段直接使用，其余部分根据源码折中
    target.primary == "null" ? hexFromArgb(theme.schemes.light.primary) : target.primary;
    target.onPrimary == "null" ? hexFromArgb(theme.schemes.light.onPrimary) : target.onPrimary;
    target.primaryContainer == "null" ? hexFromArgb(theme.schemes.light.primaryContainer) : target.primaryContainer;
    target.onPrimaryContainer == "null" ? hexFromArgb(theme.schemes.light.onPrimaryContainer) : target.onPrimaryContainer;
    target.primaryVariant == "null" ? hexFromArgb(palette.a1.tone(85)) : target.primaryVariant; // randomly select
    target.onPrimaryVariant == "null" ? hexFromArgb(palette.a1.tone(20)) : target.onPrimaryVariant; // randomly select

    target.secondary == "null" ? hexFromArgb(theme.schemes.light.secondary) : target.primary;
    target.onSecondary == "null" ? hexFromArgb(theme.schemes.light.onSecondary) : target.onPrimary;
    target.secondaryContainer == "null" ? hexFromArgb(theme.schemes.light.secondaryContainer) : target.primaryContainer;
    target.onSecondaryContainer == "null" ? hexFromArgb(theme.schemes.light.onSecondaryContainer) : target.onPrimaryContainer;
    target.secondaryVariant == "null" ? hexFromArgb(palette.a2.tone(85)) : target.secondaryVariant;
    target.onSecondaryVariant == "null" ? hexFromArgb(palette.a2.tone(20)) : target.onSecondaryVariant;

    target.tertiary == "null" ? hexFromArgb(theme.schemes.light.tertiary) : target.tertiary;
    target.onTertiary == "null" ? hexFromArgb(theme.schemes.light.onTertiary) : target.onTertiary;
    target.tertiaryContainer == "null" ? hexFromArgb(theme.schemes.light.tertiaryContainer) : target.tertiaryContainer;
    target.onTertiaryContainer == "null" ? hexFromArgb(theme.schemes.light.onTertiaryContainer) : target.onTertiaryContainer;
    target.tertiaryVariant == "null" ? hexFromArgb(palette.a3.tone(85)) : target.tertiaryVariant;
    target.onTertiaryVariant == "null" ? hexFromArgb(palette.a3.tone(20)) : target.onTertiaryVariant;

    target.info == "null" ? hexFromArgb(theme.customColors[0].light.color) : target.info;
    target.onInfo == "null" ? hexFromArgb(theme.customColors[0].light.onColor) : target.onInfo;
    target.infoContainer == "null" ? hexFromArgb(theme.customColors[0].light.colorContainer) : target.infoContainer;
    target.onInfoContainer == "null" ? hexFromArgb(theme.customColors[0].light.onColorContainer) : target.onInfoContainer;

    target.warn == "null" ? hexFromArgb(theme.customColors[1].light.color) : target.warn;
    target.onWarn == "null" ? hexFromArgb(theme.customColors[1].light.onColor) : target.onWarn;
    target.WarnContainer == "null" ? hexFromArgb(theme.customColors[1].light.colorContainer) : target.WarnContainer;
    target.onWarnContainer == "null" ? hexFromArgb(theme.customColors[1].light.onColorContainer) : target.onWarnContainer;

    target.error == "null" ? hexFromArgb(theme.schemes.light.error) : target.error;
    target.onError == "null" ? hexFromArgb(theme.schemes.light.onError) : target.onError;
    target.errorContainer == "null" ? hexFromArgb(theme.schemes.light.errorContainer) : target.errorContainer;
    target.onErrorContainer == "null" ? hexFromArgb(theme.schemes.light.onErrorContainer) : target.onErrorContainer;

    target.surface == "null" ? hexFromArgb(theme.schemes.light.surface) : target.surface;
    target.onSurface == "null" ? hexFromArgb(theme.schemes.light.onSurface) : target.onSurface;
    target.surfaceVariant == "null" ? hexFromArgb(theme.schemes.light.surfaceVariant) : target.surfaceVariant;
    target.onSurfaceVariant == "null" ? hexFromArgb(theme.schemes.light.onSurfaceVariant) : target.onSurfaceVariant;

    target.outline == "null" ? hexFromArgb(theme.schemes.light.outline) : target.outline;

    target["primary-0"] = hexFromArgb(palette.a1.tone(0));
    target["primary-1"] = hexFromArgb(palette.a1.tone(10));
    target["primary-2"] = hexFromArgb(palette.a1.tone(20));
    target["primary-3"] = hexFromArgb(palette.a1.tone(30));
    target["primary-4"] = hexFromArgb(palette.a1.tone(40));
    target["primary-5"] = hexFromArgb(palette.a1.tone(50));
    target["primary-6"] = hexFromArgb(palette.a1.tone(60));
    target["primary-7"] = hexFromArgb(palette.a1.tone(70));
    target["primary-8"] = hexFromArgb(palette.a1.tone(80));
    target["primary-9"] = hexFromArgb(palette.a1.tone(90));

    target["secondary-0"] = hexFromArgb(palette.a2.tone(0));
    target["secondary-1"] = hexFromArgb(palette.a2.tone(10));
    target["secondary-2"] = hexFromArgb(palette.a2.tone(20));
    target["secondary-3"] = hexFromArgb(palette.a2.tone(30));
    target["secondary-4"] = hexFromArgb(palette.a2.tone(40));
    target["secondary-5"] = hexFromArgb(palette.a2.tone(50));
    target["secondary-6"] = hexFromArgb(palette.a2.tone(60));
    target["secondary-7"] = hexFromArgb(palette.a2.tone(70));
    target["secondary-8"] = hexFromArgb(palette.a2.tone(80));
    target["secondary-9"] = hexFromArgb(palette.a2.tone(90));

    target["tertiary-0"] = hexFromArgb(palette.a3.tone(0));
    target["tertiary-1"] = hexFromArgb(palette.a3.tone(10));
    target["tertiary-2"] = hexFromArgb(palette.a3.tone(20));
    target["tertiary-3"] = hexFromArgb(palette.a3.tone(30));
    target["tertiary-4"] = hexFromArgb(palette.a3.tone(40));
    target["tertiary-5"] = hexFromArgb(palette.a3.tone(50));
    target["tertiary-6"] = hexFromArgb(palette.a3.tone(60));
    target["tertiary-7"] = hexFromArgb(palette.a3.tone(70));
    target["tertiary-8"] = hexFromArgb(palette.a3.tone(80));
    target["tertiary-9"] = hexFromArgb(palette.a3.tone(90));

    target["info-0"] = hexFromArgb(CorePalette.of(theme.customColors[0].value).a1.tone(0));
    target["info-1"] = hexFromArgb(CorePalette.of(theme.customColors[0].value).a1.tone(10));
    target["info-2"] = hexFromArgb(CorePalette.of(theme.customColors[0].value).a1.tone(20));
    target["info-3"] = hexFromArgb(CorePalette.of(theme.customColors[0].value).a1.tone(30));
    target["info-4"] = hexFromArgb(CorePalette.of(theme.customColors[0].value).a1.tone(40));
    target["info-5"] = hexFromArgb(CorePalette.of(theme.customColors[0].value).a1.tone(50));
    target["info-6"] = hexFromArgb(CorePalette.of(theme.customColors[0].value).a1.tone(60));
    target["info-7"] = hexFromArgb(CorePalette.of(theme.customColors[0].value).a1.tone(70));
    target["info-8"] = hexFromArgb(CorePalette.of(theme.customColors[0].value).a1.tone(80));
    target["info-9"] = hexFromArgb(CorePalette.of(theme.customColors[0].value).a1.tone(90));

    target["warn-0"] = hexFromArgb(CorePalette.of(theme.customColors[1].value).a1.tone(0));
    target["warn-1"] = hexFromArgb(CorePalette.of(theme.customColors[1].value).a1.tone(10));
    target["warn-2"] = hexFromArgb(CorePalette.of(theme.customColors[1].value).a1.tone(20));
    target["warn-3"] = hexFromArgb(CorePalette.of(theme.customColors[1].value).a1.tone(30));
    target["warn-4"] = hexFromArgb(CorePalette.of(theme.customColors[1].value).a1.tone(40));
    target["warn-5"] = hexFromArgb(CorePalette.of(theme.customColors[1].value).a1.tone(50));
    target["warn-6"] = hexFromArgb(CorePalette.of(theme.customColors[1].value).a1.tone(60));
    target["warn-7"] = hexFromArgb(CorePalette.of(theme.customColors[1].value).a1.tone(70));
    target["warn-8"] = hexFromArgb(CorePalette.of(theme.customColors[1].value).a1.tone(80));
    target["warn-9"] = hexFromArgb(CorePalette.of(theme.customColors[1].value).a1.tone(90));

    target["error-0"] = hexFromArgb(palette.error.tone(0));
    target["error-1"] = hexFromArgb(palette.error.tone(10));
    target["error-2"] = hexFromArgb(palette.error.tone(20));
    target["error-3"] = hexFromArgb(palette.error.tone(30));
    target["error-4"] = hexFromArgb(palette.error.tone(40));
    target["error-5"] = hexFromArgb(palette.error.tone(50));
    target["error-6"] = hexFromArgb(palette.error.tone(60));
    target["error-7"] = hexFromArgb(palette.error.tone(70));
    target["error-8"] = hexFromArgb(palette.error.tone(80));
    target["error-9"] = hexFromArgb(palette.error.tone(90));

    target["surface-0"] = hexFromArgb(CorePalette.of(theme.schemes.light.surface).a1.tone(0));
    target["surface-1"] = hexFromArgb(CorePalette.of(theme.schemes.light.surface).a1.tone(10));
    target["surface-2"] = hexFromArgb(CorePalette.of(theme.schemes.light.surface).a1.tone(20));
    target["surface-3"] = hexFromArgb(CorePalette.of(theme.schemes.light.surface).a1.tone(30));
    target["surface-4"] = hexFromArgb(CorePalette.of(theme.schemes.light.surface).a1.tone(40));
    target["surface-5"] = hexFromArgb(CorePalette.of(theme.schemes.light.surface).a1.tone(50));
    target["surface-6"] = hexFromArgb(CorePalette.of(theme.schemes.light.surface).a1.tone(60));
    target["surface-7"] = hexFromArgb(CorePalette.of(theme.schemes.light.surface).a1.tone(70));
    target["surface-8"] = hexFromArgb(CorePalette.of(theme.schemes.light.surface).a1.tone(80));
    target["surface-9"] = hexFromArgb(CorePalette.of(theme.schemes.light.surface).a1.tone(90));

    target["outline-0"] = hexFromArgb(CorePalette.of(theme.schemes.light.outline).a1.tone(0));
    target["outline-1"] = hexFromArgb(CorePalette.of(theme.schemes.light.outline).a1.tone(10));
    target["outline-2"] = hexFromArgb(CorePalette.of(theme.schemes.light.outline).a1.tone(20));
    target["outline-3"] = hexFromArgb(CorePalette.of(theme.schemes.light.outline).a1.tone(30));
    target["outline-4"] = hexFromArgb(CorePalette.of(theme.schemes.light.outline).a1.tone(40));
    target["outline-5"] = hexFromArgb(CorePalette.of(theme.schemes.light.outline).a1.tone(50));
    target["outline-6"] = hexFromArgb(CorePalette.of(theme.schemes.light.outline).a1.tone(60));
    target["outline-7"] = hexFromArgb(CorePalette.of(theme.schemes.light.outline).a1.tone(70));
    target["outline-8"] = hexFromArgb(CorePalette.of(theme.schemes.light.outline).a1.tone(80));
    target["outline-9"] = hexFromArgb(CorePalette.of(theme.schemes.light.outline).a1.tone(90));



    return {
        name,
        options: target as ThemeOptions,
    };
}
