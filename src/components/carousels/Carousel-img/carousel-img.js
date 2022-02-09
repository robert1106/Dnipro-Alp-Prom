import React, {useState, useEffect} from "react"
import uniqid from 'uniqid';

import './carousel-img.css'

export default function CarouselImg({lang, data}) {

    const [transform, setTransform] = useState(0);
    const [activBtnLeft, setActivBtnLeft] = useState(false);
    const [activBtnRight, setActivBtnRight] = useState(false);
    const WIDTH_IMG = 222;
    const LENGTH_DATA = data.length * WIDTH_IMG;
    const WIDTH_SECTION = 1110;

    useEffect(() => {
        if (LENGTH_DATA > WIDTH_SECTION) {
            setActivBtnRight(true)
        }
    }, [])

    function clickBtnLeft() {
        if(transform === 0) {
            setActivBtnLeft(false);
        } else {
            setTransform(transform + WIDTH_IMG);
            setActivBtnRight(true);
            if ((transform + WIDTH_IMG) === 0) {
                setActivBtnLeft(false);
            }
        }
    }

    function clickBtnRight() {
        if((LENGTH_DATA + transform) === WIDTH_SECTION) {
            setActivBtnRight(false);
        } else {
            setTransform(transform - WIDTH_IMG);
            setActivBtnLeft(true);
            if ((LENGTH_DATA + transform - WIDTH_IMG) === WIDTH_SECTION) {
                setActivBtnRight(false);
            }
        }
    }

    return (
        <>
            <div className="section">
                <div className="carousel-wrap-btn-left">
                    <button className={"carousel-btn-left " + (!activBtnLeft && "inactive-btn")}
                            onClick={() => activBtnLeft && clickBtnLeft()}/>
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
                    <button className={"carousel-btn-right " + (!activBtnRight && "inactive-btn")}
                            onClick={() => activBtnRight && clickBtnRight()}/>
                </div>
            </div>
        </>
    )
}