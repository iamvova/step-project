import React from 'react'
import { IoIosLink } from "react-icons/io";
import project1 from '../../../constants/images/project1.jpg'
import project2 from '../../../constants/images/project2.jpg'
import project3 from '../../../constants/images/project3.jpg'
import project4 from '../../../constants/images/project4.jpg'
import project5 from '../../../constants/images/project5.jpg'
import project6 from '../../../constants/images/project6.jpg'
import './AboutProjects.scss'

const AboutProjects = () => {
  return (
    <div className='projects__container ' id='founds'>
        <div className="wrapp">
                {/* <p className="pre__title flex__center">Останні додані ніціативи</p> */}
                <h2 className='headtext flex__center'>Останні додані ніціативи</h2>
            <div className="project__container">
                <div className="project__container-first flex__sb">
                    <div className='project__container-first_block '><img src={project2} alt="1" /><p className="project__image-link flex__center"><IoIosLink className='project__image-link_icon'/></p></div>
                    <div className='project__container-first_block mt-50'><img src={project1} alt="1" /><div className="project__image-link flex__center"><IoIosLink /></div></div>
                    <div className='project__container-first_block'><img src={project3} alt="1" /><p className="project__image-link flex__center"><IoIosLink /></p></div>
                </div>
                <div className="project__container-first flex__sb">
                    <div className='project__container-first_block'><img src={project4} alt="1" /><p className="project__image-link flex__center"><IoIosLink /></p></div>
                    <div className='project__container-first_block  mt-50'><img src={project6} alt="1" /><p className="project__image-link flex__center"><IoIosLink /></p></div>
                    <div className='project__container-first_block'><img src={project5} alt="1" /><p className="project__image-link flex__center"><IoIosLink /></p></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutProjects
