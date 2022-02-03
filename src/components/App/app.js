import React, {Component} from "react";
import BlockOne from "../BlockOne/block-one";
import Nav from "../Nav/nav";
import BlockTwo from "../BlockTwo/block-two";

export default class App extends Component {

    setLang = (lang) => {
        this.setState({lang})
    }

    state = {
        lang: "ua",
        setLang: this.setLang,
    }

    render() {
        return (
            <>
                <Nav state={this.state}/>
                <BlockOne lang={this.state.lang}/>
                <BlockTwo lang={this.state.lang}/>
            </>
        )
    }
}