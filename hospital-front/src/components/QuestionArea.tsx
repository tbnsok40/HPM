import {useRecoilState} from "recoil";
import {QuestionIdx} from "../store/store";
import styled from "styled-components";
import {Link} from "react-router-dom";

const QuestionArea = ({...currQuestion}) => {
    const {id, title, answerA, answerB, answerAType, answerBType} = currQuestion
    const [idx, setIdx] = useRecoilState(QuestionIdx)

    const ToNextStep = (e: any) => {
        e.preventDefault()
        setIdx(idx + 1)
    }


    let StatusBar = styled.div`
      width: ${(idx - 1) * 9.1}%;
      height: 30px;
      border-radius: 50px 0px 0px 50px;
      background-color: #76bfe4;
    `;

    // if (idx === 12) {
    //     StatusBar = styled.div`
    //       width: 100%;
    //       height: 30px;
    //       border-radius: 50px 50px 50px 50px;
    //       background-color: #76bfe4;
    //     `;
    // }


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
                {idx < 12 &&
                <>
                    <div className="answers_wrap" onClick={(e) => ToNextStep(e)}>
                        {answerA}
                    </div>
                    <div className="answers_wrap" onClick={(e) => ToNextStep(e)}>
                        {answerB}
                    </div>
                </>
                }

                {idx === 12 &&
                <>
                    <div className="answers_wrap" onClick={(e) => ToNextStep(e)}>
                        <Link to="/resultpage" style={{"textDecoration": "none", "color": "black"}}>
                            {answerA}
                        </Link>
                    </div>


                    <div className="answers_wrap" onClick={(e) => ToNextStep(e)}>
                        <Link to="/resultpage" style={{"textDecoration": "none", "color": "black"}}>
                            {answerB}
                        </Link>
                    </div>
                </>
                }

                <div className="status-bar">
                    <StatusBar/>
                </div>
            </div>
        </>
    );
}

export default QuestionArea;