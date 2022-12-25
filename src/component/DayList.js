// import dummy from "../db/data.json";
import { Link } from "react-router-dom";
// import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch"

export default function DayList() {
    const days = useFetch("http://localhost:8000/days");


    if (days.length === 0){
        return <span>Loading.....</span>;
    }


        return (
            <>
                <ul className="last_day">

                    {days.map(day => (
                        <li key={day.id}>
                            <Link to={`day/${day.day}`}> Day {day.day}</Link>
                        </li>
                    ))}

                </ul>
                {/* <button onClick={onclick}>{count}</button>
            <button onClick={onclick2}>Day change</button> */}
            </>
        );
}