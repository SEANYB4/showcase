import { useEffect, useState, useRef } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import emailjs from '@emailjs/browser';
import { MapContainer } from 'react-leaflet';

import { TileLayer, Marker, Popup } from 'react-leaflet';

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect(() => {
        return setLetterClass('text-animate-hover')
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'service_zgugzum',
                'template_ss5cf1s',
                '#myForm',
                '_FsCLpR7TQXJnAgSd'
            )
            .then(
                (response) => {
                    alert('Message successfully sent!')
                    window.location.reload(false)
                },
                (error) => {
                    alert('Failed to send the message, please try again!')
                    console.log(error)
                }
            )
    }

        return (

         <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                        idx={15}
                        ></AnimatedLetters>
                    </h1>

                    <p>
                    I am always open to oppotunities to work on new development projects. I am open to
                    freelance work and also more permanant positions. Please do not hesitate to contact me
                    using the form below.
                    </p>

                    <div className='contact-form'>

                        <form id='myForm' onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type='text' name='name' placeholder='Name' required></input>
                                </li>
                                <li className='half'>
                                    <input type='email' name='email' placeholder='Email' required></input>
                                </li>

                                <li>
                                    <input placeholder="Subject" type='text' name="subject" required></input>
                                </li>

                                <li>
                                    <textarea plaeholder="Message" name="message" required></textarea>
                                </li>

                                <li>
                                    <input type="submit" className='flat-button' value="SEND"></input>
                                </li>

                            </ul>

                        </form>
                    </div>

                </div>
                <div className='info-map'>
                    Sean Bain,
                    <br />
                    China,
                    <br />
                    WangFuJing <br />
                    <span>bainsean@outlook.com</span>
                </div>
                <div className="map-wrap">
                    <MapContainer center={[39.9066897066, 116.403163387]} zoom={13}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                        <Marker position={[39.9066897066, 116.403163387]}>
                            <Popup>Sean lives here, come over for a cup of coffee</Popup>

                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type="pacman"></Loader>
            
         </>
       
        )
    }

export default Contact;