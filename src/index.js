
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { usePromiseTracker } from "react-promise-tracker";
 const LoadingIndicator = (props) => { const { promiseInProgress } = usePromiseTracker();
  return (promiseInProgress && <div className="loader"></div>);
};

   ReactDOM.render(<div><App /><LoadingIndicator/></div>, document.getElementById("root"));