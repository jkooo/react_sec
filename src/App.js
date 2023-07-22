import logo from './logo.svg';
import './App.css';
import BoardList from "./routes/BoardList";
import {Route, Routers} from "react-router-dom";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/board" element={<BoardList/>}/> />
      </Routes>
  );
}

export default App;
