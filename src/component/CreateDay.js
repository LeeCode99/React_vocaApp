import useFetch from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";


export default function CreateDay() {
    const days = useFetch("http://localhost:8000/days")
    const history = useNavigate();

    function addDay() {

        fetch(`http://localhost:8000/days/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                day: days.length + 1,
            }),
        }).then(res => {
            if (res.ok) {
                alert("Created");
                history(`/`);
            }
        });
    }
    return (
        <div>
            <h3>It is {days.length} day.</h3>
            <button onClick={addDay}>Add day</button>
        </div>
    );

}