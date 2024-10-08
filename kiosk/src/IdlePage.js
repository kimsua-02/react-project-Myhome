/**
 * IdlePage.js
 * 대기화면
 * 여러 이벤트 페이지를 일정 시간만큼 띄울 것
 * 이미지 클릭 시 메인 메뉴로 이동
 */

import { useEffect, useState } from "react";
import "./IdlePage.css";

const img = ["bam_port.jpg", "decaff_port.jpg", "genshin_port.jpg", "knotted_port.jpg", "teapleasure_port.jpg", "tumbler_port.jpg"];

const IdlePage = () =>
{
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => 
    {
        const intervalid = setInterval(() =>
        {
            setCurrentIndex((currentIndex + 1) % img.length);
        }, 4000);

        return () => clearInterval(intervalid);
    }, [currentIndex]);

    return (
        <div className="idle_image">
            <a href="/mainmenu">
                <h1 className="idle_image_text">주문을 원하시면 클릭해주세요.</h1>
                <img src = { img[currentIndex] } alt = "slide" width="60%"/>
            </a>
        </div>
    )
}

export default IdlePage;