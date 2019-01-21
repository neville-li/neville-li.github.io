import React from "react";
import ReactDOM from "react-dom";
import "normalize.css/normalize.css";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import App from "./js/components/App";
import "./styles/styles.scss";
library.add(faBars);


ReactDOM.render(<App />, document.querySelector("#root"));