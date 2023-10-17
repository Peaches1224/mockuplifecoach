import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'bootstrap';

export default function Signup() {
    const [signupElements, setSignupElements] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        state: "",
    })

    const handleChange = (evt) => {
        switch (evt.target.name) {
            case "firstname":
                setSignupElements((preEle) => {
                    return { ...preEle, firstname: evt.target.name }
                })
                break;

            case "lastname":
                setSignupElements((preEle) => {
                    return { ...preEle, lastname: evt.target.name }
                })
                break;

            case "email":
                setSignupElements((preEle) => {
                    return { ...preEle, lastname: evt.target.name }
                })
                break;

            case "password":
                setSignupElements((preEle) => {
                    return { ...preEle, lastname: evt.target.name }
                })
                break;
            case "address":
                setSignupElements((preEle) => {
                    return { ...preEle, lastname: evt.target.name }
                })
                break;
            case "city":
                setSignupElements((preEle) => {
                    return { ...preEle, lastname: evt.target.name }
                })
                break;
            case "zip":
                setSignupElements((preEle) => {
                    return { ...preEle, lastname: evt.target.name }
                })
                break;
            case "exampleFormControlTextarea1": //comment section 
                setSignupElements((preEle) => {
                    return { ...preEle, lastname: evt.target.name }
                })
                break;
            case "state":
                setSignupElements((preEle) => {
                    return { ...preEle, state: evt.target.name }
                })
                break;


            default:
                break;
        }
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
    }

    // const [value, setvalue] = useState('')
    // function handleSelect (event) {
    //     setValue(event.target.value)

    // }
    {/* {option.map(option => (
                                    <option value={option.value}>{option.label}</option>
                                ))} */}


    return (
        <div >
            <h3 style={{ paddingLeft: "500px" }}>ITherapy</h3>
            <p style={{ paddingLeft: "475px" }}>Start your journey today</p>
            <main style={{ width: "800px", margin: "0 auto" }}>
                <form onSubmit={handleSubmit}>
                    <div class="form-row">
                        <div class="form-group col-md-6 d-inline-block">
                            {/* <label for="inputEmail4">Email</label> */}
                            <input type="text" class="form-control" id="inputFirstName" name="firstname" placeholder="First" onChange={handleChange} />
                        </div>
                        <div class="form-group col-md-6 d-inline-block pl-4">
                            {/* <label for="inputPassword4">Password</label> */}
                            <input type="text" class="form-control" id="inputLastName" name='lastname' placeholder="Last" onChange={handleChange} />
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6 d-inline-block mt-4">
                            {/* <label for="inputEmail4">Email</label> */}
                            <input type="email" class="form-control" id="inputEmail4" name='email' placeholder="Email" onChange={handleChange}></input>
                        </div>
                        <div class="form-group col-md-6 d-inline-block pl-4">
                            {/* <label for="inputPassword4">Password</label> */}
                            <input type="password" class="form-control" id="inputPassword4" placeholder="Password" onChange={handleChange}></input>
                        </div>
                    </div>
                    <div class="form-group mt-4" >
                        {/* <label for="inputAddress">Address</label> */}
                        <input type="text" class="form-control" id="inputAddress" placeholder="Address" onChange={handleChange}></input>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6 mt-3">
                            <label for="inputCity">City</label>
                            <input type="text" class="form-control" id="inputCity" onChange={handleChange}></input>
                        </div>
                        <div class="form-group col-md-4 mt-3">
                            <label as="select" multiple for="inputState">State</label>
                            <select value={signupElements.state} id="inputState" onChange={handleChange} class="form-select">
                                <option selected>Choose...</option>
                                <option value="Alabama" >Alabama</option>
                                <option value="Alaska">Alaska</option>
                                <option value="Arizona"> Arizona</option>
                                <option value="Arkansas">Arkansas</option>
                                <option value="California">California</option>
                                <option value="Colorado"> Colorado</option>
                                <option value="Delaware"> Delaware</option>
                                <option value="Florida"> Florida</option>
                                <option value="Connecticut">Connecticut</option>
                                <option value="Georgia">Georgia</option>
                                <option value="Hawaii">Hawaii</option>
                                <option value="Idaho"> Idaho</option>
                                <option value="Illinois">Illinois</option>
                                <option value="Indiana"> Indiana</option>
                                <option value="Iowa"> Iowa</option>
                                <option value="Kansas"> Kansas</option>
                                <option value="Kentucky"> Kentucky</option>
                                <option value="Louisiana"> Louisiana </option>
                                <option value="Maine"> Maine</option>
                                <option value="Maryland"> Maryland</option>
                                <option value="Massachusetts"> Massachusetts</option>
                                <option value="Michigan"> Michigan</option>
                                <option value="Minnesota"> Minnesota</option>
                                <option value="Mississippi">  Mississippi</option>
                                <option value="Missouri">  Missouri </option>
                                <option value="Montana">  Montana</option>
                                <option value="Nebraska">  Nebraska</option>
                                <option value="Nevada"> Nevada</option>
                                <option value="New Hampshire"> New Hampshire</option>
                                <option value="New Jersey"> New Jersey</option>
                                <option value="New Mexico"> New Mexico</option>
                                <option value="New York"> New York</option>
                                <option value="North Carolina">  North Carolina</option>
                                <option value="North Dakota"> North Dakota</option>
                                <option value="Ohio"> Ohio</option>
                                <option value="Oklahoma"> Oklahoma</option>
                                <option value="Oregon"> Oregon</option>
                                <option value="Pennsylvania">  Pennsylvania</option>
                                <option value="Rhode Island"> Rhode Island</option>
                                <option value="South Carolina"> South Carolina</option>
                                <option value="South Dakota"> South Dakota</option>
                                <option value="Tennessee"> Tennessee</option>
                                <option value="Texas"> Texas</option>
                                <option value="Utah"> Utah</option>
                                <option value="Vermont"> Vermont</option>
                                <option value="Virginia"> Virginia</option>
                                <option value="Washington"> Washington</option>
                                <option value="West Virginia"> West Virginia</option>
                                <option value="Wsiconsin"> Wisconsin </option>
                                <option value="Wyoming">  Wyoming</option>
                            </select>
                        </div>
                        <div class="form-group col-md-2 mt-3">
                            <label for="inputZip">Zip</label>
                            <input type="text" class="form-control" id="inputZip" onChange={handleChange}></input>
                        </div>
                    </div>
                    <div class="form-group mt-3">
                        <label for="exampleFormControlTextarea1">Comments</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" onChange={handleChange}></textarea>
                    </div>
                    <div class="form-group">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="gridCheck"></input>
                            <label class="form-check-label" for="gridCheck">
                                I accept the terms and conditions
                            </label>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary">Sign in</button>
                </form>
            </main>

            <p style={{marginLeft:"345px", marginTop:"60px", width:"629Px", height:"135px"}}>Your well-being matters, and taking this step to fill out our therapy form is a significant stride toward positive change. The information you provide will be handled with the utmost confidentiality and used to tailor our approach to meet your unique needs. Your openness will guide us in creating a personalized therapy experience focused on your growth and well-being. </p>


            <div>
                <Accordion style={{marginTop:"100px" }}>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Is my information safe?</Accordion.Header>
                        <Accordion.Body>
                            Absolutely, ensuring the safety and confidentiality of your information is our top priority. We've taken extensive measures to guarantee the security of all data shared during our online therapy sessions. Here's how we ensure your information remains safe:

                            <p> Secure Platforms: We use encrypted and secure platforms that adhere to industry standards to protect the privacy of your conversations. All data transmitted during our sessions is encrypted to maintain confidentiality.

                                Strict Confidentiality </p>

                            <p>Policies: Our team strictly follows professional ethics and confidentiality policies. Your sessions and any personal information shared during them are kept confidential and are not disclosed to anyone without your consent, except in cases where it is required by law to ensure your safety or the safety of others.</p>

                            <p>Professional Standards: Our therapists are bound by legal and ethical guidelines that emphasize the importance of privacy and confidentiality. Your information will be handled with the utmost care and respect.</p>

                            <p>Access Controls: We implement robust access controls to ensure that only authorized individuals, such as our therapists, have access to your information. Your data is securely stored and can only be accessed by authorized personnel.</p>

                            <p> Transparent Communication: If you have any concerns about privacy or data security, we encourage you to openly discuss them with us. We're more than happy to address any questions you may have and provide additional information to ensure you feel comfortable and informed.</p>

                            Your trust in us is valued, and we are committed to upholding the highest standards of confidentiality and privacy throughout your online therapy experience. If you have any further questions or need more information, please feel free to ask. Your peace of mind is essential to us."
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Does anyone other than my therapist have access to my account?</Accordion.Header>
                        <Accordion.Body>
                            <p>
                                Absolutely not. We take your privacy and confidentiality very seriously. Only licensed counselors directly involved in your care have limited access to your account. Our team ensures that all access is strictly governed and monitored to maintain the highest level of confidentiality and security.

                                <p>Your personal information and the content of our sessions are confidential and are not shared with anyone, including non-counseling staff. We adhere to professional ethics and legal requirements to safeguard your privacy.</p>

                                <p>If you have any specific concerns about privacy or data security, please feel free to let us know. We are more than happy to address any questions you may have and further assure you of our commitment to maintaining your privacy.</p>
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                
            </div>
        </div>

    )

}


