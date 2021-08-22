import {useRecoilState, useResetRecoilState} from "recoil";
import {IQuestion, QuestionIdx} from "../store/store";
import styled from "styled-components";
import {Link, useLocation} from "react-router-dom";
import {log} from "util";
import axios from "axios";
import {useEffect, useState} from "react";
import {type} from "os";

let i = 0;
const QuestionArea = () => {
    const resetIdx = useResetRecoilState(QuestionIdx)
    useEffect(() => {
        resetIdx()
    }, [resetIdx])
    const location = useLocation();
    const [init, setInit] = useState(true)
    const [idx, setIdx] = useRecoilState(QuestionIdx)
    const [currQuestion, setQuestions] = useState<IQuestion[]>([
        {
            "id": 0,
            "title": '',
            "answerA": '',
            "answerB": '',
            "answerAType": '',
            "answerBType": '',
        }]
    );
    const getInitQuestions = async () => {
        const response = await axios.get("http://localhost:4000/hospital") // http 쓰지 않으면 cors 에러 난다.
        const data = response.data
        setQuestions(data)
    }
    useEffect(() => {
        console.log(++i)
        getInitQuestions();
        console.log('location', location)
    }, [init, location]);

    useEffect(() => {
    }, [idx])



    const [typeArray, setTypeArray]= useState<string[] >([])

    const ToNextStep = async (e: any, answerType: string) => {
        console.log("++++++++++++++++++++++++++==배열", typeArray)
        setTypeArray([...typeArray, answerType]);

        if (idx <= 10) {
            setIdx(idx + 1);
        }else if(idx === 11) {
            resetIdx()

            await axios.post("http://localhost:4000/hospital/postAnswers", {
                "array" :[...typeArray, answerType]
            }) // http 쓰지 않으면 cors 에러 난다.

        }
    }

    // const StatusBar = styled.div`
    //   width: ${(idx) * 9.1}%;
    //   height: 30px;
    //   border-radius: 50px 0px 0px 50px;
    //   background-color: #76bfe4;
    // `;

    // if (idx === 12) {
    //     StatusBar = styled.div`
    //       width: 100%;
    //       height: 30px;
    //       border-radius: 50px 50px 50px 50px;
    //       background-color: #76bfe4;
        //` ;
//     }


    return (
        <div className="test-bottom">
            <div className="question-container">
                Q. {currQuestion && currQuestion[idx].title}
            </div>
            <div className="answers">
                {idx < 11 &&
                <>
                    <div className="answers_wrap"
                         onClick={(e) => ToNextStep(e, currQuestion && currQuestion[idx].answerAType)
                         }>
                        {currQuestion && currQuestion[idx].answerA}
                    </div>
                    <div className="answers_wrap"
                         onClick={(e) => ToNextStep(e, currQuestion && currQuestion[idx].answerBType)}>
                        {currQuestion && currQuestion[idx].answerB}
                    </div>
                </>
                }

                {idx === 11 &&
                <>
                    <div className="answers_wrap"
                         onClick={(e) => ToNextStep(e, currQuestion && currQuestion[idx].answerAType)}>
                        <Link to="/resultpage" style={{"textDecoration": "none", "color": "black"}}>
                            {currQuestion && currQuestion[idx].answerA}
                        </Link>
                    </div>


                    <div className="answers_wrap"
                         onClick={(e) => ToNextStep(e, currQuestion && currQuestion[idx].answerBType)}>
                        <Link to="/resultpage" style={{"textDecoration": "none", "color": "black"}}>
                            {currQuestion && currQuestion[idx].answerB}
                        </Link>
                    </div>
                </>
                }

            </div>

            <div className="status-bar">
                {/*<StatusBar/>*/}
                {/*굳이 styled-componenets 로 하지말고 컴포넌트로 만들어보자*/}
            </div>
        </div>
    );
}

export default QuestionArea;