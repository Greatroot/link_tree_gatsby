
import * as React from "react"

import {GlobalStyle} from "./styles/GlobalStyles";
import Typography from "./styles/Typography";

// A smart place to put components used on all pages like the OldHeader and OldFooter.
const Layout = ({ children }) => {

    return (
        <>
            <GlobalStyle />
            <Typography />
            <main>{children}</main>
        </>
    )
}

export default Layout
