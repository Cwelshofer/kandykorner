import React from "react"
import "./Location.css"

export const Location = ({ location }) => (
    <section className="location">
        <h3 className="location__name">{location.address}</h3>
        <address className="location__address">Square Feet:{location.SquareFeet}</address>
    </section>
)