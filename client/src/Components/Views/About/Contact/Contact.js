import Layout from '../../../UtilComponents/Layout';
import styled from "styled-components";
import { MdOutlineMailOutline } from 'react-icons/md';
import {FaLinkedin, FaTwitterSquare, FaYoutubeSquare} from 'react-icons/fa';
import colors from "../../../../styles/colors";
import {ContactForm} from "./ContactForm";

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
  width: 100%;
  color: black;
  display: flex;
  flex-direction: row;
  align-items: center;
  .address {
    z-index: 10;
    height: 200px;
    top: 50px;
    position: absolute;
    width: 100vw;
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
    flex-direction: column;
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




const Contact= () => {
    return(
        <Layout>
            <StyledContact>
                <div className="address">
                    <iframe width="100%" height="100%" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"  title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.43444669756!2d-79.39085344846093!3d43.65993365990993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34b632b77689%3A0x901c210dff19e5a4!2s101%20College%20St%2C%20Toronto%2C%20ON%20M5G%201L7!5e0!3m2!1sen!2sca!4v1581544280286!5m2!1sen!2sca" />
                </div>
                <div className="content">

                </div>
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
                <div className="content">
                    <div className="heading">Contact Us</div>
                    <div className="content">
                        Benjamin Haibe-Kains Laboratory, Ph.D.<br/>
                        Scientist, Princess Margaret Cancer Centre, University Health Network<br/>
                        Assistant Professor, Department of Medical Biophysics, University of Toronto<br/>
                    </div>
                    <ContactForm/>
                    <div className="social">
                        <a href="https://www.youtube.com/@bhklab2945">
                            <FaYoutubeSquare style={{color: 'gray', fontSize: '30px', padding: '5px'}}/>
                        </a>
                        <a href="https://www.twitter.com/bhklab">
                            <FaTwitterSquare style={{color: 'gray', fontSize: '30px', padding: '5px'}}/>
                        </a>
                        <a href="https://www.linkedin.com/in/bhklab/">
                            <FaLinkedin style={{color: 'gray', fontSize: '30px', padding: '5px'}}/>
                        </a>
                    </div>
                </div>
            </StyledContact>
        </Layout>
    );
}

export default Contact;
