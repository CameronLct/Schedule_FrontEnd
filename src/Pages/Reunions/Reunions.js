import "./Reunions.css";
import Select from "react-select";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Employes from "../Employes/Employes";
import NavBar from "../../NavBar/Navbar";

function Reunions() {
    const [input, setInput] = useState(null);
    const [employes, setEmployes] = useState(null);
    const [selectedemployes, setSelectedEmployes] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getEmployes()
    }, []);

    //retrieves name of the employee with his id
    function getEmployes() {
        axios.get("http://127.0.0.1:8000/api/employes")
            .then(response => {
                setEmployes(response.data.map(element => {
                    return {
                        label: element.nom,
                        value: element.id
                    }
                }))
            });
    }

    function selectEmployes(item, name) {
        setSelectedEmployes(prev => ({ ...prev, item }));
    }

    //manage the input change
    function handle(e) {
        const name = e.target.name;
        const value = e.target.value;
        setInput(values => ({ ...values, [name]: value }));
    }

    //disable form submission by default
    function send_reunions(e) {
        e.preventDefault();

        axios.post("http://127.0.0.1:8000/api/reunions", input)
            .then(response => navigate("/"));
    }

    //manage the imput change with multiple values
    function handleChange(SelectedOptions) {
        setInput(values => ({ ...values, employes: SelectedOptions }))
    }

    //return form for creation of meetings
    return (<div>
        <NavBar />
        <form onSubmit={send_reunions}>
            <div className="form-group">
                <label for="exampleInputPassword1">Nom</label>
                <input type="text" className="form-control" id="exampleInputPassword1" placeholder="nom" name="nom" onChange={handle} />
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Date et Heure</label>
                <input type="datetime-local" className="form-control" id="exampleInputPassword1" name="date_heure" onChange={handle} />
            </div>
            {
                //create a drop-down list containing all employees
                employes && (<Select isMulti options={employes} onChange={handleChange} />)
            }
            <button type="submit" className="btn btn-primary">Création Réunions</button>
        </form>
    </div>);
}

export default Reunions;