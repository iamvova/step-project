import React from 'react'
import { IoIosLink } from "react-icons/io";
import './AboutProjects.scss'

const AboutProjects = () => {
  return (
    <div className='projects__container '>
        <div className="wrapp">
                <p className="pre__title flex__center">Lorem, ipsum.</p>
                <h2 className='headtext flex__center'>About Projects</h2>
            <div className="project__container">
                <div className="project__container-first flex__sb">
                    <div className='project__container-first_block'><img src="https://bakrietheme.net/traveliz/wp-content/uploads/sites/7/2024/01/bachalpsee-lake-in-swiss-alps-mountains-e1706115296642.jpg" alt="1" /><div className="project__image-link flex__center"><IoIosLink /></div></div>
                    <div className='project__container-first_block mt-50'><img src="https://bakrietheme.net/traveliz/wp-content/uploads/sites/7/2024/01/bachalpsee-lake-in-swiss-alps-mountains-e1706115296642.jpg" alt="1" /><p className="project__image-link flex__center"><IoIosLink className='project__image-link_icon'/></p></div>
                    <div className='project__container-first_block'><img src="https://bakrietheme.net/traveliz/wp-content/uploads/sites/7/2024/01/bachalpsee-lake-in-swiss-alps-mountains-e1706115296642.jpg" alt="1" /><p className="project__image-link flex__center"><IoIosLink /></p></div>
                </div>
                <div className="project__container-first flex__sb">
                    <div className='project__container-first_block'><img src="https://bakrietheme.net/traveliz/wp-content/uploads/sites/7/2024/01/bachalpsee-lake-in-swiss-alps-mountains-e1706115296642.jpg" alt="1" /><p className="project__image-link flex__center"><IoIosLink /></p></div>
                    <div className='project__container-first_block  mt-50'><img src="https://bakrietheme.net/traveliz/wp-content/uploads/sites/7/2024/01/bachalpsee-lake-in-swiss-alps-mountains-e1706115296642.jpg" alt="1" /><p className="project__image-link flex__center"><IoIosLink /></p></div>
                    <div className='project__container-first_block'><img src="https://bakrietheme.net/traveliz/wp-content/uploads/sites/7/2024/01/bachalpsee-lake-in-swiss-alps-mountains-e1706115296642.jpg" alt="1" /><p className="project__image-link flex__center"><IoIosLink /></p></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutProjects
