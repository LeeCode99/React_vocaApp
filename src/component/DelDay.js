import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function DelDay(props) {
    const history = useNavigate();

    const days = useFetch("http://localhost:8000/days")
    // const dayRef = useRef(null);
    // const [day, setDay] = useState(props.day);
    const { day } = useParams();
    console.log({day});
    function del() {
        if (window.confirm("You sure?")) {
            fetch(`http://localhost:8000/days/${day}`,
                {
                    method: "DELETE",
                }
            ).then(res => {
                if (res.ok) {
                    alert("Deleted");
                    // setDay({ id: 0 });
                    history(`/`);
                }
            });
        }
    }


    return (
        <>
            Delete Day
            <button onClick={del} className="btn_del">delete</button>
        </>
    );
}