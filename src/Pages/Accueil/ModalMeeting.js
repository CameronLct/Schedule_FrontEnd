import axios from 'axios'
import { useEffect, useState } from 'react';
import './ModalMeeting.css'

function ModalMeeting({ onClose, showModal, data }) {
    const [employes, setEmployes] = useState(null);

    useEffect(() => {
        showModal && axios.get("http://127.0.0.1:8000/api/reunions/employes/" + data.id)
            .then(response => {
                setEmployes(response.data);
            });
    }, [showModal]);

    if (!showModal) return null

    return (
        //returns the date, time and employees of the meeting
        <div className="modal-meeting" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <h2>{data.nom} - Réunion du {new Date(data.date_heure).toLocaleDateString('fr')} à {new Date(data.date_heure).getHours()}h</h2>
                <p><u>Liste des employés :</u></p>
                {employes && employes[0].map(element => <p key={element.id}>{element.nom} {element.prenom}</p>)}
            </div>
        </div>
    )

}


export default ModalMeeting