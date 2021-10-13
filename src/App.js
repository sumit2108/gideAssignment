import './App.css';
import { useState } from 'react';
import Cards from './components/Cards';
import Dialog from './components/Dialog';


function App() {
  const headStyle={
    textDecoration:"underline",
    textAlign:"center"
  }
  let [open,setOpen]=useState(false);
  let [src,setSrc]=useState("");
  return (
    <div className="App">
      <h1 style={headStyle}>Dashboard</h1>
      
      <Cards setSrc={setSrc} setOpen={setOpen} open={open}/>
      { open?<Dialog setOpen={setOpen} open={open} src={src}/>:null}
      
    </div>
  );
}

export default App;
