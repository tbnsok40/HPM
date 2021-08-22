import {atom, selector} from "recoil";
import axios from "axios";


export const QuestionList = atom<IQuestion[]>({
    "key": "TestList",
    "default": [],
})


export const QuestionIdx = atom<number>({
    key: "QuestionIdx",
    default: 0
})


export interface IQuestion {
    "id": number,
    "title": string,
    "answerA": string,
    "answerB": string,
    "answerAType": string,
    "answerBType": string,
}

export const currentQuestion = selector({
    key: "currentQuestion",
    get: async ({get}) => {
        const questions = get(QuestionList)
        const currentIdx = get(QuestionIdx)

        const response = await axios.get("http://localhost:4000/hospital") // http 쓰지 않으면 cors 에러 난다.
        const data = response.data
        return data.filter((question: { id: number; }) => question.id === currentIdx)[0]
    },
})

