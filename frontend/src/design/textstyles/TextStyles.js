import styled from "styled-components";
import { COLORS } from "../tokens/Colors";


// Small uppercase labels
export const Eyebrow = styled.div`
    font-size: 12px;
    font-weight: 700;
    color: ${COLORS.primary};
    text-transform: uppercase;
    margin-bottom: 16px;
`;

// Main page heading
export const PageTitle = styled.h1`
    font-size: 36px;
    font-weight: 700;
    line-height: 1.2;
`;

// Home dashboard hero heading
export const HeroTitle = styled.h1`
    font-size: 52px;
    font-weight: 700;
    line-height: 1.1;
`;

// Section headings
export const SectionTitle = styled.h2`
    font-size: 32px;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 40px;
`;

// Card headings and content titles
export const ContentTitle = styled.h3`
    font-size: 1rem;
    font-weight: 600;
`;

// Standard paragraph text
export const BodyText = styled.p`
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
`;

// Smaller descriptions and secondary text
export const SmallText = styled.p`
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5;
`;

// Labels, dates and metadata
export const Caption = styled.span`
    font-size: 12px;
    font-weight: 400;
    line-height: 1.5;
`;

// Dashboard statistic numbers
export const StatValue = styled.span`
    font-size: 34px;
    font-weight: 700;
    line-height: 1.1;
`;