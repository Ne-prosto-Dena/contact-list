import ReactDOM from "react-dom";
import { Fragment } from "react";

import "./index.css";

// Import Components
import SideBar from "./Components/SideBar/SideBar";
import Main from "./Components/Main/Main";

const App = () => {
    return (
        <Fragment>
            <SideBar />
            <Main />
        </Fragment>

    )
}

ReactDOM.render(<App />, document.getElementById("root"));