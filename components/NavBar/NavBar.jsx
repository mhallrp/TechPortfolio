'use client'
import { useState } from "react";
import Styles from './styles.module.css';
import navBarValues from './constants'

const NavBar = () => {

    const [activeSection, setActiveSection] = useState("Home");
    
    const scrollTo = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
        setActiveSection(sectionId)
    };

    return (
        <div className={ Styles.navBar }>
            <div className={ Styles.navSection }>
                <div className={ Styles.leftSection }>
                    <h1 className={ Styles.navTitle }>{ navBarValues.name }</h1>
                </div>
                <div className={ Styles.centerSection }>
                    {navBarValues.navButtons.map(value =>
                        <button className={ activeSection === value && Styles.buttonSelected} onClick={ () => scrollTo(value) }>{ value }</button>
                    )}
                </div>
                <div className={ Styles.rightSection }>
                    <button className={ Styles.navContact }>{ navBarValues.contact }</button>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
