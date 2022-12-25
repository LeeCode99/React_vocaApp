// import dummy from "../db/data.json";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function DayList() {
    const [days, setDays] = useState([]);
    // const [count, setCount] = useState(0);

    // function onclick() {
    //     setCount(count + 1);
    // }
    // function onclick2(){
    //     setDays([
    //         ...days,{
    //             id: Math.random(),
    //             day: 1,
    //         },
    //     ]);

    // }


    useEffect(() => {
        fetch(`http://localhost:3002/days`)
            .then(res => {
                return res.json();
            })
            .then(data => {
                setDays(data);
            });
    }, []);

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