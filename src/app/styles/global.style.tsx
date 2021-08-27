import { createGlobalStyle } from 'styled-components';
import px2vw from '../../utilities/px2vw';

export const Global = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        border: 0;
        outline: none;
        text-decoration: none;
        vertical-align: baseline;
        color: black;
        font-size: 100%;
    }
    :root {
        --main-color: #0a66c2;
        --main-border-radius: 5px;
        --padding-right-left-layout: 20px;
        --second-color: #2977c9;
        --background-color: #f2f2ee;
        --btt-padding: 5px 15px;
        --btt-border-radius: 40px;
        --border-radius-small: 5px;
        --letter-spacing: 0.5px;

        --nav-font-size: 12px;
        --nav-color-icon: rgb(94, 96, 99);

        --main-background-color: rgb(242, 242, 238);

        @media (min-width: 768px) {
            font-size: ${px2vw(18)};
        }
        @media (min-width: 1024px) {
            font-size: ${px2vw(16)};
        }
        @media (min-width:1440px){
            font-size: ${px2vw(24)};
        }
    }
    .App {
        overflow-y: scroll;
        overflow-x: hidden;
        background-color: var(--background-color);
        font-family: 'Roboto', sans-serif;
        height: 100%;
        width: 100%;
        color:white;
        padding-top:52px
    }
`;

export default Global;
