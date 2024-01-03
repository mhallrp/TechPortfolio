import Styles from "./page.module.css";
import NavBar from "../components/NavBar";
import LaptopFire from "../assets/laptopFire.png";
import MattImage from "../assets/mattImage.png";
import SkillCard from "../components/SkillsCard";
import Image from "next/image";
import constants from "./constants";

const Landing = () => {
  return (
    <main className="font-sans">
      <NavBar />
      <section
        id={constants.sections[0]}
        className="flex pt-20 min-h-screen bg-primary "
      >
        <div className="xl:flex-row xl:pt-0 xl:px-20 md:px-16 flex pt-4 px-8 w-full items-center flex-col">
          <div className="xl:w-6/12 xl:text-left w-full flex flex-col text-center justify-center pb-16">
            <p className="text-xl text-grey pb-4">{constants.helloText}</p>
            <h1 className="md:text-5xl md:leading-[3.5rem] font-bold  pb-4 text-4xl">
              {constants.topTitle}
            </h1>
            <p className="md:text-xl text-grey">{constants.topSkills}</p>
          </div>
          <div>
            <Image
              className="pb-16 pl-8"
              src={LaptopFire.src}
              alt="fire"
              height="619"
              width="500"
            />
          </div>
        </div>

      </section>
      <section id={constants.sections[1]} className="xl:px-20 md:px-16 px-8 font-bold py-24 ">
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
    </main>
  );
};

export default Landing;
