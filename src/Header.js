import React from 'react';
import styled from '@emotion/styled';

import { appWidth } from './styles/global';

const StyledHeader = styled.header`
    position: relative;
    text-align: center;
    padding-top: 3em;
`;

const HeaderH1 = styled.h1`
    display: flex;
    justify-content: center;
    color: #313030;
    font-weight: bold;
    font-family: 'cornerstone', sans-serif;
    font-size: 2.5em;

    img {
        margin-right: 0.5em;
    }
`;

const HeaderLink = styled.a`
    position: relative;
    color: #5c4268;
    border: 2px solid transparent;
    border-radius: 6em;
    padding: 0 0.75em;
    font-size: 1em;
    line-height: 2em;
    text-decoration: none;
    transition: box-shadow 0.2s ease-in-out;

    &:hover {
        text-decoration: underline;
    }

    &:nth-of-type(n + 2) {
        &:before {
            content: '';
            position: absolute;
            left: -2px;
            top: 15%;
            height: 70%;
            width: 1px;
            background: rgba(32, 33, 36, 0.1);
        }
    }

    &.active {
        color: #a84a7a;
    }

    &:focus:not(:active) {
        outline: 2px solid transparent;
        box-shadow: 0 0 0 2px #8b9099;

        &.active {
            box-shadow: 0 0 0 2px #a84a7a;
        }
    }
`;

const HeaderNav = styled.nav`
    ${appWidth};
    margin-top: 3em;
    padding: 0.5em;
    background-color: ${props => (props.showGray ? '#AFAFAF' : '#FFF')};
    border-radius: 7em;
    border: 1px solid rgba(32, 33, 36, 0.12);
    background-clip: padding-box;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
    display: flex;
    align-items: center;
`;

const Header = () => {
    return (
        <StyledHeader>
            <HeaderH1>Logo</HeaderH1>
            <HeaderNav showGray={true}>
                <HeaderLink href='#'>Link 1</HeaderLink>
                <HeaderLink href='#'>Link 2</HeaderLink>
            </HeaderNav>
        </StyledHeader>
    );
};

export default Header;
