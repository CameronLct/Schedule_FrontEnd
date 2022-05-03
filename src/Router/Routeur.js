import { Route, Routes } from "react-router-dom";
import Accueil from "../Pages/Accueil/Accueil";
import Employes from "../Pages/Employes/Employes";
import Reunions from "../Pages/Reunions/Reunions";

function Routeur() {
    return (<Routes>
        <Route path="/employes" element={<Employes />} />
        <Route path="/reunions" element={<Reunions />} />
        <Route path="/" element={<Accueil />} />
    </Routes>)
}

export default Routeur;