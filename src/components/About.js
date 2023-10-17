import React from 'react'
import hands from '../Image/hands.jpg'

export default function About() {
  return (
    <div>
      <h2 style={{}}>About Us</h2>
      <img src={hands} className="d-block rounded float-end" alt="..." height="10" style={{height: "300px"}} />
      <p>Welcome to ITherapy, where we believe in healing and growth through understanding, compassion, and guidance. Our mission is to support you on your journey to mental and emotional well-being, providing a safe space to explore your thoughts, feelings, and experiences.</p>

      <p>Our Approach
        At ITherapy, we adopt a client-centered, strengths-based approach to therapy. We understand that every individual is unique, and we tailor our approach to meet your specific needs and circumstances. Our skilled and empathetic therapists work collaboratively with you to develop personalized treatment plans that align with your goals and values.</p>

      <p>Our Values
        Empathy: We provide a caring and empathetic environment where you can express yourself openly without judgment.

        Professionalism: Our team of licensed therapists adhere to the highest professional standards, ensuring your therapy experience is both effective and ethical.

        Confidentiality: Your privacy is of utmost importance to us. We maintain strict confidentiality and privacy practices to protect your information.</p>

      <p>What We Offer
        Individual Therapy: Tailored one-on-one sessions to help you explore and address your unique concerns and challenges.

        Couples Counseling: Guidance and support for couples seeking to improve communication, resolve conflicts, and strengthen their relationship.

        Family Therapy: A collaborative approach to address family dynamics and relationships, promoting understanding and harmony.

        Group Therapy: A supportive environment where you can connect with others facing similar issues, sharing experiences and strategies for growth.</p>

      Get Started
      Embarking on a therapeutic journey takes courage, and we are here to support you every step of the way. Reach out to us to schedule an initial consultation and begin your path toward healing and positive change.

      Let us help you rediscover your inner strength, find peace, and create a fulfilling life. Together, we can make a difference.
    </div>
  )
}

