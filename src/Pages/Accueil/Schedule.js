import { useEffect, useState } from "react";
import Day from "./Day";
import './Schedule.css';

//recovers Monday of the week
function getMonday(d) {
    d = new Date(d);
    var day = d.getDay(),
        diff = d.getDate() - day + (day === 0 ? -6 : 1); // adjust when day is sunday
    return new Date(d.setDate(diff));
}

//function to add a day
Date.prototype.addDays = function (days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

//function to remove a day
Date.prototype.removeDays = function (days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() - days);
    return date;
}

const Schedule = ({ reunions }) => {
    const [date, setDate] = useState(getMonday(new Date()))
    const [days, setDays] = useState([
        new Date(new Date().setDate(date.getDate())),
        new Date(new Date().setDate(date.getDate() + 1)),
        new Date(new Date().setDate(date.getDate() + 2)),
        new Date(new Date().setDate(date.getDate() + 3)),
        new Date(new Date().setDate(date.getDate() + 4)),
    ])

    useEffect(() => {
        const datetmp = new Date(date)

        //defined days according to Monday
        setDays([
            new Date(datetmp),
            new Date(datetmp.setDate(datetmp.getDate() + 1)),
            new Date(datetmp.setDate(datetmp.getDate() + 1)),
            new Date(datetmp.setDate(datetmp.getDate() + 1)),
            new Date(datetmp.setDate(datetmp.getDate() + 1)),
        ])
    }, [date])

    const nextWeek = () => {
        const datetmp = date.addDays(7);
        setDate(datetmp)
    }

    const prevWeek = () => {
        const datetmp = date.removeDays(7);
        setDate(datetmp)
    }

    //return the complete agenda
    return (
        <div className="schedule" >
            <span className="arrow arrow-left" onClick={prevWeek} />
            <div className="hours">
                <p>8h</p>
                <p>9h</p>
                <p>10h</p>
                <p>11h</p>
                <p>12h</p>
                <p>13h</p>
                <p>14h</p>
                <p>15h</p>
                <p>16h</p>
            </div>
            <Day date={days[0]} data={reunions.filter((el) => (new Date(el.date_heure).getDate() === days[0].getDate()) && new Date(el.date_heure).getMonth() === days[0].getMonth())} />
            <Day date={days[1]} data={reunions.filter((el) => (new Date(el.date_heure).getDate() === days[1].getDate()) && new Date(el.date_heure).getMonth() === days[1].getMonth())} />
            <Day date={days[2]} data={reunions.filter((el) => (new Date(el.date_heure).getDate() === days[2].getDate()) && new Date(el.date_heure).getMonth() === days[2].getMonth())} />
            <Day date={days[3]} data={reunions.filter((el) => (new Date(el.date_heure).getDate() === days[3].getDate()) && new Date(el.date_heure).getMonth() === days[3].getMonth())} />
            <Day date={days[4]} data={reunions.filter((el) => (new Date(el.date_heure).getDate() === days[4].getDate()) && new Date(el.date_heure).getMonth() === days[4].getMonth())} />
            <span className="arrow arrow-right" onClick={nextWeek} />
        </div>
    )
}

export default Schedule