import React from 'react'
import { Link } from 'react-router-dom';

export default function FooterBox() {
    return (

        <>
            <div>
                {/* <h1> {title} </h1>
                <h3>{subtitle}</h3>
                <p>{description}</p>
                <button>{btntext}</button> */}
            </div>
            <div className='mycontainer'>
                <div className='leftside'>
                    <p>Quis mollit incididunt tempor ipsum tempor.</p>
                    <Link to="/contacts">Contacts</Link>
                </div>
                <div className='footcontainer'>
                    <div>
                        <h5>
                            ITherapy
                        </h5>
                        <ul className='Unordered-list'>
                            <li>
                                Prices
                            </li>
                            <li>
                                Use Cases
                            </li>
                            <li>
                                Resources
                            </li>
                            <li>
                                Sign In
                            </li>
                        </ul>
                    </div>
                    <div className=''>
                        <h5>
                            Company
                        </h5>
                        <ul className='Unordered-list'>
                            <li>
                                Professional
                            </li>
                            <li>
                                Careers
                            </li>
                            <li>
                                Commumity
                            </li>
                            <li>
                                Learn
                            </li>
                            <li>
                                Contact
                            </li>
                        </ul>
                    </div>
                    <div className=''>
                        <h5>
                            Legal
                        </h5>
                        <ul className='Unordered-list'>
                            <li>
                                Terms Of Services
                            </li>
                            <li>
                                Privacy Policy
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
//  title, subtitle, description, btntext, image, imgtext 