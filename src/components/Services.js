import React from 'react'
import Button from 'react-bootstrap/Button';
import holdinghands from '../Image/holdinghands.jpg'
import ServiceBox from '../features/Servicebox';
import phone from '../Image/phone.jpg'
import notepad from '../Image/notepad.jpg'
import airport from '../Image/airport.jpg'

const data = [
  {
    title: "Outbound Messages",
    subtitle: "Help at every step of the way",
    description: "Create Unique ",
    btntext: "Start Questionnaire",
    image: phone,
    imagetext: "image1",
  },
  {
    title: "Outbound Messages",
    subtitle: "Help at every stage of your great process",
    description: "Create unique help content and serve it to different audiences, like paid users or visitors or even based on language.",
    btntext: "Contact",
    image: notepad,
    imagetext: "image2",
  },
  {
    title: "Learn Helpful Tools To Help Your Transistion",
    subtitle: "Powerful.Flexible.Capable",
    description: "Set Clear Expectations Of Your Needs Based On Upfront Information For Follow-Up Later",
    btntext: "Contact",
    image: airport,
    imagetext: "image3",
  },
]

export default function Services() {
  return (

    <>
      <div>
        <div style={{display: "flex", justifyContent: 'space-between', paddingTop: "40px"}}>
          <div>
            <h3>
              Lorem ipsum dolor sit amet consectetur.
            </h3>

            <Button type="button" style={{ backgroundColor: "#800020" }} variant="outline-light" >Contact</Button>{' '}
            <p>No hidden fees. 30 days free trial.</p>
          </div>
          <div>
            <img src={holdinghands} className="rounded float-left " alt="..." height="300" />
          </div>
        </div>
        <div>
          {data.map((ele) => {
            return (
              <>
                <ServiceBox
                  title={ele.title}
                  subtitle={ele.subtitle}
                  description={ele.description}
                  img={ele.img}
                  imgtext={ele.imgtext}
                />
              </>
            )
          })}
        </div>
      </div>
    </>

  )
}
