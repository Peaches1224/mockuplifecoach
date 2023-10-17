import React from 'react'
import Button from 'react-bootstrap/Button';
import holdinghands from '../Image/holdinghands.jpg'
import ServiceBox from '../features/Servicebox';
import phone from '../Image/phone.jpg'
import notepad from '../Image/notepad.jpg'
import yogabeach from '../Image/yogabeach.jpg'

const data = [
  {
    title: "Outbound Messages",
    subtitle: "Help at every step of the process to growing",
    description: "empowering you to embrace your journey towards a happier and more fulfilling life. ",
    btntext: "Start Questionnaire",
    image: phone,
    imagetext: "image1",
  },
  {
    title: "Learn Helpful Tools To Help Your Transition",
    subtitle: "Help at every stage of your great process",
    description: "Create unique help content and serve it to different audiences, like paid users or visitors or even based on language.",
    btntext: "Contact",
    image: notepad,
    imagetext: "image2",
  },
  {
    title: "Customize Your Therapy",
    subtitle: "Powerful.Flexible.Capable",
    description: "Set Clear Expectations Of Your Needs Based On Upfront Information For Follow-Up Later",
    btntext: "Contact",
    image: yogabeach,
    imagetext: "image3",
  },
]

export default function Services() {
  return (
      <div>
        <div style={{display: "flex", justifyContent: 'space-between', paddingTop: "40px", width:"1120px", paddingLeft:"80px"}}>
          <div>
            <h3 style={{marginBottom:"50px"}}>
            Mindful Transitions: Your Journey, Our Guidance
            </h3>

            <Button type="button" style={{ backgroundColor: "#800020" }} variant="outline-light" >Contact</Button>{' '}
            <p>No hidden fees. 30 days free trial.</p>
          </div>
          <div style={{flexBasis:""}}>
            <img src={holdinghands}  className="rounded " alt="..." width="500px" height="300px"  />
          </div>
        </div>
        <div style={{paddingTop:"60px"}}>
          {data.map((ele) => {
            return (
              <>
                <ServiceBox
                  title={ele.title}
                  subtitle={ele.subtitle}
                  description={ele.description}
                  image={ele.image}
                  imgtext={ele.imgtext}
                />
              </>
            )
          })}
        </div>
      </div>
  )
}
