import {atom, atomFamily, selector} from "recoil";
import axios from "axios";
import contents from '../contents.json';


export const QuestionList = atom<IQuestion[]>({
    "key": "TestList",
    "default": [],
})


// atomfamily의 2번째 타입에 number 써주니 SerializableParam 타입 문제 해결
export const initQuestionList = atomFamily<IQuestion, number>({
    "key": "TestList",
    "default": id => getQuestion(id),
})

const getQuestion = (id: number) => {
    return contents[id]
}

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
        // const questions = get(QuestionList)
        const currentIdx = get(QuestionIdx)

        const response = await axios.get("http://localhost:4000/hospital") // http 쓰지 않으면 cors 에러 난다.
        const data = response.data
        return data.filter((question: { id: number; }) => question.id === currentIdx)[0]
    },
})

