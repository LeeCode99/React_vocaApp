import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className="header">
            <h1>
                <Link to="/"> Vocabulaire français </Link>
            </h1>

            <div className="menu">
                <Link to="/create_word" className="link" />
                Ajouter un mot

                <Link to="/Create_day" className="link" />
                Ajouter un jour

            </div>
        </div>);
}   