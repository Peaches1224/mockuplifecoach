import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './ExampleCarouselImage';
import review from "../Image/womanlake.jpg"
import Accordion from 'react-bootstrap/Accordion';

const myreviews = {
  reviewOne: "My experience with Deborah Davis has been nothing short of transformative. From our very first session, I felt a sense of trust and understanding. They are an exceptional listener, providing insights and guidance that have helped me navigate through some challenging life situations. Their empathetic and non-judgmental approach created a safe space for me to open up and work through my concerns. I've gained valuable tools and coping strategies that have significantly improved my overall well-being. I wholeheartedly recommend her to anyone seeking a skilled and compassionate therapist.",
  reviewTwo: "Deborah Davis has been an incredible source of support and guidance on my mental health journey. Their professionalism and expertise are evident in every session. They possess a rare ability to truly understand and validate my experiences, all while providing constructive ways to address my concerns. Their compassionate nature and genuine care for their clients foster a strong therapeutic relationship. I've made significant progress under their guidance, and I'm grateful to have found such a dedicated and talented therapist.",
  reviewThree: " I can't recommend Deborah Daivs enough. They have a remarkable ability to create a welcoming and safe environment where I felt comfortable sharing my deepest thoughts and feelings. Their warm, empathetic approach coupled with their deep understanding of mental health dynamics made every session immensely beneficial. They tailored our discussions to my needs, always offering insights and strategies that have helped me grow and overcome personal challenges. I credit her for the positive changes in my life, and I highly encourage anyone in need of therapy to reach out to them. You won't be disappointed! "
}

