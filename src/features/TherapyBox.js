import React from 'react'
import Button from 'react-bootstrap/Button';

export default function TherapyBox({ title, subtitle, description, btntext, image, imgtext }) {
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
                    <div>
                        <h1> {title} </h1>
                        <h3>{subtitle}</h3>
                        <p>{description}</p>

                        <br></br>
                        <Button type="button" style={{ backgroundColor: "#800020" }} variant="outline-light" >Contact</Button>{' '}
                        {/* <Button variant="light">Start Questionnaire</Button>{' '} */}
                    </div>
                </div>
                <div className='therapyboxcontainer'>
                    {/* <h5>Magna fugiat est non fugiat laboris veniam ex do sint eu.</h5> */}

                    <img width="300" height="300" src={image} alt={imgtext} />

                </div>


            </div>
            <div>

            </div>
        </>
    )
}
