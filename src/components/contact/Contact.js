import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";

const contact = () => {
  return (
    <Container fluid className="contact-section">
         <Particle />
        <div md={7} className="contact-header">
            <h1  className="heading-1">Get In Touch.</h1>
            </div>
        <br />
          
           <div className="row">
                <div className="contact-form">
                    <form action="https://formspree.io/f/xayvdyky" method="post" target="_blank" id="con-form">
                        <div className="row">
                            <div className="w-50">
                                <div className="input-group outer-shadow hover-in-shadow">
                                    <input type="text" name="Name" placeholder="Your Name" class="input-control" required />
                                </div>
                                <div className="input-group outer-shadow hover-in-shadow">
                                    <input type="text" name="Email" placeholder="Email id" class="input-control" required />
                                </div>
                                <div className="input-group outer-shadow hover-in-shadow">
                                    <input type="text" name="Subject" placeholder="subject" class="input-control" required />
                                </div>
                            </div>
                            <div class="w-50">
                                <div class="input-group outer-shadow hover-in-shadow">
                                    <textarea className="input-control txt" name="Message" placeholder="Message"></textarea>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="submit-btn">
                                <button type="submit" className="btn-1 outer-shadow hover-in-shadow">Send Message</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
       </Container>
  )
}

export default contact;