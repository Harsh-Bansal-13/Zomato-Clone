import React from "react";
import { ReactDOM } from "react-dom";


const date = new Date();
const year = date.getFullYear();
function Footer() {
    return <footer>
        <p> Copyright @ {year}</p>
    </footer>;
}
export default Footer;