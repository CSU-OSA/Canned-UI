import { ThemeOptions } from "@/model/theme.type";
import { themeFromSourceColor } from "@material/material-color-utilities";
import { mainColorType, mainColorTypeKey } from "@/model/mainColor.type";


export function createTheme(name: string, options: Partial<ThemeOptions>) {


    let notContain: mainColorType = {
        primary: true,
        secondary: true,
        tertiary: true,
        info: true,
        warn: true,
        error: true,
        surface: true,
        outline: true
    }

    let list = new Array("primary", "secondary", "tertiary", "info", "warn", "error", "surface", "outline");


    Object.keys(options).forEach(key => {
        list = list.filter(item => {
            return key.toLowerCase().search(item) == -1;
        })
    })


    // 写法较为繁琐，但是用list.foreach会出现类型错误，目前先这么写
    let key: keyof mainColorType
    for (key in notContain) {
        if(key in list)
            notContain[key] = false;
    }


    return {
        name,
        options: options as ThemeOptions,
        // 提供数组和对象两种返回形式，后期可按需删除其中一种
        // 以对象的方式返回未包含的基础色，value为true意为已包含，为false意为未包含
        notContainObject: notContain as mainColorType,
        // 以数组的形式返回的未包含的基础色
        notContainList: list as Array<string>
    };
}