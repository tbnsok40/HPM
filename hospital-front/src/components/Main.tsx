import "../style/Main.css"
import poster from "../슬의.png"
import {Link} from "react-router-dom";

const Main = () => {
    return (
        <section id="main_contents">
            <div className="wrapper">
                <div className="title">

                    <div className="main_title_container" style={{"position": "relative"}}>
                        내가 율제병원<br/> 인턴이라면

                        <div className="main_title_above"
                             style={{"position": "absolute", "top": "-45px", "right": "1px"}}>
                            ++
                        </div>

                    </div>
                    <div className="subtitles">
                        <div className="sub_title">#슬기로운인턴생활</div>
                        <div className="sub_title">#나는_어떤_의사일까?</div>
                    </div>
                </div>
                <div className="photo">
                    <img id="poster" src={poster} alt="슬의"/>
                </div>
                <div className="button">
                    <Link to={"/testpage"}>
                        <button className="start" type="button">START</button>
                    </Link>
                </div>
                <div className="result_data">
                    <div className="data_wrap">
                        현재 총 n 명이 참여했어요 <br/>
                        (이 부분은 다른 내용 대체 가능)
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Main;
