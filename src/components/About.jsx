import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn("right", "spring", 1*index, 1)}
        className='w-full yellow-blue-gradient p-[3px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />  
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
};


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText} >Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p 
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Hello, my name is Shanya Connell, but I'm known as GemShae on social media. 
        I recently graduated from the University of Technology, Jamaica with a Bachelor of Science in Computer Science. 
        With a GPA of 3.97 on a 4.0 scale, I obtained first class honors as well as the Edward Seaga Award 2022 for having the highest 
        undergraduate GPA in the University. I am currently pursuing a master's degree in Computer Science at the University of East London. 
        <br /> <br /> 
        I'm a highly motivated software developer from Jamaica with a strong passion for technology. I am especially interested in 
        software engineering and development, particularly with the use of machine learning and artificial intelligence to produce 
        efficient, user-friendly software that solves real-world problems. 
        <br /> <br /> 
        Let's work together to make your ideas a reality!
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard  key={service.title} index={index} {...service}/>  
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about");