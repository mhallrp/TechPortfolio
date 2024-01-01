import Styles from './page.module.css'
import NavBar from "../components/NavBar"
import LaptopFire from "../assets/laptopFire.png"
import MattImage from "../assets/mattImage.png"
import SkillCard from "../components/SkillsCard"
import Image from "next/image"
import constants from './constants'

const Landing = () => {
    return (
        <div>
            <NavBar />
            <section id={ constants.sections[0] } className={ Styles.Home }>
                <div className={ Styles.topTextSection } >
                    <div className={ Styles.topText }>
                    <p className={ Styles.helloText }>
                        { constants.helloText }
                    </p>
                    <h1 className={ Styles.topMainText }>
                        { constants.topTitle }
                    </h1>
                    <p className={ Styles.topSkills }>
                        { constants.topSkills }
                    </p>
                    </div>
                </div>
                  <Image className={ Styles.topImage } src={ LaptopFire.src } alt="fire" height="619" width="500" />
            </section>
            <section id={ constants.sections[1] } className={ Styles.Skills }>
                <p >
                    { constants.smallSkills }
                </p>
                <p className={ Styles.largeTitle }>
                    { constants.bigSKills }
                </p>
                <div className={ Styles.skillCards }>
                    { constants.skillsData.map(skill => (
                        <SkillCard key={skill.id} image={skill.id} title={skill.title} text={skill.text} />
                    )) }
                </div>
            </section>
            <section id={ constants.sections[2] } className={ Styles.About }>
                <div className={ Styles.aboutData }>
                    <Image height="416" width="550" className={ Styles.mattImage } src={ MattImage.src } alt="Matt Hall" />
                    <div className={ Styles.aboutText }>
                        <p>{ constants.smallAbout }</p>
                        <p className={ Styles.largeTitle }>
                            { constants.bigAbout }
                        </p>
                        <p className={ Styles.aboutMainText }>
                            { constants.aboutMainText }
                        </p>
                    </div>
                </div>
            </section>
            <section id={ constants.sections[3] }></section>
            <section className={ Styles.footer }></section>
        </div>
    );
};

export default Landing;
