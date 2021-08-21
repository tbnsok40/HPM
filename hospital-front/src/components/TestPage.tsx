import "../style/Testpage.css"
import {useRecoilState, useRecoilValue} from "recoil";
import {currentQuestion, currentQuestion2, IQuestion, QuestionIdx} from "../store/store";
import {useEffect, useState} from "react";
import QuestionArea from "./QuestionArea";
import poster from "../슬의.png";


const TestPage = () => {

    const [idx, setIdx] = useRecoilState(QuestionIdx)
    const currQuestion = useRecoilValue(currentQuestion);
    const currQuestion2 = useRecoilValue(currentQuestion2);
    console.log("2", currQuestion2)

    useEffect(()=> {
    }, [idx])



    return (
        <section id="main_contents">
            <div className="wrapper">

                <QuestionArea {...currQuestion2}/>

                <div className="bottom">
                    <div className="test-photo">
                        <img id="test-poster" src={poster} alt="슬의"/>
                        <div> 내가 율제 병원<br/> 인턴이라면?
                        </div>
                    </div>
                </div>
            </div>
        </section>)
}

export default TestPage;