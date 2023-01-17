import styled from "styled-components";
import {Link} from "react-router-dom";
import colors from "./colors";

export const StyledLink = styled(Link)`
    color: ${colors.navbarLink};
    text-decoration: none;
    target: "_blank";
`;
