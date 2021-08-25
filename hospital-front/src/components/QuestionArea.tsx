import {useRecoilState, useRecoilValue, useResetRecoilState} from "recoil";
import {initQuestionList, QuestionIdx} from "../store/store";
// import styled from "styled-components";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

const QuestionArea = () => {
    // const [init, setInit] = useState(true)
    const [idx, setIdx] = useRecoilState(QuestionIdx)
    const resetIdx = useResetRecoilState(QuestionIdx)
    useEffect(() => {
        resetIdx()
    }, [resetIdx])
    // const [currQuestion, setQuestions] = useState<IQuestion[]>([
    //     {
    //         "id": 0,
    //         "title": '',
    //         "answerA": '',
    //         "answerB": '',
    //         "answerAType": '',
    //         "answerBType": '',
    //     }]
    // );
    const currentQuestion = useRecoilValue(initQuestionList(idx))

    // const getInitQuestions = async () => {
    //     const response = await axios.get("http://localhost:4000/hospital") // http 쓰지 않으면 cors 에러 난다.
    //     const data = response.data
    //     setQuestions(data)
    // }
    // useEffect(() => {
        // getInitQuestions();
    // }, [init]);

    useEffect(() => {
    }, [idx])


    const [typeArray, setTypeArray] = useState<string[]>([])

    const ToNextStep = async (e: any, answerType: string) => {
        setTypeArray([...typeArray, answerType]);

        if (idx <= 10) {
            setIdx(idx + 1);
        } else if (idx === 11) {
            resetIdx()

            await axios.post("http://localhost:4000/hospital/postAnswers", {
                "array": [...typeArray, answerType]
            }) // http 쓰지 않으면 cors 에러 난다.

        }
        console.log(typeArray)
    }



    return (
        <div className="test-bottom">
            <div className="question-container">
                {/*Q. {currQuestion && currQuestion[idx].title}*/}
                {currentQuestion['title']}
            </div>
            <div className="answers">
                <div className="answers_wrap"
                     onClick={(e) => ToNextStep(e,
                         // currQuestion && currQuestion[idx].answerAType
                         currentQuestion['answerAType']
                     )
                     }>
                    {
                        idx < 11
                            ?
                            // (currQuestion && currQuestion[idx].answerA)
                            currentQuestion['answerA']
                            :
                            (<Link to="/resultpage" style={{"textDecoration": "none", "color": "black"}}>
                                {/*{currQuestion && currQuestion[idx].answerA}*/}
                                {currentQuestion['answerA']}
                            </Link>)
                    }
                </div>
                <div className="answers_wrap"
                     onClick={(e) => ToNextStep(e,
                         // currQuestion && currQuestion[idx].answerBType
                         currentQuestion['answerBType']
                     )
                     }>
                    {
                        idx < 11
                            ?
                            // (currQuestion && currQuestion[idx].answerB)
                            currentQuestion['answerB']
                            :
                            (<Link to="/resultpage" style={{"textDecoration": "none", "color": "black"}}>
                                {/*{currQuestion && currQuestion[idx].answerB}*/}
                                {currentQuestion['answerB']}
                            </Link>)
                    }
                </div>
            </div>

            <div className="status-bar">
                {/*<StatusBar/>*/}
                {/*굳이 styled-componenets 로 하지말고 컴포넌트로 만들어보자*/}
            </div>
        </div>
    );
}

export default QuestionArea;