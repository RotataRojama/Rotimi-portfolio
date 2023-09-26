import React, { useState, useEffect, useCallback } from 'react';
import './index.scss';
import Stacks from './stacks';
import ContactForm from './contactForm';
import VisibilitySensor from 'react-visibility-sensor';
import Light from '../assets/Component 1.png';
import Dark from '../assets/Component 1 (1).png';
import ProfilePicture from '../assets/Frame 46.png';
import WavingHands from '../assets/Google-Noto-Emoji-People-Bodyparts-12050-waving-hand.128 (1).png';
import TickIcon from '../assets/tick-circle.png';
import TickIcon2 from '../assets/tick-circle (2).png'
import ArrowDown from '../assets/Vector 1.png'
import Risktech from '../assets/1-poster.webp.png'
import ChimaDemo from '../assets/1-poster.webp (1).png'
import RotimiPortfolio from '../assets/1-poster.webp (3).png'
import DataExpress from '../assets/1-poster.webp (2).png'
import FlowerL from '../assets/Lflower.png'
import FlowerR from '../assets/Rflower.png'
import FooterDesign from '../assets/Noise grid.png'
import GithubIcon from '../assets/githubIcon.png'
import LinkedinIcon from '../assets/linkedin.png'
import TwitterIcon from '../assets/twitterIcon.png'
import TwitterIcon2 from '../assets/Twitter  svg.png'
import GithubIcon2 from '../assets/Github svg.png'
import LinkedinIcon2 from '../assets/Group 20.png'
import { motion, useAnimation } from 'framer-motion';
import { Link, Element } from 'react-scroll';

