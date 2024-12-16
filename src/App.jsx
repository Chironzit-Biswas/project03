import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./components/pages/Home.jsx";
import {Success} from "./components/pages/Success.jsx";
import {Navbar} from "./components/Navbar.jsx";

function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/success" element={<Success/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );

}

export default App;
