import React from "react";
import Styles from "./styles.module.css"
import CodeIcon from "../../assets/codeIcon.png"
import DBIcon from "../../assets/dbIcon.png"
import EditorIcon from "../../assets/editorIcon.png"
import DevIcon from "../../assets/devOpsIcon.png"
import Image from "next/image"

const SkillCard = (props) => {

const image = () => {
    switch(props.image){
        case 1: return  <Image src={ CodeIcon.src } alt="" height="60" width="60"/>
        case 2: return  <Image src={ DBIcon.src } alt="" height="60" width="60"/>
        case 3: return  <Image src={ EditorIcon.src } alt="" height="60" width="60"/>
        default: return  <Image src={ DevIcon.src } alt="" height="60" width="60"/>
    }
}

return (
    <div className={ Styles.skillCard }>
       { image() }
        <h3>{ props.title }</h3>
        <p> { props.text} </p>
    </div>
)
}

export default SkillCard