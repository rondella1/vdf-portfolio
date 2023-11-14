import styled from "styled-components";
import { Link } from "react-router-dom";
import { Icon } from 'react-icons-kit';
import { github } from 'react-icons-kit/icomoon/github';
import {linkedin2} from 'react-icons-kit/icomoon/linkedin2';

const Footer = () => {
    return (
        <>
            <Image src="/assets-2/thread.png" alt="loose thread"/>
            <Links>
                <LinkedIn to="https://www.linkedin.com/in/veronica-della-foresta-07401722a/" target="_blank">
                    <Icon icon={github} size={20}></Icon>
                </LinkedIn>
                <Github to="https://github.com/rondella1" target="_blank">
                    <Icon icon={linkedin2} size={20}></Icon>
                </Github>
            </Links>
        </>
    )
}

const Image = styled.img`
    position: fixed;
    bottom: 0;
    margin-bottom: -520px;
    transform: rotate(270deg);
    width: 450px;
    z-index:-1;

    @media (max-width: 600px) {
       position: fixed;
       margin-bottom: -420px; 
    }

    @media (max-width: 768px) {
        margin-bottom: -480px;
    }

`;

const Links = styled.div`
    position: fixed;
    display: flex;
    flex-direction: row;
    bottom: 0;
    right: 0;
    margin: 10px;
    padding: 10px;

    @media (max-width: 600px) {
       position: fixed;
       bottom: 0;
       margin-right: 50px;
    }

    @media (max-width: 768px) {
        margin-right: 100px;
        margin-bottom: 40px;
    }
`;

const LinkedIn = styled(Link)`
    margin-right: 10px;
    padding-right: 12px;
    color: black;

    &:hover {
        color: #FFFF66;
    }
`;

const Github = styled(Link)`
    color: black;

    &:hover {
        color: #FFFF66;
    }
`;

export default Footer;