import React from 'react';
import styled from 'styled-components';
import colors from '../../../styles/colors';

const StyledFooter = styled.div`
  position: relative;
  bottom: 0%;
  width: 100vw;
  height: 100px;
  display: flex;
  align-items: center;
  background-color: ${colors.gray_footer};
`

const FooterContent = styled.div`
    width: 80vw;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const FooterItem = styled.div`
    display: flex;
    align-items: center;
    color: ${colors.gray_light};
    font-size: 10px;
    a {
        color: ${colors.gray_light};
        text-decoration: none;
    }
    .divider {
        margin: 0px 10px;
    }
    .logo-sm {
        img {
            width: 100%;
        }
        margin-right: 30px;
    }
`

const Footer = () => {
    return (
        <StyledFooter>
            <FooterContent>
                <FooterItem>
                    <span className='link'><a href='/'>Home</a></span>
                    <span className='divider'>|</span>
                    <span className='link'><a href='/research'>Research</a></span>
                    <span className='divider'>|</span>
                    <span className='link'><a href='/publications'>Publications</a></span>
                    <span className='divider'>|</span>
                    <span className='link'><a href='/datasets'>Datasets</a></span>
                    <span className='divider'>|</span>
                    <span className='link'><a href='/equipments'>Resources</a></span>
                    <span className='divider'>|</span>
                    <span className='link'><a href='/presentations'>Presentations</a></span>
                    <span className='divider'>|</span>
                    <span className='link'><a href='https://www.bhklab.ca'>Software</a></span>
                    <span className='divider'>|</span>
                    <span className='link'><a href='/positions'>Positions</a></span>
                    <span className='divider'>|</span>
                    <span className='link'><a href='/contact'>Contact</a></span>

                </FooterItem>
                <FooterItem>
                    <span>BHKLAB &#169; 2022</span>
                </FooterItem>
            </FooterContent>
        </StyledFooter>
    );
}

export default Footer;
