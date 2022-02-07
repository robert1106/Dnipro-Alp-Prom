import React, {useState} from "react";
import BlockOne from "../Block-one/block-one";
import Nav from "../Nav/nav";
import BlockTwo from "../Block-two/block-two";
import BlockThree from "../Block-three/block-three";
import BlockFour from "../Block-four/block-four";
import BlockFive from "../Block-five/block-five";
import BlockSix from "../Block-six/block-six";
import Footer from "../Footer/footer";
import Modal from "../Modal/modal";
import CallbackModal from "../Modal/contents-modal/Callbac-modal/callback-modal";

export default function App() {

    const [lang, setLang] = useState("ua");
    const [showModal, setShowModal] = useState({callback: false, faq: false});

    return (
        <>
            <Nav lang={lang} setLang={setLang}/>
            <BlockOne lang={lang} setShowModal={setShowModal}/>
            <BlockTwo lang={lang} setShowModal={setShowModal}/>
            <BlockThree lang={lang}/>
            <BlockFour lang={lang}/>
            <BlockFive lang={lang}/>
            <BlockSix lang={lang} setShowModal={setShowModal}/>
            <Footer lang={lang}/>
            {showModal.callback && <Modal setShowModal={setShowModal}
                                          content={<CallbackModal lang={lang} showFaq={showModal.faq}/>}/>
            }
        </>
    )
}