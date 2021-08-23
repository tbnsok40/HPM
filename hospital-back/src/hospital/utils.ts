const resultObj = {
  "IE": '',
  "SN" : '',
  "TF" : '',
  "JP" : ''
}
const IE = ["I", "E"]
const SN = ["S", "N"]
const TF = ["T", "F"]
const JP = ["J", "P"]

export const switchResult = (key) => {
  switch (true) {
    case IE.includes(key):
      resultObj.IE = key
      break
    case SN.includes(key):
      resultObj.SN = key

      break
    case TF.includes(key):
      resultObj.TF = key

      break
    case JP.includes(key):
      resultObj.JP = key
      break
  }
  return resultObj
}
