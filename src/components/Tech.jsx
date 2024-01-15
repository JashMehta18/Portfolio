import {BallCanvas} from "./canvas"
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"
import {motion} from 'framer-motion'
import { textVariant } from "../utils/motion"
import {styles} from '../styles'

const Tech = () => {
  return (
    <>
    <motion.div variant={textVariant()}>
      <center>
        <h2 className={styles.sectionHeadText}>
          My Tech Skills
        </h2>
        </center>
      </motion.div>
    <div className="flex flex-row flex-wrap justify-center  gap-10">
      <br/>
      {technologies.map((technology) =>(
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon}/>
        </div>
      ))}
    </div>
    </>
  )
}

export default SectionWrapper(Tech,"");