import logo from './logo.svg';
import './App.css';
import {useState,useEffect,useRef} from "react"

function App() {
  const render = useRef(0);
  const [value,setValue] = useState("")
  useEffect(()=>{
    render.current+=1
  },)
  return (
    <div className="App">
     {`app hava render ${render.current}`}
     <input onChange={e=>setValue(e.target.value)} value={value} />
    </div>
  );
}

export default App;
