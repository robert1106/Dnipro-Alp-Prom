import React, {useState} from "react";
import uniqid from 'uniqid';
import {experienceBlocks} from "../../data/data-text";
import {imgExperience} from "../../data/data-img";

import './block-three.css'

export default function BlockThree({lang}) {
    return (
        <>
            <div className="block block-three" id="block-3">
                <div className="container block-three-position-content">
                    <h2 className="block-header">{
                        lang === "ua"
                            ? "Ви отримуєте"
                            : "Вы получаете"}
                    </h2>
                    <ul className="experience-list">
                        {experienceBlocks.map((exp, index) => (
                            <li className="experience-item block-three-position-content" key={uniqid()}>
                                <div className="wrap-experience-img">
                                    <img src={
                                        imgExperience[index].active
                                            ? imgExperience[index].imgActive
                                            : imgExperience[index].img}
                                         alt="image experience"
                                         className="experience-img"
                                         onMouseOver={(event) => {
                                             event.target.src = imgExperience[index].imgActive;
                                             event.target.className = "experience-img-active";
                                         }}
                                         onMouseOut={(event) => {
                                             event.target.src = imgExperience[index].img;
                                             event.target.className = "experience-img";
                                         }}/>
                                </div>
                                <title className="experience-title">{lang === "ua"
                                    ? exp.title.ua
                                    : exp.title.ru}
                                </title>
                                <p className="experience-paragraph">{lang === "ua"
                                    ? exp.paragraph.ua
                                    : exp.paragraph.ru}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}