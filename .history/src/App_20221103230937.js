import "./App.scss";
import Nav from "./components/Nav/Nav";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    BrowserRouter,
} from "react-router-dom";
import Login from "./components/Login/Login";

const App = () => {
    return (
        <BrowserRouter>
            <div className="app-container">
                <Nav />
                <Routes>
                    <Route path="/" element={"home"}>
                        home
                    </Route>

                    <Route path="/news" element={"news"}></Route>
                    <Route path="/about" element={"about"}></Route>
                    <Route path="/contact" element={"contact"}></Route>
                    <Route path="*" element={"not found"}></Route>
                    <Route path="/login" element={<Login />}></Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;
