import "../style/Testpage.css"
import {useRecoilValue} from "recoil";
import {currentQuestion, QuestionIdx} from "../store/store";
import {useEffect} from "react";
import QuestionArea from "./QuestionArea";
import poster from "../슬의.png";


const TestPage = () => {

    const idx = useRecoilValue(QuestionIdx)
    const currQuestion = useRecoilValue(currentQuestion);

    useEffect(()=> {
    }, [idx])

    return (
        <section id="main_contents">
            <div className="wrapper">

                <QuestionArea {...currQuestion}/>

                <div className="bottom">
                    <div className="test-photo">
                        <img id="test-poster" src={poster} alt="슬의"/>
                        <div> 내가 율제 병원<br/> 인턴이라면?
                        </div>
                    </div>
                </div>
            </div>
        </section>);
}

export default TestPage;