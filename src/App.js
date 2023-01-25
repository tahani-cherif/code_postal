import './App.css';
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import zippostcodes from './zip-postcodes'
import { useState } from 'react';
function App() {
const [gov,setGov]=useState("")
const [Deleg,setDeleg]=useState("")
const [city,setcity]=useState("")
const [code,setcode]=useState("")
  const test=   zippostcodes.map(e=>e.Gov).filter((value, index, self) => self.indexOf(value) === index)
  const test2=   zippostcodes.map(e=>{if(e.Gov==gov)
                                       return e.Deleg}).filter((value, index, self) => self.indexOf(value) === index)
const test3=   zippostcodes.map(e=>{if(e.Deleg==Deleg)
    { 
      return e.Cite}}).filter((value, index, self) => self.indexOf(value) === index)
   
      console.log("code",code)
  return (
    <div className="App">
    <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Age</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    onChange={e=>{setGov(e.target.value); setcity(""); setDeleg("")}}
    label="Age"
    
  >
    {
      test.map(e=>{
          return(<MenuItem value={e}>{e}</MenuItem>)
      })
    }
    
 
  </Select>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    onChange={e=>setDeleg(e.target.value)}
    label="Age"
    
  >
    {
      test2.map(e=>{
          return(<MenuItem value={e}>{e}</MenuItem>)
      })
    }
    
 
  </Select>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
   onChange={e=>setcity(e.target.value)}
    label="Age"
    
  >
    {
      test3.map(e=>{
          return(<MenuItem value={e}>{e}</MenuItem>)
      })
    }
    
 
  </Select>{
     zippostcodes.map(e=>{if(e.Cite==city && e.Deleg==Deleg )
      {return <TextField
        disabled
        id="outlined-disabled"
        label="Disabled"
        defaultValue="Hello World"
        value={e.zip}
      />}})
  }
  
</FormControl>
    </div>
  );
}

export default App;