export default function Pricing() {
  return (
    <div>
      <h4 className='pricing-h4' style={{ marginLeft: "100px" }}>ITherapy</h4>
      <h2 className='pricing-h2' style={{ marginLeft: "30px" }}>Building Great Relationships, One User At A Time</h2>
      <p style={{ display: "flex", justifyContent: "center" }}>Choose the best plan for you. Flexible, wonderful plan. Cancel or switch anytime.</p>
      <div>

        {/* <span class="border border-primary"></span> */}
        <div className='firstplan' style={{ marginLeft: "100px" }}>

          <div className='firstcard'>
            <h4>First Plan</h4>
            <h2>$75</h2>
            <p>billed monthly</p>
            <button style={{ display: "block", border: "1px solid #34B6FF", borderRadius: "10px", minWidth: "100px", textAlign: "center", backgroundColor: "#EBF8FF", margin: "0 auto 25px  auto" }}>Sign In</button>
            <ul className='list'>
              <li>
                &#10003; Access to one individual therapy session per month.
              </li>
              <li>
                &#10003; Discounted rates for adittional sessions.
              </li>
              <li>
                &#10003; Email support between sessions.
              </li>
            </ul>
          </div>
          <div className='secondcard'>
            <div style={{ position: "absolute", top: "-50px", background: "#800020", maxHeight: "40px", minWidth: "250px" }}>
              <span style={{ lineHeight: "-300px", paddingBottom: "10px", display: "inline-block",color:"white" }}>monthly/yearly (Save up to 34%)</span>
            </div>
            <h4>
              Second Plan
            </h4>
            <h2>$150</h2>
            <p>billed monthly</p>
            <button style={{ display: "block", border: "1px solid blue", borderRadius: "10px", minWidth: "100px", textAlign: "center", margin: "0 auto 25px  auto" }}>Let's Talk</button>
            <p>Everything the first plan has plus:</p>
            <ul className='list'>
              <li>
                &#10003; Two individual therapy sessions per month.
              </li>
              <li>
                &#10003; Bi-weekly check-ins via secure messaging.
              </li>
              <li>
                &#10003; Personalized self-care plan development.
              </li>
            </ul>
          </div>
          <div className='thirdcard'>
            <h4>
              Third Plan
            </h4>
            <h2>$250</h2>
            <p>billed monthly</p>
            <button style={{ display: "block", border: "1px solid blue", borderRadius: "10px", minWidth: "100px", textAlign: "center", margin: "0 auto 25px  auto" }}>Let's Talk</button>
            <p>Everything the second plan has plus:</p>
            <ul className='list'>
              <li>
                &#10003;  Four individual therapy sessions per month.
              </li>
              <li>
                &#10003; Unlimited messaging support for real-time guidance.
              </li>
              <li>
                &#10003; Customized stress-reduction techniques.
              </li>
            </ul>
          </div>
        </div>

        <div>
            <h2 style={{marginTop:"60px", marginLeft:"150px"}}>
              Reviews
            </h2>
         
          <Carousel style={{ minWidth: "500px" }}>
            <Carousel.Item interval={5000}>
              <ExampleCarouselImage reviews={myreviews.reviewOne} text="First slide" />
              <Carousel.Caption>
                <h3></h3>
                <p>
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
              <ExampleCarouselImage reviews={myreviews.reviewTwo} text="Second slide" />
              <Carousel.Caption>
                <h3></h3>
                <p></p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
              <ExampleCarouselImage reviews={myreviews.reviewThree} text="Third slide" />
              <Carousel.Caption>
                <h3></h3>
                <p>
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          <div style={{ display:"flex", justifyContent:"center", gap: "200px", marginTop:"60px", marginLeft:"50px" }}>
        <div>
            <img className='rounded-4' width={"50%"} src={review} paddingLeft="100px" height="60px" />
          </div>
          </div>
        </div>
      
        <div style={{ marginTop: "100px", maxWidth: "9000px" }}>
          <h1 style={{ paddingLeft: "350px", marginBottom: "70px" }}> Frequently Asked Questions</h1>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>What's the difference between monthly and annual billing?</Accordion.Header>
              <Accordion.Body>
                Monthly and annual billing refer to the frequency at which a customer is charged for a service or product. The main differences lie in how often the customer is billed and the benefits or drawbacks associated with each billing cycle.

                <p> Monthly Billing:

                  Frequency: Customers are billed once a month.
                  Flexibility: Offers greater flexibility for customers as they can assess the service on a short-term basis and make decisions monthly.
                  Budgeting: Easier for customers to budget and manage their finances on a month-to-month basis.
                  Commitment: Typically, there's less long-term commitment compared to annual billing, allowing customers to cancel or change plans more frequently.
                  Cost: Usually, the cost per payment is lower compared to annual billing, but the overall annual cost may be higher due to the frequency of payments.
                </p>
                <p>
                  Annual Billing:

                  Frequency: Customers are billed once a year.
                  Cost Savings: Often, annual billing comes with cost savings or discounts compared to monthly billing. Businesses may incentivize annual billing to encourage long-term commitments.
                  Long-Term Commitment: Customers commit to the service for a longer period, providing more predictable revenue for the service provider.
                  Convenience: Some customers prefer annual billing for the convenience of a single, once-a-year payment, reducing administrative tasks and reminders.
                  Refunds and Changes: Refunds and changes in the subscription may be more challenging compared to monthly billing due to the longer commitment period.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>What payment methods do you accept?</Accordion.Header>
              <Accordion.Body>
                <p>
                  Credit and Debit Cards: We accept major credit and debit cards, including Visa, MasterCard, American Express, and Discover.
                </p>
                <p>
                  PayPal: We accept PayPal for secure and easy transactions.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>What can I expect in my sessions?</Accordion.Header>
              <Accordion.Body>
                <p>
                  Confidentiality and Trust: Your sessions are a safe space, and everything you share will remain confidential within the bounds of professional ethics and legal requirements.
                </p>
                <p>
                  Assessment and Goal Setting: We'll start by discussing your concerns and goals. Together, we'll formulate a personalized treatment plan tailored to your specific needs.
                </p>
                <p>
                  Open Communication: You're encouraged to openly share your thoughts, emotions, and experiences. This will help us understand you better and guide our therapeutic approach.
                </p>
                <p>
                  Active Listening and Empathy: I will actively listen to you without judgment and show empathy to your experiences. Your feelings and thoughts are important and will be respected.
                </p>
                <p>
                  Evidence-Based Techniques: We'll utilize proven therapeutic techniques and approaches to address your concerns effectively. This may include cognitive-behavioral techniques, mindfulness, talk therapy, or other methods suitable for your situation.
                </p>
                <p>
                  Discussion and Reflection: We'll engage in meaningful discussions and reflections to explore your thoughts and behaviors, helping you gain insights and new perspectives.
                </p>
                <p>
                  Skill-Building and Coping Strategies: You'll learn practical coping strategies and skills to manage challenges, stress, anxiety, or any other issues you may be facing.
                </p>
                <p>
                  Progress Tracking and Adjustments: We'll regularly review your progress towards your goals and make adjustments to our approach if needed to ensure you're getting the most out of your sessions.
                </p>
                <p>
                  Empowerment and Self-Awareness: Our aim is to empower you with tools and insights to enhance self-awareness and promote positive changes in your life.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="">
              <Accordion.Header>Do you take insurence?</Accordion.Header>
              <Accordion.Body>
                <p>
                  Yes, we do accept insurance for our therapy services. We work with several insurance providers to help you access the care you need. To determine the specifics of your coverage and to verify if we are in-network with your insurance provider, please provide us with the following details:</p>

                <p>Your Full Name
                  Insurance Provider's Name
                  Member ID or Policy Number
                  Date of Birth
                  Once we have this information, we will gladly verify your insurance coverage and discuss the details of your benefits, including co-pays, deductibles, and any out-of-pocket costs you may incur. If you have any questions or need assistance with this process, feel free to reach out to our office, and our team will be more than happy to assist you."</p>

                <p> It's important to encourage potential clients to reach out and provide the necessary details so you can guide them through the insurance verification process and help them understand their coverage for therapy services.</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>Do you offer video or phone sessions?</Accordion.Header>
              <Accordion.Body>
                Yes, we absolutely offer video and phone sessions as part of our therapy services. We understand that flexibility is important, and we strive to accommodate our clients in a way that suits their needs best. Whether it's via secure video calls or phone conversations, we're dedicated to providing effective therapy remotely. Here are some key points:

                <p>Secure and Confidential Communication: Our video and phone sessions are conducted through secure and confidential platforms, ensuring your privacy and confidentiality are maintained.</p>

                <p> Convenience and Accessibility: Video and phone sessions offer the flexibility to access therapy from the comfort of your home or any location that's convenient for you.</p>

                <p> Effectiveness of Remote Therapy: Research has shown that remote therapy can be as effective as in-person sessions for many individuals, providing a meaningful and valuable therapeutic experience.</p>

                <p> Easy Scheduling: We'll work with you to find a suitable time that fits your schedule for these remote sessions.</p>

                <p>If you have a preference for video or phone sessions, or if you'd like to discuss which option might work best for you, feel free to let us know. We're here to ensure you receive the support you need in a way that works for you.</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
              <Accordion.Header>How long is an appointment?</Accordion.Header>
              <Accordion.Body>
                <p>Typically, a standard therapy appointment lasts for about 50 to 60 minutes. This duration allows us to have a meaningful and focused conversation, explore your concerns, work through therapeutic exercises, and develop strategies to address your specific goals. However, the exact length of your appointment can be tailored to your needs and preferences.</p>

                <p> During our initial sessions, we can discuss and determine the appropriate duration that suits you best. In some cases, we may schedule longer sessions for specific therapeutic approaches or if more time is needed. Your comfort and progress are our priority, so we are flexible in adjusting the appointment length to ensure you receive the most effective and beneficial therapy experience.</p>

                <p>If you have any preferences regarding the session length or if you'd like to discuss this further, feel free to let us know. We're here to accommodate your needs and make sure you have a positive therapeutic experience.</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6">
              <Accordion.Header>How do I prepare for my first therapy session?</Accordion.Header>
              <Accordion.Body>
                <p> Preparing for your first therapy session is a great step towards making the most out of our time together. Here are some tips to help you prepare and get the most benefit from your first session:</p>

                <p>Reflect on Your Goals and Concerns:
                  Take some time to think about what you'd like to achieve from therapy. Consider the specific issues, concerns, or goals you have in mind. It's perfectly fine if these evolve over time.</p>

                <p> Be Open and Honest:
                  Come to the session with an open mind and a willingness to be honest about your feelings and experiences. Remember, this is a safe space for you to express yourself without judgment.</p>

                <p>  Think About Your History:
                  Reflect on your personal history, significant life events, relationships, and any patterns or recurring themes you've noticed. This can provide valuable context for our discussions.</p>

                <p> Ask Questions:
                  If you have any questions about the therapeutic process, what to expect, or the therapist's approach, feel free to ask. Understanding the process can alleviate any anxieties you may have.</p>

                <p> Arrive Early and Relaxed:
                  Aim to arrive a bit early to settle in and get comfortable. Take a few moments to relax and focus before the session begins.</p>

                <p>Consider Your Preferred Communication Style:
                  Think about how you prefer to communicate—whether you like to talk openly, write things down, or use other forms of expression. This can help us tailor our approach to suit your preferences.</p>

                <p> Bring a Notebook or Device:
                  If you find it helpful, bring a notebook, tablet, or any device to jot down notes or thoughts during the session.</p>

                <p> Be Kind to Yourself:
                  Remember, it's okay to feel nervous or uncertain about your first session. It's a brave step, and we're here to support you throughout this journey.</p>

                <p>Your first session is an opportunity for us to get to know each other better and begin the process of understanding and growth. We're here to support you in every way we can, so don't hesitate to reach out if you have any more questions or concerns before your appointment.</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="7">
              <Accordion.Header>How often would you anticipate seeing me? For how long?</Accordion.Header>
              <Accordion.Body>
                <p>The frequency and duration of our sessions will be based on several factors, including the nature of your concerns, your goals, and what we collectively determine as the most effective approach for your therapy. Here's a general overview:</p>

                <h6>Session Frequency:</h6>

                <p> Initially, we'll typically meet on a weekly basis. This consistent frequency helps us build rapport, delve into your concerns, and work on strategies effectively.
                  Long-Term Frequency:</p>

                <p>As we progress and you start achieving your therapy goals, we can discuss and potentially adjust the frequency of sessions. This might mean transitioning to bi-weekly or monthly meetings, depending on your progress and preferences.
                  Duration of Therapy:</p>

                <p> The length of therapy varies from person to person. Some individuals find that they achieve their goals in a few months, while others may benefit from a longer-term therapeutic relationship.
                  We'll continually assess your progress and discuss how you're feeling about the process. Ultimately, the decision on when to conclude therapy will be a mutual one, considering your progress and goals.
                  Open Communication:</p>

                <p> It's crucial to maintain open communication about how you're feeling and whether you believe adjustments in session frequency or the length of therapy are necessary.
                  Remember, our primary goal is to support you in your journey towards improved mental health and well-being. We'll work collaboratively to create a plan that fits your unique needs and goals. If you have any concerns or questions about the frequency or duration of our sessions, feel free to discuss them openly. Your comfort and progress are our top priorities.</p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </div>

  )
}

// style = {{ color: "#800020 " }}