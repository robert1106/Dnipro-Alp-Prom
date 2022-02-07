import React, {useState} from "react";
import Modal from 'react-bootstrap/Modal'

import Nav from "../Nav/nav";
import BlockOne from "../Block-one/block-one";
import BlockTwo from "../Block-two/block-two";
import BlockThree from "../Block-three/block-three";
import BlockFour from "../Block-four/block-four";
import BlockFive from "../Block-five/block-five";
import BlockSix from "../Block-six/block-six";
import Footer from "../Footer/footer";
import CallbackModal from "../Callbac-modal/callback-modal";
import PriceTable from "../Price-table/price-table";

import './app.css'

export default function App() {

    const [lang, setLang] = useState("ua");
    const [showModal, setShowModal] = useState({callback: false, faq: false, price: false});
    const handleClose = () => setShowModal({callback: false, faq: false, price: false});

    return (
        <>
            <Nav lang={lang} setLang={setLang}/>
            <BlockOne lang={lang} setShowModal={setShowModal}/>
            <BlockTwo lang={lang} setShowModal={setShowModal}/>
            <BlockThree lang={lang}/>
            <BlockFour lang={lang}/>
            <BlockFive lang={lang} setShowModal={setShowModal}/>
            <BlockSix lang={lang} setShowModal={setShowModal}/>
            <Footer lang={lang}/>
            <Modal contentClassName="modal-content-callback" show={showModal.callback} onHide={handleClose}>
                <button className="modal-close-btn" onClick={() => {handleClose()}}>&#10006;</button>
                <CallbackModal lang={lang} showFaq={showModal.faq}/>
            </Modal>
            <Modal contentClassName="modal-content-price" show={showModal.price} onHide={handleClose}>
                <button className="modal-close-btn" onClick={() => {handleClose()}}>&#10006;</button>
                <PriceTable lang={lang} />
            </Modal>
        </>
    )
}