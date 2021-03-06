import React from "react";
import ReactDOM from "react-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./index.css";
import ToDoApp from './components/ToDoApp';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render( < ToDoApp / > , document.getElementById('root'));

registerServiceWorker();