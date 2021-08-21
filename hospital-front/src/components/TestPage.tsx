import "../style/Testpage.css"
import poster from "../슬의.png";
import contents from "../contents.json"
import {log} from "util";
const TestPage = () => {

    contents.map(content => {
        console.log(content.title, content.answerA, content.answerB)
    })

    return (
        <section id="main_contents">
            <div className="wrapper">
                <div className="title">

                    <div className="question_container" style={{"position": "relative"}}>
                        Q. 동료 인턴이 부탁을 한다. <br/>어떻게 할까?
                    </div>
                    <div className="subtitles">
                    </div>
                </div>
                <div className="answers">
                    <div className="answers_wrap">
                        A. 익준이가 어쩌구
                    </div>
                    <div className="answers_wrap">
                        A. 준완이가 저쩌구
                    </div>

                    <div className="status-bar">
                        <div className="current-status">

                        </div>
                    </div>
                </div>
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