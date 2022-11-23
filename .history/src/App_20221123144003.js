import "./App.scss";
import NavHeader from "./components/Nav/NavHeader";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext, useState } from "react";
import AppRoutes from "./routes/AppRoutes";
import { UserContext } from "./context/UserContext";
import { Rings } from "react-loader-spinner";
import { Scrollbars } from "react-custom-scrollbars";

const App = () => {
    const { user } = useContext(UserContext);
    const [scrollHeight, setScrollHeight] = useState(0);
    return (
        <>
            <Scrollbars autoHide style={{ height: scrollHeight }} />
            <BrowserRouter>
                {user && user.isLoading ? (
                    <div className="loading-container">
                        <Rings
                            height="80"
                            width="80"
                            radius="9"
                            color="#1877f2"
                            ariaLabel="loading"
                            wrapperStyle
                            wrapperClass
                        />
                        <div>Loading data...</div>
                    </div>
                ) : (
                    <>
                        <div className="app-header">
                            <NavHeader />
                        </div>
                        <div className="app-container">
                            <AppRoutes />
                        </div>
                    </>
                )}
            </BrowserRouter>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>
    );
};

export default App;
