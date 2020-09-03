import React from "react"
import { LocationList } from "./location/LocationList.js"
import { LocationProvider } from "./location/LocationProvider.js"
import "./KandyKorner.css"

export const Kandy = () => (
    <>
        <LocationProvider>
            <LocationList />
        </LocationProvider>
    </>
)
