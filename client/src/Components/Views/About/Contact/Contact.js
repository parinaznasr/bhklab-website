import Layout from '../../../UtilComponents/Layout';
import styled from "styled-components";
import { MdOutlineMailOutline } from 'react-icons/md';
import {FaLinkedin, FaTwitterSquare, FaYoutubeSquare} from 'react-icons/fa';
import colors from "../../../../styles/colors";
import {useState} from "react";

const StyledEmail = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  flex-direction: row;
  white-space: nowrap;
  border-radius: 3.5px;
  color: black;
  margin-bottom: 10%;
  &:hover {
    color: ${colors.navbarLink};
  }
`;

const StyledSection = styled.div`
  display: flex;
  margin: 20px 30px;
  flex-direction: column;
`

const StyledContact = styled.div`
  width: 800px;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  .address {
    z-index: 10;
    height: 200px;
    position: absolute;
    width: 100%;
  }
  a{
    text-decoration: none;
    color: black;
  }
  .heading {
    height: 60px;
    font-size: 24px;
    font-weight: normal;
    margin-top: 250px;
  }
  .content {
    font-size: 15px;
    line-height: 20px;
    font-weight: normal;
    display: flex;
    flex-direction: row;
  }

  .email-container {
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    
    a {
      text-decoration: none;
      color: black;
      &:hover {
        color: var(--light-gray);
        text-decoration: none;
      }
    }
  }
`

const FORM_ENDPOINT = ""; // TODO - fill on the later step

const ContactForm = () => {
    // const [submitted, setSubmitted] = useState(false);
    // const handleSubmit = () => {
    //     setTimeout(() => {
    //         setSubmitted(true);
    //     }, 100);
    // };
    //
    // if (submitted) {
    //     return (
    //         <>
    //             <div className="text-2xl">Thank you!</div>
    //             <div className="text-md">We'll be in touch soon.</div>
    //         </>
    //     );
    // }
    //
    // return (
    //     <form
    //         action={FORM_ENDPOINT}
    //         onSubmit={handleSubmit}
    //         method="POST"
    //         target="_blank"
    //     >
    //         <div className="mb-3 pt-0">
    //             <input
    //                 type="text"
    //                 placeholder="Your name"
    //                 name="name"
    //                 className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
    //                 required
    //             />
    //         </div>
    //         <div className="mb-3 pt-0">
    //             <input
    //                 type="email"
    //                 placeholder="Email"
    //                 name="email"
    //                 className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
    //                 required
    //             />
    //         </div>
    //         <div className="mb-3 pt-0">
    //     <textarea
    //         placeholder="Your message"
    //         name="message"
    //         className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
    //         required
    //     />
    //         </div>
    //         <div className="mb-3 pt-0">
    //             <button
    //                 className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
    //                 type="submit"
    //             >
    //                 Send a message
    //             </button>
    //         </div>
    //     </form>
    // );
    const [status, setStatus] = useState("Submit");
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
        const { name, email, message } = e.target.elements;
        let details = {
            name: name.value,
            email: email.value,
            message: message.value,
        };
        let response = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(details),
        });
        setStatus("Submit");
        let result = await response.json();
        alert(result.status);
    };
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Your name *</label>
                <input type="text" id="name" required />
            </div>
            <div>
                <label htmlFor="email">Your e-mail address *</label>
                <input type="email" id="email" required />
            </div>
            <div>
                <label htmlFor="email">Subject *</label>
                <input type="email" id="email" required />
            </div>
            <div>
                <label htmlFor="message">Message *</label>
                <textarea id="message" required />
            </div>
            <button type="submit">{status}</button>
        </form>
    );
};


const Contact= () => {
    return(
        <Layout>
            <StyledContact>
                <div className="heading">Contact Us</div>
                {/*<div className="content">*/}
                {/*    Benjamin Haibe-Kains Laboratory, Ph.D.<br/>*/}
                {/*    Scientist, Princess Margaret Cancer Centre, University Health Network<br/>*/}
                {/*    Assistant Professor, Department of Medical Biophysics, University of Toronto<br/>*/}
                {/*</div>*/}
                <ContactForm/>
                <div className="content">
                    <StyledSection>
                        Soleil Miron, Administrative Assistant <br/>
                        Phone: +1 (416) 581-7628<br/>
                        <div className="email-container">
                            <a href={`mailto:${'smiron@uhnresearch.ca'}`}>
                                <StyledEmail><MdOutlineMailOutline size={20} />E-mail: Send Soleil a message<br/></StyledEmail>
                            </a>
                        </div>
                    </StyledSection>
                    <StyledSection>
                        <div className="content">
                            The MaRS Center, TMDT room 11-310<br/>
                            101 College Street,<br/>
                            Toronto, ON,<br/>
                            M5G 1L7, Canada<br/>
                        </div>
                    </StyledSection>
                </div>
                <div className="social">
                    <a href="https://www.twitter.com/bhklab">
                        <FaTwitterSquare style={{color: 'gray', fontSize: '30px', padding: '5px'}}/>
                    </a>
                    <a href="https://www.linkedin.com/in/bhklab/">
                        <FaLinkedin style={{color: 'gray', fontSize: '30px', padding: '5px'}}/>
                    </a>
                </div>
                <div className="address">
                    <iframe width="100%" height="100%" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"  title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.43444669756!2d-79.39085344846093!3d43.65993365990993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34b632b77689%3A0x901c210dff19e5a4!2s101%20College%20St%2C%20Toronto%2C%20ON%20M5G%201L7!5e0!3m2!1sen!2sca!4v1581544280286!5m2!1sen!2sca" />
                </div>
            </StyledContact>
        </Layout>
    );
}

export default Contact;
