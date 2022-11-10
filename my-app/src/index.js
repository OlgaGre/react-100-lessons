import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import state from "./redux/state";
import { renderTree } from "./render";

renderTree(state);

reportWebVitals();
