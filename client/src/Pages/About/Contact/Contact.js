import Layout from '../../../Components/Utils/Layout';
import styled from "styled-components";
import { MdOutlineMailOutline } from 'react-icons/md';
import {FaLinkedin, FaTwitterSquare, FaYoutubeSquare} from 'react-icons/fa';
import colors from "../../../styles/colors";
import {ContactForm} from "./ContactForm";
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const MapContainer = styled.div`
  width: 100%;
  height: 250px;
  margin-bottom: 2em;
`;


const MapFrame = styled.iframe`
  width: 100%;
  height: 100%;
  border: 0;
`;

const StyledEmail = styled.a`
  width: fit-content;
  display: flex;
  align-items: center;
  flex-direction: row;
  white-space: nowrap;
  border-radius: 3.5px;
  color: black;
  margin-bottom: 10%;
  &:hover {
    color: ${colors.header_deep_blue};
  }
`;

const StyledSection = styled.div`
  display: flex;
  margin: 20px 30px;
  flex-direction: column;
  align-items: center;
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
    color: black;
  }

  .heading {
    height: 60px;
    font-size: 12px;
    font-weight: normal;
    margin-top: 250px;
    text-align: center;
  }

  .content {
    font-size: 14px;
    line-height: 20px;
    font-weight: normal;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .email-container {
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`



const Contact= () => {
    return(
        <Layout>
            <StyledContact>
                <div className="address">
                    <MapContainer>
                        <MapFrame
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.43444669756!2d-79.39085344846093!3d43.65993365990993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34b632b77689%3A0x901c210dff19e5a4!2s101%20College%20St%2C%20Toronto%2C%20ON%20M5G%201L7!5e0!3m2!1sen!2sca!4v1581544280286!5m2!1sen!2sca"
                        />
                    </MapContainer>
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
                            <YouTubeIcon style={{color: 'gray', fontSize: '30px', padding: '5px'}}/>
                        </a>
                        <a href="https://www.twitter.com/bhklab">
                            <TwitterIcon style={{color: 'gray', fontSize: '30px', padding: '5px'}}/>
                        </a>
                        <a href="https://www.linkedin.com/in/bhklab/">
                            <LinkedInIcon style={{color: 'gray', fontSize: '30px', padding: '5px'}}/>
                        </a>
                    </div>
                </div>
            </StyledContact>
        </Layout>
    );
}

export default Contact;
