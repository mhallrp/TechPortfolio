import Styles from './page.module.css'
import NavBar from "../components/NavBar"
import LaptopFire from "../assets/laptopFire.png"
import MattImage from "../assets/mattImage.png"
import SkillCard from "../components/SkillsCard"
import Image from "next/image"
import { landingText } from './constants'

const Landing = () => {
    return (
        <div>
            <NavBar />
            <section id="topContent" className={ Styles.topContent }>
                <div className={ Styles.topTextSection } >
                    <div className={ Styles.topText }>
                    <p className={ Styles.helloText }>
                        { landingText.helloText }
                    </p>
                    <h1 className={ Styles.topMainText }>
                        { landingText.topTitle }
                    </h1>
                    <p className={ Styles.topSkills }>
                        { landingText.topSkills }
                    </p>
                    </div>
                </div>
                  <Image className={ Styles.topImage } src={ LaptopFire.src } alt="fire" height="619" width="500"/>
            </section>
            <section id="skillsSection" className={ Styles.skillsSection }>
                <p >
                    { landingText.smallSkills }
                </p>
                <p className={ Styles.largeTitle }>
                    { landingText.bigSKills }
                </p>
                <div className={ Styles.skillCards }>
                    { landingText.skillsData.map(skill => (
                        <SkillCard key={skill.id} image={skill.id} title={skill.title} text={skill.text} />
                    )) }
                </div>
            </section>
            <section id="aboutSection" className={ Styles.aboutSection }>
                <div className={ Styles.aboutData }>
                    <img className={ Styles.mattImage } src={ MattImage.src } alt="Matt Hall" />
                    <div className={ Styles.aboutText }>
                        <p>{ landingText.smallAbout }</p>
                        <p className={ Styles.largeTitle }>
                            { landingText.bigAbout }
                        </p>
                        <p className={ Styles.aboutMainText }>
                            { landingText.aboutMainText }
                        </p>
                    </div>
                </div>
            </section>
            <section className={ Styles.footer }></section>
        </div>
    );
};

export default Landing;
