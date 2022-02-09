import React, {useState} from "react"
import uniqid from 'uniqid';

import './carousel.css'

export default function Carousel({lang, data}) {

    const [transform, setTransform] = useState("");
    const WIDTH_IMG = 222;

    return (
        <>
            <div className="section">
                <div className="carousel-wrap-btn-left">
                    <button className="carousel-btn-left"/>
                </div>
                <div className="wrap-section">
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
                    <button className="carousel-btn-right"/>
                </div>
            </div>
        </>
    )
}