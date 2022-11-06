import "./App.scss";
import Nav from "./components/Nav/Nav";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
    return (
        <Router>
            <div className="app-container">
                <Nav />
                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/users">
                        <Users />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default App;
