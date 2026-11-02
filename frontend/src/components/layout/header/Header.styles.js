import styled from "styled-components";
import {Section, Container} from "../../../design/primitives/Primitives"
import { COLORS } from "../../../design/tokens/Colors"
import { Link } from "react-router-dom";

const HeaderOuter = styled(Section)`
    background-color: ${COLORS.black};
    height: 100px;
`
const HeaderInner = styled(Container)`
    
`

const LogoWrapper = styled(Link)`
    // width: 200px;
    height: 50px;
`

const LogoImage = styled.img`
    height: 100%;
`

export {HeaderOuter, HeaderInner, LogoWrapper, LogoImage}