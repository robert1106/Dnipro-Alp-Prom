import React, {useState} from "react";
import BlockOne from "../Block-one/block-one";
import Nav from "../Nav/nav";
import BlockTwo from "../Block-two/block-two";
import BlockThree from "../Block-three/block-three";
import BlockFour from "../Block-four/block-four";
import BlockFive from "../Block-five/block-five";

export default function App() {

    const [lang, setLang] = useState("ua")

    return (
        <>
            <Nav lang={lang} setLang={setLang}/>
            <BlockOne lang={lang}/>
            <BlockTwo lang={lang}/>
            <BlockThree lang={lang}/>
            <BlockFour lang={lang}/>
            <BlockFive lang={lang}/>
        </>
    )
}