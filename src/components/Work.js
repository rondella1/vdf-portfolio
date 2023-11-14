import styled from "styled-components";
import { projects } from "../data";
import { Link } from "react-router-dom";


const Work = () => {
    const allProjects = Object.values(projects);

    return (
        <>
        <Wrapper>
            <WebDevTitle>Web Development</WebDevTitle>
                <Grid>
                {allProjects.map((project) => {
                    return (
                        <StyledLink key={project.title} to={project.website} target="_blank">
                            <ProjectCard>
                                <ImageStill src={project.imageSrc} alt={project.alt}/>
                                <ProjectTitle>{project.title}</ProjectTitle>
                            </ProjectCard>
                        </StyledLink>
                    )
                })}
                </Grid>
        </Wrapper>
        </>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    width: 95%;

    @media (max-width: 600px) {
        height: 80vh;
    }

    @media (max-width: 768px) {
        margin-left:40px;
        width: 82%;
    }
`;

const WebDevTitle = styled.h2`
    font-size: 2em;
    margin-top: 50px;    

    @media (max-width: 600px) {
        font-size: 1.5em;
        margin-top: 15px;
        margin-bottom: 10px;
    }

    @media (max-width: 768px) {
        font-size: 1.4em;
        margin-top: 25px;
    }
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    padding: 20px;

    @media (max-width: 600px) {
        grid-template-columns: repeat(auto-fit, minmax(100px, 2fr));
        gap: 10px;
        padding: 5px;
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(auto-fit, minmax(100px, 2fr));
        gap: 10px;
        padding: 5px;
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
`;

const ProjectCard = styled.div`
    padding: 10px;
    text-align: center;

    &:hover {
        font-weight: bold;
    }
   
`;

const ImageStill = styled.img`
    max-width: 100%;
    max-height: 200px;
    object-fit: cover;
    margin-bottom: 10px;
    border: 2px solid grey;
    background-color: white;
    filter: grayscale(100%);

    &:hover {
        filter: none;
    }

    @media (max-width: 600px) {
        max-width: 100%;
        max-height: 100px;
    }

`;

const ProjectTitle = styled.p`
    font-size: 1em;

    @media (max-width: 600px) {
        margin-top: 5px;
    }
     
`;


export default Work;
