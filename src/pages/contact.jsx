import React from "react"
import "../styles/contact.css";
import Navigation from '../components/navbar/navigation';
import { MDBContainer, MDBRow, MDBCol, MDBIcon, MDBBtn, MDBInput } from "mdbreact";
import { AiOutlineLinkedin, AiFillGithub, AiOutlineMail } from "react-icons/ai";

export default function Contact() {

    return (
        <div>
            <Navigation />
            <div className="contactform">
                <MDBContainer>
                    <p className="text-center w-responsive mx-auto pb-5">
                        Feel free to reach me.
            </p>
                    <MDBRow>
                        <MDBCol md="12" className="md-0 mb-5">
                            <form action="./insert.php" method="POST" enctype="multipart/form-data" name="EmailForm">
                                <MDBRow>
                                    <MDBCol md="6">
                                        <div className="md-form mb-0">
                                            <MDBInput type="text" id="contact-name" label="Your name" name="username" required />
                                        </div>
                                    </MDBCol>
                                    <MDBCol md="6">
                                        <div className="md-form mb-0">
                                            <MDBInput
                                                type="text"
                                                id="contact-email"
                                                label="Your email"
                                                name="email"
                                                required
                                            />
                                        </div>
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow>
                                    <MDBCol md="12">
                                        <div className="md-form mb-0">
                                            <MDBInput type="text" id="contact-subject" label="Subject" name="subjec" required />
                                        </div>
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow>
                                    <MDBCol md="12">
                                        <div className="md-form mb-0">
                                            <MDBInput
                                                type="textarea"
                                                id="contact-message"
                                                label="Your message"
                                                name="messag"
                                                required
                                            />
                                        </div>
                                    </MDBCol>
                                </MDBRow>
                                <div className="text-center text-md-left">
                                    <MDBBtn color="primary" size="md" type="submit" value="Submit">
                                        Send
            </MDBBtn>
                                </div>
                            </form>
                        </MDBCol>
                        <MDBRow md="1" className="text-center w-responsive mx-auto pb-12">
                            <ul className="list-unstyled mb-0">
                                <li>
                                    <MDBIcon icon="map-marker-alt" size="2x" className="blue-text" />
                                    <p>Middenweg 103A 1462 HG Middenbeemster The Netherlands</p>
                                </li>
                                <li>
                                    <MDBIcon icon="phone" size="2x" className="blue-text mt-4" />
                                    <p>+31 631947351 </p>
                                </li>
                                <li>
                                    <MDBIcon icon="envelope" size="2x" className="blue-text mt-6" />
                                    <p>kristofferleemburg@gmail.com</p>
                                </li>
                                {/* <li>
                                    <a href="http://www.linkedin.com/in/kristoffer-leemburg/"><AiOutlineLinkedin className="icon" /></a>
                                    <a href="https://github.com/KristofferLeemburg"><AiFillGithub className="icon" /></a>
                                    <a href="mailto:kristofferleemburg@gmail.com"><AiOutlineMail className="icon" /></a>

                                </li> */}
                            </ul>
                        </MDBRow>
                    </MDBRow>
                </MDBContainer>
            </div>
        </div>
    );
}

