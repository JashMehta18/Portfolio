import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { jash, linkedin } from '../assets';
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);


const About = () => {
  const fadeIn = (x, y, duration, delay) => ({
    hidden: { opacity: 0, x, y },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
      },
    },
  });
  return (
    <>
      <motion.div className=''>
        <motion.div variants={textVariant()} className='flex justify-center items-center'>
          <motion.div className='flex gap-2 items-center'>
            <motion.img
              src={jash} // Replace {jash} with the actual image source
              alt="logo"
              className="h-[450px] max-w-full rounded-full"
              variants={fadeIn(0, 0, 0.1, 0.1)}
              initial="hidden"
              animate="visible"
            />
            <motion.div
              variants={fadeIn(0, 0, 0.1, 0.3)}
              className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
              initial="hidden"
              animate="visible"
            ><p className={styles.sectionHeadText}>Introduction
                <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
                  <div
                    onClick={() => window.open('https://www.linkedin.com/in/jashmehta18/', "_blank")}
                    className='blue-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer mt-40 mr-80'
                  >
                    <img
                      src={linkedin} // You'd replace linkedinIcon with the path to your LinkedIn icon/image
                      alt='LinkedIn profile'
                      className='w-30 h-30 mt-12 object-contain rounded-3xl'
                    />
                  </div>
                </div>
              </p><br />
              I'm Jash Mehta, a dedicated and aspiring software engineer pursuing a Master's degree at Northeastern University.
              My education and professional experience have equipped me with a diverse skill set to become a proficient Software Developer/Engineer.
              I've worked on a range of projects, from real-time collaboration apps to working on core software projects.
              I'm passionate about technology and innovation and I'm eager to continue making an impact in the world of software development.
            </motion.div>
          </motion.div>
        </motion.div><br />
        <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
      </motion.div>
    </>
  )
}

export default SectionWrapper(About, "about")