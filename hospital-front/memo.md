
// 이걸 해주어야 타입이 보장되는 건가?
npm install --save @types/react-router-dom
npm install --save @types/styled-components


// async 때메 redirection 이 일어날 수도 있나?


```typescript
const mbti = {
    "E" : 2,
    "I" : 1,

    "S":1,
    "N":2,

    "F" : 3,
    "T":0,

    "P":0,
    "J":3
}
const result = []
const IE = ["I", "E"]
const SN = ["S", "N"]
const TF = ["T", "F"]
const JP = ["J", "P"]
const resultObj = {
    "IE": '',
    "SN" : '',
    "TF" : '',
    "JP" : ''
}
const switchResult = (key) => {
    switch (true) {
        case IE.includes(key):
            result[0] = key
            resultObj.IE = key
            break
        case SN.includes(key):
            result[1] = key
            resultObj.SN = key

            break
        case TF.includes(key):
            result[2] = key
            resultObj.TF = key

            break
        case JP.includes(key):
            result[3] = key // 배열 인덱스로 묶는거 조금 꺼림칙해서, 객체로 바인딩 하는 건 어떨지.
            resultObj.JP = key
            break
    }
}


const switchResult = (key) => {
    switch (true) {
        case "I":
        case "E":
            result[0] = key
            break
        case "F":
        case "T":
            result[2] = key
            break
        case "S":
        case "N":
            result[1] = key
            break
        case "P":
        case "J":
            result[3] = key
            break
    }
}
for (let key in mbti) {
    if (mbti[key] > 1) {
            switchResult(key)
        }
    }
console.log(result, resultObj)

// til case or 조건 =>
// in 연산자 : index 를 기준으로 탐색한다.
