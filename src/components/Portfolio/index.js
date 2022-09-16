import './index.scss';
import React from 'react';
import Loader from 'react-loaders';
import { useState, useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import portfolioData from '../../data/portfolio.json'

const Portfolio = () => {


    const [letterClass, setLetterClass] = useState('text-animate')
    console.log(portfolioData)

    useEffect(() => {
        return setLetterClass('text-animate-hover')
    }, [])

    
    const renderPortfolio = (portfolio) => {
        return (

            <div className='images-container'>
                {
                    portfolio.map((port, idx) => {

                        return (

                            <div className="image-box" key={idx}>
                                <img src={port.cover}
                                className="portfolio-image"
                                alt="portfolio"
                                ></img>

                                <div className='content'>
                                    <p>{port.description}</p>
                                </div>
                            </div>
                            
                        )

                    

                    })
                }
            </div>
        )
    }
 

    return (

        <>
        <div className='container portfolio-page'>
            
            <h1 className='page-title'><AnimatedLetters 
                        letterClass={letterClass}
                        strArray={"Portfolio".split('')}
                        idx={15}
                        ></AnimatedLetters>
                        </h1>

            
                <div>{renderPortfolio(portfolioData.portfolio)}</div>
          

        </div>
        <Loader type="pacman"></Loader>

        </>
        
    );

}



export default Portfolio;