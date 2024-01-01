import Styles from './page.module.css'

export const landingText = {
    helloText: "Hello, I'm Matt",
    topTitle: <>A <span className={ Styles.greenSpan }>full-stack </span> software developer based in Edinburgh</>,
    topSkills:<>Drawing on 3 years of expertise in front-end and back-end development,<br/>I craft innovative applications for both mobile and web</>,
    smallSkills: "My skills",
    bigSKills:"Technical Expertise",
    skillsData: [
        {
            id: 1,
            title: "Web & Mobile",
            text: "Expert in building responsive web and mobile apps using HTML, CSS, React, SwiftUI, UIKit, Node.js, and ExpressJS. I blend front-end design with efficient back-end processing for optimal user experiences."
        },
        {
            id: 2,
            title: "SQL/NoSQL",
            text: "Skilled in MongoDB and MySQL, I specialize in creating, managing, and optimizing databases for high performance and data integrity, tailoring solutions for project-specific needs."
        },
        {
            id: 3,
            title: "Coding & Collaboration",
            text: "Proficient in IDEs like Visual Studio Code and Sublime Text, and versed in Git and GitHub for version control. I ensure efficient coding and team collaboration."
        },
        {
            id: 4,
            title: "Design & Ops",
            text: "Utilizing Figma for intuitive UI/UX design and Docker for streamlined DevOps, I deliver designs with technical efficiency, ensuring both aesthetics and robust functionality."
        }
    ],
    smallAbout: "About",
    bigAbout:"About me",
    aboutMainText: 
        <>
            In 2019, I decided to leave my 10+ years of experience in network security behind me to dive into the world of software development. I began with mobile app development utilising the Swift for IoS programming language and both the SwiftUI and UIKit frameworks for front-end and both PhP and mySQL for backend, and I&apos;m proud to have launched multiple apps on the Apple App Store.
        <br/><br/>
            Today, I&apos;m focused more on web development, delving into technologies like HTML/CSS, JavaScript, Node.js and React. My current project involves building a web3 job search and recruitment platform for a Web3.0 platform.
        <br/><br/>
            I&apos;m now actively seeking remote junior roles in software development, with a strong desire for mentoring and growth.
        <br/><br/>
            Let&apos;s connect!
        <br/><br/>
            🐱 <a href="https://github.com/mhallrp">GitHub</a><br/>
            💼 <a href="https://www.linkedin.com/in/mhallrp">LinkedIn</a><br/>
            📧 <a href="mailto:hello@matthall.london">hello@matt-hall.dev</a>
        </>
};

export default landingText