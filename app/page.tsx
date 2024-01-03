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
        className="flex min-h-screen bg-primary pt-20 "
      >
        <div className="flex w-full flex-col items-center px-8 pt-4 md:px-16 xl:flex-row xl:px-20 xl:pt-0">
          <div className="flex w-full flex-col justify-center pb-16 text-center xl:w-6/12 xl:text-left">
            <p className="pb-4 text-xl text-grey">{constants.helloText}</p>
            <h1 className="pb-4 text-4xl font-bold  md:text-5xl md:leading-[3.5rem]">
              {constants.topTitle}
            </h1>
            <p className="text-grey md:text-xl">{constants.topSkills}</p>
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
      <section
        id={constants.sections[1]}
        className="px-8 py-24 font-bold md:px-16 xl:px-20 "
      >
        <p>{constants.smallSkills}</p>
        <p className="mt-6 text-5xl">{constants.bigSKills}</p>
        <div className="mt-9 flex flex-wrap justify-evenly">
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
      <section id={constants.sections[2]} className="px-20 py-24">
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
