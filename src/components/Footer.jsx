import React from "react";

function getCurrentYear() {
    return new Date().getFullYear();
}

export default function Footer() {
    return (
        <footer>
            <p> Copyright {getCurrentYear()} </p>
        </footer>
    )
}