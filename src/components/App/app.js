import React, {Component, useState} from "react";
import BlockOne from "../BlockOne/block-one";
import Nav from "../Nav/nav";
import BlockTwo from "../BlockTwo/block-two";
import BlockThree from "../BlockThree/block-three";

export default function App() {

    const [lang, setLang] = useState("ua")

    return (
        <>
            <Nav lang={lang} setLang={setLang}/>
            <BlockOne lang={lang}/>
            <BlockTwo lang={lang}/>
            <BlockThree lang={lang}/>
        </>
    )
}