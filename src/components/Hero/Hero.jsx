import React from "react";
import "./Hero.css";
import Header from "../Header/Header";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import NumberCounter from "number-counter";
import {motion} from 'framer-motion'

const Hero = () => {
  const transition ={type :'spring', duration :3}
  return (
    <div className="hero" id="home">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        <div className="the-best-ad">
          <motion.div
          initial={{left:"238px"}}
          whileInView={{left:"8px"}}
          transition={{...transition, type:'tween'}}
          >
          </motion.div>
          <span>THE BEST FITNESS CLUB IN THE TOWN</span>
        </div>

        <div className="hero-text">
          <div>
            <span className="stroke-text">SHAPE </span>
            <span>YOUR</span>
          </div>
          <div>
            <span>IDEAL BODY</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build your ideal body and
              live up your life to fullest
            </span>
          </div>
        </div>

        <div className="figures">
          <div>
            <span style={{display:"flex",flexDirection:"row"}}> 
              <span style={{color:"var(--orange)"}}>+</span>
              <NumberCounter end={140} start={100} delay='4'/>
            </span>
            <span>EXPERT COACHES</span>
          </div>
          <div>
            <span style={{display:"flex",flexDirection:"row"}}>
            <span style={{color:"var(--orange)"}}>+</span>
            <NumberCounter end={978} start={800} delay='4'/>
              
            </span>
            <span>MEMBERS JOINED</span>
          </div>
          <div>
            <span style={{display:"flex",flexDirection:"row"}}>
            <span style={{color:"var(--orange)"}}>+</span>
            <NumberCounter end={50} start={10} delay='4' />
            </span>
            <span>FITNESS PROGRAMS</span>
          </div>
        </div>

        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">Join Now</button>
        <motion.div 
        transition={transition}
        initial={{right:"-1rem"}}
        whileInView={{right: "4rem"}}
        className="heart-rate">
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>
        <img src={hero_image} alt="" className="hero-image" />
        <motion.img
        initial={{right: "11rem"}}
        whileInView={{right: '20rem'}}
        transition={transition}
        src={hero_image_back} alt="" className="hero-image-back" />

        <motion.div 
        transition={transition}
        initial={{right:"37rem"}}
        whileInView={{right: "28rem"}}
        className="calories">
          <img src={Calories} alt="" />
          <div>
            <span>Calories burned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
