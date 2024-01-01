import React from "react";
import Styles from './styles.module.css';

const NavBar = (props) => {
    return (
        <div className={ Styles.navBar } style={{ height: `70px` }}>
            <div className={ Styles.navSection }>
                <div className={ Styles.leftSection }>
                    <h1 className={ Styles.navTitle }>MATT HALL</h1>
                </div>
                <div className={Styles.centerSection}>
                    <a className={ Styles.navButton } href="#topContent">Home</a>
                    <a className={ Styles.navButton } href="#skillsSection">Skills</a>
                    <a className={ Styles.navButton } href="#aboutSection">About Me</a>
                    <a className={ Styles.navButton } href="#portfolioSection">Portfolio</a>
                </div>
                <div className={Styles.rightSection}>
                    <button className={Styles.navContact}>Contact Me</button>
                </div>
            </div>
        </div>
    );
};

export default NavBar;