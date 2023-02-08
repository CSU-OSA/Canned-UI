let list = [false, false, false, false, false, false, false, false];

let options = {
  primary: "",
  error: "",
  onError:"aaa",
  "aaa":"bbb"
}

const mainColorList = ["primary", "secondary", "tertiary", "info", "warn", "error", "surface", "outline"]

const map = new Map();

mainColorList.forEach((item, index) => { map.set(item, index); })

Object.keys(options).forEach(key => {
  if (mainColorList.includes(key))
    list[map.get(key)] = true
})

console.log(options["aaa"])


