import { useState } from "react";

export default function Word(props) {

    const [isShow, setIsShow] = useState(false);
    const [isDone, setIsDone] = useState(props.word.isDone);
    const [word, setWord] = useState(props.word);
    function toggleShow() {
        setIsShow(!isShow);
    }

    function toggleDone() {
        // setIsDone(!isDone);
        fetch(`http://localhost:8000/words/${word.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ...word,
                isDone: !isDone
            }),
        }).then(res => {
            if (res.ok) {
                setIsDone(!isDone);
            }
        });
    }

    function del() {
        if (window.confirm("You Sure?")) {
            fetch(`http://localhost:8000/words/${word.id}`, {
                method: "DELETE",
            }).then(res => {
                if (res.ok) {
                    setWord({ id: 0 });
                }
            });
        }
    }

    if (word.id === 0) {
        return null;
    }


    return (
        <tr className={isDone ? "off" : ""}>
            <td>
                <input type="checkbox" checked={isDone}
                    onChange={toggleDone}
                />
            </td>
            <td>
                {word.eng}
            </td>
            <td>
                {isShow && word.kor}
            </td>
            <td>
                <button onClick={toggleShow}> {isShow ? "Hide meaning" : "View meaning"} </button>
                <button onClick={del} className="btn_del">delete</button>
            </td>
        </tr>
    );
}
/** 
 * REST API
 * 
 * Create : POST
 * Read : GET
 * Update : PUT
 * Delete : DELETE
 * 
 * */ 