import Select from 'react-select';

function HorairesEmployes({ day, setInput }) {
    //defined a components of the drop-down list
    const days = [
        { value: 0, label: "absent toute la journée" },
        { value: 1, label: "absent le matin" },
        { value: 2, label: "absent l'après-midi" },
        { value: 3, label: "présent" }
    ];

    //manage the imput change with multiple values
    function handleChange(SelectedOptions) {
        setInput(values => ({ ...values, [day]: SelectedOptions }))
    }

    //return the drop-down list
    return (<div>
        {day} <Select options={days} onChange={handleChange} />
    </div>);
}

export default HorairesEmployes;