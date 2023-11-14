import styled from "styled-components";

const Home = () => {
    return (
            <Container> 
                <Portrait src="/assets-2/portrait-2.png" alt="Portrait of Veronica"/>
                <Box></Box>
                <IntroContainer>
                    <Name>Veronica Della Foresta</Name>
                    <Description>
                        <Roving>
                            <span>R</span>o<span>v</span>i<span>n</span>g
                        </Roving> 
                         archivist, programmer, and researcher currently based in Montréal, QC
                    </Description>
                </IntroContainer>
            </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 100vh;
    width: 100%;

    @media (max-width: 600px) {
        flex-direction: column;
        align-items: center;
        height: 50vh;
        width: 90%;
        padding-top: 80px;
        margin-left: 100px;
    }

    @media (max-width: 768px) {
        height: 60vh;
        width: 95%;
    }
`;

const Box = styled.div`
    position: absolute;
    border: 7px solid #FFFF66;
    padding: 30px;
    height: 200px;
    width: 250px;
    z-index: -1;
    margin-right: 520px;
    margin-top:-10px; 

    @media (max-width: 600px) {
        margin-right: 350px;
        padding: 70px;
        
    }

    @media (max-width: 768px) {
        margin-right: 300px;
    }
`;

const Portrait = styled.img`
    display: flex;
    max-width: 200px;
    max-height: 250px;
    height: auto;
    width: auto;
    margin-right: 10px;

    @media (max-width: 600px) {
        flex-direction: column;
        align-items: center;
        margin-top: -240px;
        margin-right: 320px;
        max-width: 150px;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`;

const IntroContainer = styled.div`
    display: flex; 
    flex-direction: column;
    margin-right: 80px;

    h1, p {
        text-align: right;
    }

    @media (max-width: 600px) {
        width: 95%;
        margin-right: 140px;
    }

    @media (max-width: 768px) {
      
    }
`;

const Name = styled.h1`
    font-size: 2.5em;

    @media (max-width: 600px) {
        font-size: 2.1em;
    }
`;

const Description = styled.p`
    text-align: right; 
    position: relative;
    margin-top: 0px;
    font-size: 1.3em;
    background-color: #FAF7EF;
    padding-top: 3px;
    padding-bottom: 3px;

    @media (max-width: 600px) {
        margin-top: -10px;
        padding-bottom: 6px;
        font-size: 1.1em;
    }
`;

const Roving = styled.span`
    display: inline-block;
    position: relative;
    margin-right: 11px;

    span {
        display: inline-block;
        vertical-align: middle;
        font-size: 1em;
        margin-left: 8px;
    }

    span:nth-child(1) {
        line-height: 1.8; 
        margin-right: 10px;
        margin-left: 10px;
    }

    span:nth-child(2) {
        line-height: 0.9; 
        margin-right: 7px; 
        margin-left: 8px;
    }

    span:nth-child(3) {
        line-height: 0.6; 
        margin-right: 10px; 
        margin-left: 4px;
    }

`;




export default Home;