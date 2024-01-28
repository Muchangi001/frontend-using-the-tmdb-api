import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/Main/App"
import { BrowserRouter as Router } from "react-router-dom";


ReactDOM.createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Router>
            <App/>
        </Router>
    </StrictMode>
)