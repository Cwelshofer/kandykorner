import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import { Kandy } from "./componets/KandyKorner.js"
import "./index.css"

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Kandy />
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
)