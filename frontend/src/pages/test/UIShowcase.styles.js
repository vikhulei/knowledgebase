import styled from "styled-components";
import { Container, Section } from "../../design/primitives/Primitives";
import { COLORS } from "../../design/tokens/Colors";


const HomeOuter = styled(Section)`
    background-color: ${COLORS.black};
    background-color: black;
    // height: 100vh;
`

const HomeInner = styled(Container)`
    height: 100%;
    background-color: lightgrey;
    display: flex;
    flex-direction: column;
    gap: 50px;
    justify-content: center;
    font-weight: bold;
    font-size: 3rem;
`

export { HomeOuter, HomeInner }