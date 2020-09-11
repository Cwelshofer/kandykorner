import React from "react"
import { Route } from "react-router-dom"
import { NavBar } from "./nav/navBar.js"
import { ApplicationViews } from "./ApplicationViews"
import "./KandyKorner.css"

export const Kandy = () => (
    <>
        <NavBar />
        <ApplicationViews />
    </>
)