import {atom, atomFamily, selector, selectorFamily} from "recoil";
import axios from "axios";
// import contents from "../contents.json"

// export const TestList = atom({
//     "key": "TestList",
//     "default": contents
// })
const contents: IQuestion[] = [
    {
        "id": 1,
        "title": "Q. 진상 환자로부터 모진말을 들어서 기분이 좋지 않다.",
        "answerA": ["A. 계속 생각해서 좋을 게 없다. 잊어버리자.", "T"],
        "answerB": ["A. 너무 속상하다. 이따 친구한테 다 털어 놓아야지.", "F"]
    },
    {
        "id": 2,
        "title": "Q. 어려운 병명이나 증상을 환자에게 어떻게 설명할 것인가?",
        "answerA": ["A. 최대한 쉽게 풀어 설명해드린다..", "T"],
        "answerB": ["A. 별로 어렵지 않았겠지? 이해했따고 믿는다.", "F"]
    },
    {
        "id": 3,
        "title": "Q. 저녁 뭐먹을까?",
        "answerA": ["A. Pizza", "T"],
        "answerB": ["A. CheesePizza", "F"]
    }
]

export const QuestionList = atom<IQuestion[]>({
    "key": "TestList",
    "default": contents,
})


export const QuestionIdx = atom<number>({
    key: "QuestionIdx",
    default: 1
})


export interface IQuestion {
    "id": number,
    "title": string,
    "answerA": [string, string],
    "answerB": [string, string]
}


export const currentQuestion = selector({
    key: "currentQuestion",
    get: ({get}) => {
        const questions = get(QuestionList)
        const currentIdx = get(QuestionIdx)

        // const data = await axios.get("http://localhost:5000/questions") // http 쓰지 않으면 cors 에러 난다.
        // console.log("data", data)
        return questions.filter(question => question.id === currentIdx)[0]
    },
    // set: ({set}) => {
    // }
})

export const currentQuestion2 = selector({
    key: "currentQuestion2",
    get: async ({get}) => {
        const questions = get(QuestionList)
        const currentIdx = get(QuestionIdx)

        const response = await axios.get("http://localhost:4000/hospital") // http 쓰지 않으면 cors 에러 난다.
        const data = response.data
        console.log("data", data)
        return data.filter((question: { id: number; }) => question.id === currentIdx)[0]
    },
    // set: ({set}) => {
    // }
})

