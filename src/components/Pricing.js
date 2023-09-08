import React from 'react'

export default function Pricing() {
  return (
    <div>
      <h4 className='pricing-h4'>ITherapy</h4>
      <h2 className='pricing-h2'>Building Great Relationships, One User At A Time</h2>
      <p>Choose the best plan for you. Flexible, wonderful plan. Cancel or switch anytime.</p>
      <div>
       
        {/* <span class="border border-primary"></span> */}
        <div className='firstplan'>
        
          <div className='firstcard'>
            <h4>First Plan</h4>
            <h2>$75</h2>
            <p>billed monthly</p>
            <button style={{ display: "block", border: "1px solid #34B6FF", borderRadius: "10px", minWidth: "100px", textAlign: "center", backgroundColor:"#EBF8FF", margin: "0 auto 25px  auto"}}>Sign In</button>
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
            <div style={{ position: "absolute", top: "-50px", background:"#800020", maxHeight:"40px", minWidth:"250px"}}>
              <span style={{ lineHeight:"-300px", paddingBottom:"10px", display:"inline-block" }}>monthly/yearly (Save up to 34%)</span>
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

      </div>
    </div>

  )
}

// style = {{ color: "#800020 " }}