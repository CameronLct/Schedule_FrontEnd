import { useState } from "react";
import ModalMeeting from "./ModalMeeting";

const Meeting = ({ data }) => {

    const [showModal, setShowModal] = useState(false)

    if (data === undefined) return null

    return (
        //when the circle is clicked the modal is displayed and when it is pressed out it closes it
        <div className="meeting">
            <p>{data.nom}</p>
            <div className="circle" onClick={() => setShowModal(true)} />
            <ModalMeeting showModal={showModal} onClose={() => setShowModal(false)} data={data} />
        </div>
    )
}

export default Meeting