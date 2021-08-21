import {useRecoilState} from "recoil";
import {QuestionIdx} from "../store/store";
import styled from "styled-components";

const QuestionArea = ({...currQuestion2}) => {
    const {id, title, answerA, answerB, answerAType, answerBType} = currQuestion2
    console.log(id, title, answerA, answerB, answerAType, answerBType)
    const [idx, setIdx] = useRecoilState(QuestionIdx)

    const ToNextStep = (e:any) => {
        e.preventDefault()
        setIdx(idx + 1)
    }


    const StatusBar = styled.div`
      width: ${(idx - 1) * 9.1}%;
      height: 30px;
      border-radius: 50px 0px 0px 50px;
      background-color: #76bfe4;
    `;



    return (
        <>
            <div className="title">
                <div className="question_container" style={{"position": "relative"}}>
                    Q. {title}
                </div>
                <div className="subtitles">
                </div>
            </div>
            <div className="answers">
                <div className="answers_wrap" onClick={(e) => ToNextStep(e)}>
                    {answerA}
                </div>
                <div className="answers_wrap" onClick={(e) => ToNextStep(e)}>
                    {answerB}
                </div>

                <div className="status-bar">
                    <StatusBar/>
                </div>
            </div>
        </>
    )
}

export default QuestionArea;