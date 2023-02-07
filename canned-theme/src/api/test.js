let list = new Array("primary", "secondary", "tertiary", "info", "warn", "error", "surface", "outline");

let option = {
  "primaryContainer": "#000",
  "secondaryContainer": "#fff",
  "tertiaryContainer": "#eee",
  "onTertiaryVariant": "#ddd",
  "onInfoContainer": "#444",
  "warn": "#ccc"
}

let notContain = {
  primary: true,
  secondary: true,
  tertiary: true,
  info: true,
  warn: true,
  error: true,
  surface: true,
  outline: true
}

Object.keys(option).forEach(key => {
  list = list.filter(item => {
    return key.toLowerCase().search(item) == -1;
  })

})

list.forEach(key=>{
  notContain[key] = false;
})

console.log(notContain)

