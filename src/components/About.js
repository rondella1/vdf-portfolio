import styled from "styled-components";
import { Link } from "react-router-dom";
import TextTransition, {presets} from 'react-text-transition';
import { useState, useEffect } from "react";

const EXPERIENCE = ['digital curation.', 'librarianship.', 'data analysis.' ];

const About = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(
            () => setIndex((index) => index + 1),
            3000,
        );
        return () => clearTimeout(intervalId);
    }, []);

    return (
        <>
        <Wrapper>
            <AboutContainer>
                <div>Veronica has experience in<ExperienceText springConfig={presets.slow} style={{fontSize: '90%'}}>{EXPERIENCE[index % EXPERIENCE.length]}</ExperienceText></div>
                <p>Trained in MERN stack development, she's interested in collaborating on projects in the digital humanities and user experience design.</p>
            </AboutContainer>
            <Sample>
                <p>Find a sample of her work <StyledLink to="/work">here</StyledLink>.</p>
            </Sample>
        </Wrapper>
        </>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    width: 100%;

    @media (max-width: 768px) {
        width: 80%;
    }
  
`;

const AboutContainer = styled.div`
    margin-top: 160px;

    @media (max-width: 768px) {

        margin-top: 100px;
    }

    div {
        display: inline-flex;
        font-size: 1.3em;
        align-items: center;

        @media (max-width: 600px) {
        font-size: 1.1em;
    }

        @media (max-width: 768px) {
            font-size: 1.2em;
        }

    }

    p {
        font-size: 1.3em;

        @media (max-width: 600px) {
        font-size: 1.1em;
    }

    @media (max-width: 768px) {
            font-size: 1.2em;
        }
    }

`;

const Sample = styled.div`
    display: flex;
    margin-top: 40px;

    p {
        font-size: 1.3em;

        @media (max-width: 600px) {
        font-size: 1.1em;
    }
     
    @media (max-width: 768px) {
            font-size: 1.2em;
        }

    }
`;

const StyledLink = styled(Link)`
    text-decoration: underline;
    color: black;

    &:hover {
        color: #FFFF66;
    }
`;

const ExperienceText = styled(TextTransition)`
    display: inline-block;
    vertical-align: middle;
    margin-bottom: 0px;
    margin-left: 6px;

`;

export default About;