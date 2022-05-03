import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../../NavBar/Navbar";
import "./Employes.css";
import HorairesEmployes from "./HorairesEmployes";

function Employes() {
    const [input, setInput] = useState(null);
    const navigate = useNavigate();

    //manage the input change
    function handle(e) {
        const name = e.target.name;
        const value = e.target.value;
        setInput(values => ({ ...values, [name]: value }));
    }

    //disable form submission by default
    function send_employes(e) {
        e.preventDefault();

        axios.post("http://127.0.0.1:8000/api/employes", input)
            .then(response => navigate("/"));
    }

    //return form for creation of employees
    return (<div>
        <NavBar />
        <form onSubmit={send_employes}>
            <div className="form-group">
                <label for="exampleInputEmail1">Adresse Mail</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="adresse mail" name="adresse_mail" onChange={handle} />
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Nom</label>
                <input type="text" className="form-control" id="exampleInputPassword1" placeholder="nom" name="nom" onChange={handle} />
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Prenom</label>
                <input type="text" className="form-control" id="exampleInputPassword1" placeholder="prenom" name="prenom" onChange={handle} />
            </div>
            <HorairesEmployes setInput={setInput} day={"lundi"} />
            <HorairesEmployes setInput={setInput} day={"mardi"} />
            <HorairesEmployes setInput={setInput} day={"mercredi"} />
            <HorairesEmployes setInput={setInput} day={"jeudi"} />
            <HorairesEmployes setInput={setInput} day={"vendredi"} />
            <button type="submit" className="btn btn-primary">Création Employés</button>
        </form>
    </div>);
}

export default Employes;