import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "../pages/Index";
// import Sobre from "../pages/Sobre";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Index />} />
                {/* <Route path='/sobre' element={<Sobre />} /> */}
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;