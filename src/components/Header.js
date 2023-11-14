import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
    const location = useLocation();

    return (
            <NavBar>
                <StyledLink to="/" $isActive={location.pathname === "/"}>Home</StyledLink>
                <StyledLink to="/about" $isActive={location.pathname === "/about"}>About</StyledLink>
                <StyledLink to="/work" $isActive={location.pathname === "/work"}>Work</StyledLink>
                <StyledLink to="/contact" $isActive={location.pathname === "/contact"}>Contact</StyledLink>
            </NavBar>
    ) 
}

const NavBar = styled.nav`
    float: right;
    display: flex; 
    gap: 55px;
    padding-right: 50px;

    @media (max-width: 600px) {
        flex-direction: column;
        align-items: center;
        gap: 0px;
        margin-right: -90px;
    }

    @media (max-width: 768px) {
        flex-direction: row;
        align-items: center;
        gap: 0px;
        padding-right: 100px;
        padding-top: 30px;
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    padding: 8px 15px;
    color: ${props => (props.$isActive ? "#FFFF66" : "black")};
    font-weight: bold;
    font-size: 1.3em;

    &:hover {
        color: #FFFF66;
    }

    @media (max-width: 600px) {
        font-size: 1.2em;
    }

`;


export default Header;