function Index() {
    const [isProjectsVisible, setProjectsVisible] = useState(false);
    const [isStacksVisible, setStacksVisible] = useState(false);
    const [isContactVisible, setContactVisible] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };
    const isMobile = window.innerWidth > 860;
    const fall1 = isMobile ? 500 : 360;
    const fall2 = isMobile ? 400 : 290;
    const fall3 = isMobile ? 300 : 220;
    const fall4 = isMobile ? 200 : 160;

    const controls = useAnimation();
    const timerControls = useAnimation();

    const startAnimation = useCallback(async () => {
        await controls.start({ y: 20, opacity: 0.7, transition: { duration: 1, ease: 'easeInOut' } });
        await controls.start({ y: 0, opacity: 1, transition: { duration: 0 } });
    }, [controls]);

    useEffect(() => {
        const interval = setInterval(startAnimation, 2000);
        const timerId = setTimeout(() => {
            timerControls.stop();
        }, 5000);
        return () => {
            clearInterval(interval);
            clearTimeout(timerId);
        };
    }, [startAnimation, timerControls]);

    const styles = {
        paddingTop: '105px',
    };

    useEffect(() => {
        timerControls.start({ rotate: 360, transition: { duration: 5 } });
    }, [timerControls]);
    const project = [{
        image: Risktech,
        projectName: 'Risktech Web Design',
        stack: 'CSS',
        descriptionText: 'Risktech is a cutting-edge platform that acts as a bridge, facilitating connections between highly skilled professionals seeking reputable companies to collaborate with and esteemed companies in search of top-tier talent.',
        projectLink: 'https://risktech.netlify.app/'
    },
    {
        image: ChimaDemo,
        projectName: 'Chima-Demo Web Design',
        stack: 'CSS',
        descriptionText: "Chima-demo is a cloned desktop view of Chimamanda Adozie's personal website.",
        projectLink: 'https://chima-demo.netlify.app/'
    },
    {
        image: DataExpress,
        projectName: "Data Express Web Design",
        stack: 'SCSS',
        descriptionText: "Data express is a platform for buying airtime and data, airtime can also be converted to cash",
        projectLink: 'https://www.google.com'
    }
    ]

    return (
        <div className={`parentContainer ${isDarkMode ? 'darkModeParent' : 'lightModeParent'}`}>
            <div className='header'>
                <div className='logo'>
                    <span className={`ar ${isDarkMode ? 'darkModeText' : ''}`}>AR</span>
                    <span className={`logoDesign ${isDarkMode ? 'darkModeText' : ''}`}></span>
                </div>
                <div className={`navigationContainer ${isMobile ? 'mobile' : 'desktop'}`}>
                    {isMobile && (
                        <div className='mobile-toggle' onClick={toggleMenu}>
                            <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 18H10" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
                                <path d="M4 12L16 12" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
                                <path d="M4 6L20 6" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </div>
                    )}
                    <div className={`about ${isDarkMode ? 'darkModeText' : ''}`}><Link to="intro" smooth={true} duration={500}>About</Link></div>
                    <div className={`ncProjects ${isDarkMode ? 'darkModeText' : ''}`}><Link to="projects" smooth={true} duration={500}>Projects</Link></div>
                    <div className={`stack ${isDarkMode ? 'darkModeText' : ''}`}><Link to="stacks" smooth={true} duration={500}>Stacks</Link></div>
                    <div className={`contact ${isDarkMode ? 'darkModeText' : ''}`}><Link to="contact" smooth={true} duration={500}>Contact</Link></div>
                </div>
                <div className='toggle' onClick={toggleDarkMode}>
                    <span className={`mode ${isDarkMode ? 'darkModeText' : ''}`}>{isDarkMode ? 'Dark' : 'Light'}</span>
                    <img src={isDarkMode ? Dark : Light} alt='' className='toggleIcon' />
                </div>
            </div>
            <Element name="intro" style={styles}>
                <section className='introduction'>
                    <div className='biographyContainer'>
                        <span className={`bio1 ${isDarkMode ? 'darkModeText' : 'lightModeText'}`}>Hello <img src={WavingHands} alt='' className='wavingHandsIcon' /> there, my name is</span>
                        <div className={`bio2 ${isDarkMode ? 'darkModeText' : 'lightModeText'}`}>R
                            <motion.div
                                className={`outerO ${isDarkMode ? 'darkModeBorder' : ''}`}
                                animate={timerControls}
                                initial={false}
                            >
                                <span className={`innerO ${isDarkMode ? `darkModeText darkModeBorder2` : `lightModeText lightModeBorder2`}`}>&#60;&#47;roar-tee-mee&#47;&#62;</span>
                            </motion.div>
                            timi</div>
                        <div className='bio3'>
                            <span className='importer'>Importer</span>
                            <span className='exporter'>Exporter</span>
                            <span className='designer'>Designer</span>
                            <span className={`developer ${isDarkMode ? 'darkModeText' : 'lightModeText'}`}>Developer<img src={isDarkMode ? TickIcon2 : TickIcon} alt='' className='tickIcon' /></span>
                        </div>
                        <span className={`bio4 ${isDarkMode ? 'darkModeText' : 'lightModeText'}`}>I  am a passionate Front-End Developer with a love for creating
                            dynamic UI effects, animations, and intuitive user experiences. My expertise lies in
                            crafting blazing fast, user-friendly, and responsive websites with a focus on best
                            practices, making me the go-to person for developing cool web apps, adding snazzy
                            features, and creating interactive layouts that leave a lasting impression</span>
                    </div>
                    <span className='pictureContainer'><img src={ProfilePicture} alt='' className='profilePicture' /></span>
                </section>
            </Element>
            <div className="scrollDown" >
                <Link to="contact" smooth={true} duration={500}>
                    <motion.img
                        src={ArrowDown}
                        alt="Scroll Down"
                        className="arrowDownIcon"
                        animate={controls}
                    />
                </Link>
            </div>
            <Element name="projects">
                <section className='projects'>
                    <VisibilitySensor onChange={(isVisible) => setProjectsVisible(isVisible)}>
                        <>
                            <span className={isDarkMode ? (isProjectsVisible ? 'projectHeaderActive1' : 'projectHeader1') : (isProjectsVisible ? 'projectHeaderActive' : 'projectHeader')}>PROJECTS</span>
                            <div className='projectBody'>
                                <div className='pbRow1'>
                                    {project.map(project => (
                                        <div className='plMainContainer'>
                                            <img src={project.image} alt='' className='plImage' />
                                            <div className='plDetailsContainer'>
                                                <span className='projectName'>{project.projectName}</span>
                                                <div className='plStacks'>
                                                    <span className='plReact'>React Js <span className='rectangleDesign'></span></span>
                                                    <span className='plReact'>{project.stack} <span className='rectangleDesign'></span></span>
                                                    <span className='plReact'>AntDesign Toolkit <span className='rectangleDesign'></span></span>
                                                </div>
                                                <div className='plDescription'>
                                                    <span className='plDescriptionText'>{project.descriptionText}</span>
                                                </div>
                                                <button className='plViewProject'><a href={project.projectLink} target="_blank" rel="noopener noreferrer">View Project</a>
                                                    <svg width="24" height="24" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                                        <path d="M15.7656 10.5801L24.1528 12.409L22.3239 20.7962" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M9.84668 21.5918L24.0095 12.4999" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>))}
                                </div>
                                <div className='pbRow2'>
                                    <div className='plMainContainer'>
                                        <img src={RotimiPortfolio} alt='' className='plImage' />
                                        <div className='plDetailsContainer'>
                                            <span className='projectName'>Rotimi's Portfolio Web Design</span>
                                            <div className='plStacks'>
                                                <span className='plReact'>React Js <span className='rectangleDesign'></span></span>
                                                <span className='plReact'>SCSS <span className='rectangleDesign'></span></span>
                                                <span className='plReact'>AntDesign Toolkit <span className='rectangleDesign'></span></span>
                                            </div>
                                            <div className='plDescription'>
                                                <span className='plDescriptionText'>Rotimi's Portfolio is a website that gives the first impression about me and my works and it serves a medium of reaching out to me</span>
                                            </div>
                                            <button className='plViewProject'><a href='https://rotimi-portfolio.netlify.app/' target="_blank" rel="noopener noreferrer">View Project</a>
                                                <svg width="24" height="24" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                                    <path d="M15.7656 10.5801L24.1528 12.409L22.3239 20.7962" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M9.84668 21.5918L24.0095 12.4999" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    </VisibilitySensor>
                </section>
            </Element>
            <Element name="stacks">
                <section className='stacksUsed'>
                    <VisibilitySensor onChange={(isVisible) => setStacksVisible(isVisible)}>
                        <>
                            <span className={isDarkMode ? (isStacksVisible ? 'suHeaderActive1' : 'suHeader1') : (isStacksVisible ? 'suHeaderActive' : 'suHeader')}>STACKS USED</span>
                            <div className='b'>
                                <div className='c'>
                                    <Stacks
                                        className='fallingObject1'
                                        animate={fall1}
                                        duration={2}
                                        delay={0}
                                        name={'REACT JS'}
                                    />
                                    <Stacks
                                        className='fallingObject2'
                                        animate={fall2}
                                        duration={2}
                                        delay={0.5}
                                        name={'VANILLA JS'}
                                    />
                                    <Stacks
                                        className='fallingObject3'
                                        animate={fall3}
                                        duration={2}
                                        delay={1}
                                        name={'TYPESCRIPT'}
                                    />
                                    <Stacks
                                        className='fallingObject4'
                                        animate={fall4}
                                        duration={2}
                                        delay={1.5}
                                        name={'SCSS'}
                                    />
                                    <Stacks
                                        className='fallingObject5'
                                        animate={100}
                                        duration={2}
                                        delay={2}
                                        name={'HTML'}
                                    />
                                </div>
                            </div>
                            <img src={FlowerL} alt='' className='flowerL' />
                            <img src={FlowerR} alt='' className='flowerR' />
                        </>
                    </VisibilitySensor>
                </section>
            </Element>
            <Element name="contact">
                <section className='contactMe'>
                    <VisibilitySensor onChange={(isVisible) => setContactVisible(isVisible)}>
                        <>
                            <span className={isDarkMode ? (isContactVisible ? 'cmHeaderActive1' : 'cmHeader1') : (isContactVisible ? 'cmHeaderActive' : 'cmHeader')}>CONTACT ME</span>
                            <div className={`contactMeContainer ${isDarkMode ? 'cmDarkMode' : 'cmLightMode'}`}>
                                <img src={FooterDesign} alt='' className='footerDesign' />
                                <div className='cmIntroContainer'>
                                    <span className={`cmIntroHeader ${isDarkMode ? 'darkModeText' : 'lightModeText'}`}>Have you got a great idea?</span>
                                    <span className={`cmIntroText ${isDarkMode ? 'darkModeText' : 'lightModeText'}`}>When it comes to front-end development,
                                        I'm your go-to person for creating cool web apps, adding snazzy features,
                                        whipping up animations, and coding interactive layouts that make people go "Wow!"
                                    </span>
                                    <div className='cmIconsContainer'>
                                        <a href='https://www.github.com/RotataRojama' target="_blank" rel="noopener noreferrer"><img src={isDarkMode ? GithubIcon2 : GithubIcon} alt='' className='cmIcon' /></a>
                                        <a href='https://www.linkedin.com/in/adegboro-rotimi' target="_blank" rel="noopener noreferrer"><img src={isDarkMode ? LinkedinIcon2 : LinkedinIcon} alt='' className='cmIcon' /></a>
                                        <a href='https://www.x.com/Dannyadegboro' target="_blank" rel="noopener noreferrer"><img src={isDarkMode ? TwitterIcon2 : TwitterIcon} alt='' className='cmIcon' /></a>
                                    </div>
                                </div>
                                <ContactForm isDarkMode={isDarkMode} />
                            </div>
                        </>
                    </VisibilitySensor>
                </section>
            </Element>
        </div >
    )
}
export default Index