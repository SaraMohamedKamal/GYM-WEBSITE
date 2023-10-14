import React from 'react';
import './Testimonials.css'
import  { testimonialsData } from '../../data/testimonialsData';
import { useState } from 'react';
import leftArrow from '../../assets/leftArrow.png'
import RightArrow from '../../assets/rightArrow.png'
import {motion} from 'framer-motion'

const Testimonials = () => {
    const [selected, setselected] = useState(0);
    const tLengh = testimonialsData.length;
    const transition ={type: "spring",duration:3}
    return (
        <div className='Testimonials' id='testimonials'>
            <div className="left-t">
                <span>TESTIMONIALS</span>
                <span className='stroke-text'>WHAT THEY</span>
                <span>SAY ABOUT US</span>
                <motion.span
                 key={selected}
                 initial={{opacity:0, x:-100}}
                 animate={{opacity:1, x:0 }}
                 exit={{opacity:0, x:100}}
                 transition={transition}
                >

                {
                    testimonialsData[selected].review
                }
                </motion.span>
                <span>
                    <span style={{color: "var(--orange)"}}>
                        {
                            testimonialsData[selected].name
                        }
                    </span>{" "}
                     - {testimonialsData[selected].status}
                </span>


            </div>
            <div className="right-t">
                <motion.div
                initial={{opacity:0, x:-100}}
                transition={{...transition,duration:2}}
                whileInView={{opacity:1, x:0}}
                ></motion.div>
                <motion.div
                initial={{opacity:0, x:100}}
                transition={{...transition,duration:2}}
                whileInView={{opacity:1, x:0}}
                ></motion.div>
                <motion.img 
                key={selected}
                initial={{opacity:0, x:100}}
                animate={{opacity:1, x:0 }}
                exit={{opacity:0, x:-100}}
                transition={transition}
                src={testimonialsData[selected].image} alt="" />
                <div className="arrows">
                    <img 
                onClick={()=>{
                    selected===0? setselected (tLengh -1):
                    setselected ((prev)=> prev -1);
                }}
                src={leftArrow} alt="" />
                    <img
                    onClick={()=>{
                        selected===tLengh -1? setselected (0):
                        setselected ((prev)=> prev +1);
                    }}
                    src={RightArrow} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Testimonials;