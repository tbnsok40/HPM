import "../style/Testpage.css"
import {useRecoilValue} from "recoil";
import {currentQuestion, QuestionIdx} from "../store/store";
import {useEffect} from "react";
import QuestionArea from "./QuestionArea";
import poster from "../슬의.png";


const TestPage = () => {

    const idx = useRecoilValue(QuestionIdx)
    const currQuestion = useRecoilValue(currentQuestion);

    useEffect(() => {
    }, [idx])

    return (
        <section id="main_contents">
            <div className="wrapper">
                <div className="test-upper">
                    <div className="test-upper-title">
                        내가 율제 병원<br/> 인턴이라면?
                    </div>
                    <img id="test-photo" src={poster} alt="슬의"/>
                </div>

                <QuestionArea {...currQuestion}/>

            </div>
        </section>);
}

export default TestPage;