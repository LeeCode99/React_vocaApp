import './App.css';
import Day from "./component/Day";
import DayList from "./component/DayList";
import Header from "./component/Header";
import EmptyPage from "./component/EmptyPage";
import CreateWord from './component/CreateWord';
import CreateDay from './component/CreateDay';
import DelDay from './component/DelDay';
import { BrowserRouter, Route, Routes } from "react-router-dom"

// npm start
// json-server --watch ./src/db/data.json --port 8000

export default function App() {
  return (

    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<DayList/>} />
          <Route path="/day/:day" element={<Day/>} />
          <Route path="/create_word" element={<CreateWord/>} />
          <Route path="/create_day" element={<CreateDay/>} />
          <Route path="/Del_day" element={<DelDay/>} />
          <Route path="*" element={<EmptyPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
