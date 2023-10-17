import React from 'react'
import { Link } from 'react-router-dom';

export default function FooterBox() {
    return (
       
        <div className='parent-footer-container' style={{ }}>
            <div className='footbottom'>
                <p style={{ paddingTop: "100px", }}>Trusted by individuals and families seeking a path to mental and emotional well-being, and professionals dedicated to guiding transformative change.</p>
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
                    <p paddingTop="1000px">Empower your users during their most critical moments. Establish a seamless communication channel connecting your business and customers within your product, app, or website. Customize valuable support resources, tailoring them to distinct audience segments such as paying customers, visitors, or specific languages.</p>
                </div>
            </div>
            </div>
     

    )
}
//  title, subtitle, description, btntext, image, imgtext 