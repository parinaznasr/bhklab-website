import React from 'react';
import styled from 'styled-components';
import colors from '../../styles/colors';

const StyledAnchor = styled.a`
    color: ${colors.hyperlink};
    text-decoration: none;
`;

const HyperLink= (props) => {
    const {link, text, className, style, self, icon} = props;
    return(
        <StyledAnchor
            className={className}
            href={link}
            rel='nonreferrer noopener'
            target={self ? '_self' : '_blank'}
            style={style}>
                {icon}{text}
        </StyledAnchor>
    );
}

export default HyperLink;
