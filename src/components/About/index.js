import './index.scss'
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faHtml5, faCss3, faReact,
faGitAlt, faJsSquare } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    
    useEffect(() => {
        return 
        
    }, [])

    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters

                         strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                         idx={15}
                    />
                </h1>
                <p>I am a driven and passionate programmer who is looking for a 
                    role as a web developer.
                </p>
                <p>My personality is introverted and hard working, but I also love
                    to work as part of a team to accomplish tasks. I am very capable of self directed work,
                    but also would be thrilled at the opportunity of working in a development team.
                </p>
                <p>I would describe myself as an art geek who loves technology and making fantasy and sci-fi
                    themed art.
                </p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faAngular} color='#DD0031'></FontAwesomeIcon>
                    </div>

                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color='#F06529'></FontAwesomeIcon>
                    </div>

                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color='#28A4D9'></FontAwesomeIcon>
                    </div>

                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color='#5ED4F4'></FontAwesomeIcon>
                    </div>

                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color='#EFD81D'></FontAwesomeIcon>
                    </div>

                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color='#EC4D28'></FontAwesomeIcon>
                    </div>
                </div>
                
            </div>
        </div>

        <Loader type="pacman"></Loader>


        </>
    )


}



export default About;