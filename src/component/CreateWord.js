import useFetch from "../hooks/useFetch";
import { useRef } from "react";
import { useNavigate } from "react-router"

export default function CreateWord() {
    const days = useFetch("http://localhost:8000/days")
    const history = useNavigate();
    function onSubmit(e) {
        e.preventDefault();
        console.log(engRef.current.value);
        fetch(`http://localhost:8000/words/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                day: dayRef.current.value,
                eng: freRef.current.value,
                kor: engRef.current.value,
                isDone: false
            }),
        }).then(res => {
            if (res.ok) {
                alert("Created");
                history(`/day/${dayRef.current.value}`);
            }
        });
    }

    const freRef = useRef(null);
    const engRef = useRef(null);
    const dayRef = useRef(null);

    return (
        <form onSubmit={onSubmit}>
            <div className="input_area">
                <label>French</label>
                <input type="text" placeholder="Computa" ref={freRef} />
            </div>
            <div className="input_area">
                <label>English</label>
                <input type="text" placeholder="Computer" ref={engRef} />
            </div>
            <div divclassName="input_area">
                <label>Day</label>
                <select ref={dayRef}>
                    {days.map(day => (
                        <option key={day.id} value={day.day}>{day.day}
                        </option>
                    ))};

                </select>
            </div>
            <button>Save</button>
        </form >
    );
}