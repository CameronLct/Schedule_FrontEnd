import { useEffect, useState } from "react";
import axios from "axios";
import Schedule from "./Schedule";
import NavBar from "../../NavBar/Navbar";

function Accueil() {

    const [reunions, setReunions] = useState([]);

    useEffect(() => {
        getReunions()
    }, []);

    //recovers meetings with backend
    function getReunions() {
        axios.get("http://127.0.0.1:8000/api/reunions")
            .then(response => {
                setReunions(response.data);
            });
    }

    return (
        <div>
            <NavBar />
            <Schedule reunions={reunions} />
        </div>
    )
}

export default Accueil;