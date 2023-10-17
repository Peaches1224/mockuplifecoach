import React from 'react'
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import yogabeach from "../Image/yogabeach.jpg";
import field from "../Image/field.jpg";
import womanlaughing from "../Image/womanlaughing.jpg";
import womanlaughing2 from "../Image/womanlaughing2.jpg";
import yoga from "../Image/yoga.jpg";
import TherapyBox from '../features/TherapyBox';
import sewing from '../Image/sewing.jpg'
import peopleonstairs from "../Image/peopleonstairs.jpg"
import computer from "../Image/computer.jpg"
import sewing2 from "../Image/sewing2.jpg"
const data = [
  {
    title: "Therapy Made Easy",
    subtitle: "Powerful.Flexable.Personal",
    description: "Set clear expectations with clients based on Their Needs and collect upfront information for follow-up later.",
    btntext: "Start Questionnaire",
    image: peopleonstairs,
    imagetext: "image1",
  },
  {
    title: "Outbound Messages",
    subtitle: "Help at every stage of your great process",
    description: "Create unique help content and serve it to different audiences, like paid users or visitors or even based on language.",
    btntext: "Contact",
    image: computer,
    imagetext: "image2",
  },
  {
    title: "Customizable",
    subtitle: "Personal Onboarding",
    description: "We offer personal guided  therapy that fit you and your  needs",
    btntext: "Contact",
    image: sewing2,
    imagetext: "image3",
  },
]
/* unsplash:HvZDCuRnSaY */

// position: absolute;
// width: 420px;
// height: 484px;

// background: url(.jpg);
// border - radius: 10px;


export default function Home() {
  return (
  
    <>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div>
          <h3 >
            Effective therapy that is easier, <br></br>faster and more impactful
          </h3>
          <p>Lorem ipsum dolor sit amet consectetur. Neque nulla faucibus est tempor. </p>
          

          <br></br>
          <Button type="button" style={{ backgroundColor: "#800020" }} variant="outline-light" >Contact</Button>{' '}
          {/* <Button variant="light">Start Questionnaire</Button>{' '} */}
        </div>
        <div className='img-grid'>
          {/* <Image src={huggingheart} fluid />;  */}
          <img id='yoga' src={yoga}  alt="..." height="500" />
          <img id='field' src={field} alt="..." height="150" />
          <img id='womanlaughing2' src={womanlaughing2} alt="..." height="150" />
        </div>
      </div>
      <div className='therapist'>
        <h4 style={{paddingLeft:"450px"}}>#1 Leading Therapist</h4>
      </div>
      <div className=''>
        <h2 style={{paddingLeft:"175px", paddingTop:"30px"}}> Amazing Tools To Help At Every Stage Of Your Process</h2>
        <p> </p>
      </div>
      <div style={{paddingLeft:"170px", color:"white"}}>
        {data.map((ele) => {
          return (
            <>
              <TherapyBox
                title={ele.title}
                subtitle={ele.subtitle}
                description={ele.description}
                btntext={ele.btntext}
                image={ele.image}
                imgtext={ele.imgtext}
              />
            </>
          )
        })}
      </div>
    </>
  )
}

{/* <br></br>
       
          <h3>1. Easy</h3> 
          
          <p style={{width:"300px"}}>
          Whether you use our questionnaire or search for a therapist it is made easy. 
          </p>

        <h3>2.Flexible </h3> 
        <p style={{width:"300px"}}>Support in a way that makes sense
          to you, in person, on zoom or
          by phone. </p>
          
        <h3>3. Personal </h3>
        <p style={{ width: "300px" }}>We offer personal guided
          therapy that fit you and your
          needs.</p> 
         */}