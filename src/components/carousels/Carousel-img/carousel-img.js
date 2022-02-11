import React, {useState, useEffect} from "react"
import uniqid from 'uniqid';

import './carousel-img.css'

export default function CarouselImg({lang, data}) {

    const [transform, setTransform] = useState(0);
    const [activeBtnLeft, setActiveBtnLeft] = useState(false);
    const [activeBtnRight, setActiveBtnRight] = useState(false);
    const WIDTH_IMG = 222;
    const LENGTH_DATA = data.length * WIDTH_IMG;
    const WIDTH_SECTION = 1110;

    useEffect(() => {
        if (LENGTH_DATA > WIDTH_SECTION) {
            setActiveBtnRight(true)
        }
    }, [])

    function clickBtnLeft() {
        if(transform === 0) {
            setActiveBtnLeft(false);
        } else {
            setTransform(transform + WIDTH_IMG);
            setActiveBtnRight(true);
            if ((transform + WIDTH_IMG) === 0) {
                setActiveBtnLeft(false);
            }
        }
    }

    function clickBtnRight() {
        if((LENGTH_DATA + transform) === WIDTH_SECTION) {
            setActiveBtnRight(false);
        } else {
            setTransform(transform - WIDTH_IMG);
            setActiveBtnLeft(true);
            if ((LENGTH_DATA + transform - WIDTH_IMG) === WIDTH_SECTION) {
                setActiveBtnRight(false);
            }
        }
    }

    return (
        <>
            <div className="section">
                <div className="carousel-wrap-btn-left">
                    <button className={"carousel-btn-left " + (!activeBtnLeft && "inactive-btn")}
                            onClick={() => activeBtnLeft && clickBtnLeft()}/>
                </div>
                <div className="wrap-section" style={{left: transform}}>
                    {data.map((img) => {
                        return (
                            <div className="carousel-item" key={uniqid()}>
                                <img src={img.photo} alt="image carousel" className="carousel-img"/>
                                <span className="carousel-span">{
                                    lang === "ua"
                                        ? img.title.ua
                                        : img.title.ru}
                                </span>
                            </div>
                        )
                    })}
                </div>
                <div className="carousel-wrap-btn-right">
                    <button className={"carousel-btn-right " + (!activeBtnRight && "inactive-btn")}
                            onClick={() => activeBtnRight && clickBtnRight()}/>
                </div>
            </div>
        </>
    )
}