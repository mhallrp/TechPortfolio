import Styles from './page.module.css'
import NavBar from "../components/NavBar"
import LaptopFire from "../assets/laptopFire.png"
import MattImage from "../assets/mattImage.png"
import SkillCard from "../components/SkillsCard"
import Image from "next/image"
import landingValues from './constants'

const Landing = () => {
    return (
        <div>
            <NavBar />
            <section id="Home" className={ Styles.Home }>
                <div className={ Styles.topTextSection } >
                    <div className={ Styles.topText }>
                    <p className={ Styles.helloText }>
                        { landingValues.helloText }
                    </p>
                    <h1 className={ Styles.topMainText }>
                        { landingValues.topTitle }
                    </h1>
                    <p className={ Styles.topSkills }>
                        { landingValues.topSkills }
                    </p>
                    </div>
                </div>
                  <Image className={ Styles.topImage } src={ LaptopFire.src } alt="fire" height="619" width="500" />
            </section>
            <section id="Skills" className={ Styles.Skills }>
                <p >
                    { landingValues.smallSkills }
                </p>
                <p className={ Styles.largeTitle }>
                    { landingValues.bigSKills }
                </p>
                <div className={ Styles.skillCards }>
                    { landingValues.skillsData.map(skill => (
                        <SkillCard key={skill.id} image={skill.id} title={skill.title} text={skill.text} />
                    )) }
                </div>
            </section>
            <section id="About" className={ Styles.About }>
                <div className={ Styles.aboutData }>
                    <Image height="416" width="550" className={ Styles.mattImage } src={ MattImage.src } alt="Matt Hall" />
                    <div className={ Styles.aboutText }>
                        <p>{ landingValues.smallAbout }</p>
                        <p className={ Styles.largeTitle }>
                            { landingValues.bigAbout }
                        </p>
                        <p className={ Styles.aboutMainText }>
                            { landingValues.aboutMainText }
                        </p>
                    </div>
                </div>
            </section>
            <section id="Portfolio"></section>
            <section className={ Styles.footer }></section>
        </div>
    );
};

export default Landing;
