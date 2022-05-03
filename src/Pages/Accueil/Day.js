import Meeting from "./Meeting";

const Day = ({ date, data }) => {

    return (
        <div className="day">
            <h3>{("0" + date.getDate()).slice(-2)}/{("0" + (date.getMonth() + 1)).slice(-2)}</h3>
            {data.length > 0 && (
                <div className="list-meetings">
                    <div className="timerange"><Meeting data={data.find(el => new Date(el.date_heure).getHours() === 8)} /></div>
                    <div className="timerange"><Meeting data={data.find(el => new Date(el.date_heure).getHours() === 9)} /></div>
                    <div className="timerange"><Meeting data={data.find(el => new Date(el.date_heure).getHours() === 10)} /></div>
                    <div className="timerange"><Meeting data={data.find(el => new Date(el.date_heure).getHours() === 11)} /></div>
                    <div className="timerange"></div>
                    <div className="timerange"></div>
                    <div className="timerange"><Meeting data={data.find(el => new Date(el.date_heure).getHours() === 14)} /></div>
                    <div className="timerange"><Meeting data={data.find(el => new Date(el.date_heure).getHours() === 15)} /></div>
                    <div className="timerange"><Meeting data={data.find(el => new Date(el.date_heure).getHours() === 16)} /></div>
                </div>
            )}
        </div>
    )
}

export default Day

