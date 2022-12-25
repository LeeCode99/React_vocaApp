
// import dummy from "../db/data.json";
import Word from "./Word"
import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

export default function Day() {

    const { day } = useParams();

    // const wordList = dummy.words.filter(word => (
    //     word.day === Number(day)
    // ))

    const words = useFetch(`http://localhost:8000/words?day=${day}`);

    return (
        <>
            <h2>Day {day} </h2>
            <table>
                <tbody>
                    {words.map(word => (
                        <Word word={word} key={word.id} />
                    ))}
                </tbody>
            </table>
        </>
    );
}