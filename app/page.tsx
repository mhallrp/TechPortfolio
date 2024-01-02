import Styles from "./page.module.css";
import NavBar from "../components/NavBar";
import LaptopFire from "../assets/laptopFire.png";
import MattImage from "../assets/mattImage.png";
import SkillCard from "../components/SkillsCard";
import Image from "next/image";
import constants from "./constants";

const Landing = () => {
  return (
    <>
      <NavBar />
      <section
        id={constants.sections[0]}
        className="font-sans flex  pt-20 min-h-screen bg-primary "
      >
        <div className="flex pt-4 px-8 w-full items-center flex-col xl:flex-row xl:pt-0 xl:px-20">
          <div className="w-full flex flex-col text-center justify-center pb-16 xl:w-6/12 xl:text-left">
            <p className="text-xl text-grey pb-4">{constants.helloText}</p>
            <h1 className="font-bold leading-[3.5rem] pb-4 text-5xl">
              {constants.topTitle}
            </h1>
            <p className="text-grey text-xl">{constants.topSkills}</p>
          </div>
          <div>
            <Image
              className="pb-16"
              src={LaptopFire.src}
              alt="fire"
              height="619"
              width="500"
            />
          </div>
        </div>
      </section>
      <section id={constants.sections[1]} className={Styles.Skills}>
        <p>{constants.smallSkills}</p>
        <p className={Styles.largeTitle}>{constants.bigSKills}</p>
        <div className={Styles.skillCards}>
          {constants.skillsData.map((skill) => (
            <SkillCard
              key={skill.id}
              image={skill.id}
              title={skill.title}
              text={skill.text}
            />
          ))}
        </div>
      </section>
      <section id={constants.sections[2]} className={Styles.About}>
        <div className={Styles.aboutData}>
          <Image
            height="416"
            width="550"
            className={Styles.mattImage}
            src={MattImage.src}
            alt="Matt Hall"
          />
          <div className={Styles.aboutText}>
            <p>{constants.smallAbout}</p>
            <p className={Styles.largeTitle}>{constants.bigAbout}</p>
            <p className={Styles.aboutMainText}>{constants.aboutMainText}</p>
          </div>
        </div>
      </section>
      <section id={constants.sections[3]}>
        <div className={Styles.footer}></div>
      </section>
    </>
  );
};

export default Landing;
