import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./routes/Home";
import BoardList from "./routes/BoardList";
import BoardDetail from "./routes/BoardDetail";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/board" element={<BoardList/>}/>
        <Route path="/board/:idx" element={<BoardDetail/>}/>
      </Routes>
  );
}

export default App;
