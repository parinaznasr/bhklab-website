import Layout from '../../../Components/Utils/Layout';
import styled from "styled-components";
import { MdOutlineMailOutline } from 'react-icons/md';
import colors from "../../../styles/colors";
import {ContactForm} from "../../../Components/Utils/ContactForm";
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import Container from "@mui/material/Container";
import {Grid} from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    padding: '20px',
    textAlign: 'center',
}));

const MapFrame = styled.iframe`
  width: 100%;
  height: 100%;
  border: 0;
`;

const StyledEmail = styled.a`
  width: fit-content;
  display: flex;
  align-Papers: center;
  flex-direction: row;
  white-space: nowrap;
  border-radius: 3.5px;
  color: black;
  margin-bottom: 10%;
  &:hover {
    color: ${colors.header_deep_blue};
  }
`;

const StyledContent = styled.div`
  width: 100%;
  color: black;
  display: flex;
  line-height: 20px;
  font-weight: normal;
  flex-direction: column;
  .icons {
    flex-direction: row;
  }
`

const StyledIcons = styled.div`
  width: 100%;
  display: flex;
  line-height: 20px;
  flex-direction: row;
  justify-content: center;
`

const StyledHeading= styled.div`
  width: 100%;
  display: flex;
  color: black;
  justify-content: center;
  height: 60px;
  margin-top: 20px;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
`



const Contact= () => {
    return(
        <Layout>
            <MapFrame
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.43444669756!2d-79.39085344846093!3d43.65993365990993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34b632b77689%3A0x901c210dff19e5a4!2s101%20College%20St%2C%20Toronto%2C%20ON%20M5G%201L7!5e0!3m2!1sen!2sca!4v1581544280286!5m2!1sen!2sca"
            />
            <Container>
                <StyledHeading>Contact Us</StyledHeading>
                <Box>
                    <Grid container spacing={1} sx={{ flexGrow: 1 }}>
                        <Grid item xs={12} md={12} lg={12} container spacing={2}>
                            <Grid item xs={4} lg={4}>
                                <Item>
                                    <Box id="category-a" sx={{ fontSize: "12px", textTransform: "uppercase" }}>
                                       <StyledContent>
                                           Soleil Miron, Administrative Assistant <br />
                                           Phone: +1 (416) 581-7628<br />
                                           <div style={{display:'flex', flexDirection:'row', flexWrap: 'wrap', justifyContent: 'center'}}>
                                               <StyledEmail href={`mailto:${'smiron@uhnresearch.ca'}`}>
                                                   <MdOutlineMailOutline size={18} />Send a message<br />
                                               </StyledEmail>
                                           </div>
                                       </StyledContent>
                                    </Box>
                                </Item>
                                <Item>
                                    <Box id="category-b" sx={{ fontSize: "12px", textTransform: "uppercase" }}>
                                        <StyledContent>
                                            The MaRS Center, TMDT room 11-310<br />
                                            101 College Street,<br />
                                            Toronto, ON,<br />
                                            M5G 1L7, Canada<br />
                                        </StyledContent>
                                    </Box>
                                </Item>
                                <Box sx={{ mt: 2 }}>
                                    <Grid container columnSpacing={1}>
                                        <StyledIcons>
                                            <Grid item>
                                                <a href="https://www.youtube.com/@bhklab2945">
                                                    <YouTubeIcon style={{ color: "gray", fontSize: "30px", padding: "5px" }} />
                                                </a>
                                            </Grid>
                                            <Grid item>
                                                <a href="https://www.twitter.com/bhklab">
                                                    <TwitterIcon style={{ color: "gray", fontSize: "30px", padding: "5px" }} />
                                                </a>
                                            </Grid>
                                            <Grid item>
                                                <a href="https://www.linkedin.com/in/bhklab/">
                                                    <LinkedInIcon style={{ color: "gray", fontSize: "30px", padding: "5px" }} />
                                                </a>
                                            </Grid>
                                        </StyledIcons>
                                    </Grid>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={10} lg={8}>
                                <Item style={{display: 'flex', justifyContent: 'left'}}>
                                    <Grid container columnSpacing={1}>
                                        <ContactForm/>
                                    </Grid>
                                </Item>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Layout>
    );
}

export default Contact;
