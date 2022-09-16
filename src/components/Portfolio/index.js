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
                                    <p className='title'>{port.title}</p>
                                    <h4 className="description">{port.description}</h4>
                                    <button
                                    className='btn'
                                    onClick={() => window.open(port.url)}
                                    >Visit site</button>
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