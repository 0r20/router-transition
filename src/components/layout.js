import React from 'react';

// Styled components
import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import { Header } from './header'

const GlobalStyle = createGlobalStyle`
    ${normalize}
    *   {
        text-decoration: none;
        font-family: "HelveticaNeue-CondensedBold", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        font-weight: 900;
    }

    p {
        margin: 0;
    }

    html {
        box-sizing: border-box;
        font-size: 16px;
        -webkit-font-smoothing: antialiased;
        /* overflow-y: scroll; */
    }

    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        overscroll-behavior: none;
        overflow-x: hidden;
        /* background-color: #f0d8bb; */
        &.no-scroll {
            overflow-y: hidden;
        }
    }
`;

export const Layout = ({ children }) => {
    return (
        <>
            <GlobalStyle />
            <Header />
            <main>{children}</main>
        </>
    );
}


