/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import { appWidth } from './styles/global';

const innerStyles = css`
    ${appWidth};
    min-height: 40em;
    padding-top: 2em;
    padding-bottom: 2em;
    outline: 0;
`;

const mainHeading = css`
    font-family: 'cornerstone', sans-serif;
    color: #313030;
    font-size: 1.8em;
    text-align: center;
`;

const Inner = () => {
    return <div css={[innerStyles, mainHeading]}>inner text</div>;
};

export default Inner;
