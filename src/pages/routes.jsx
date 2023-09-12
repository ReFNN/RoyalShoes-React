import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Masculino from "./Masculino";
import Feminino from "./Feminino";
import Novidades from "./Novidades";
import Sobre from "./Sobre";
import Contato from "./Contato";


function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home/> }></Route>
                <Route path="/home" element={ <Home/> }></Route>
                <Route path="/masculino" element={ <Masculino/> }></Route>
                <Route path="/feminino" element={ <Feminino/> }></Route>
                <Route path="/novidades" element={ <Novidades/> }></Route>
                <Route path="/sobre" element={ <Sobre/> }></Route>
                <Route path="/contato" element={ <Contato/> }></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;