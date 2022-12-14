import React, { useState } from 'react'
import'./App.css';

export default function Calculator() {


const [result,setResult] = useState("")

const handleDisplay=(e)=>{
     setResult(result.concat(e.target.value))
}

const handleClear = ()=>{
  setResult("");
}

const handleCalulation = () =>{
  setResult(eval(result).toString());
}



  return (
    <div>
      <h1>Calculator</h1>
      <div className='interface' x>
        <input type='text' placeholder='0' id='answer' value={result}/>
        <input type='button' value={1} className='button' onClick={handleDisplay}/>
        <input type='button' value={2} className='button' onClick={handleDisplay}/>
        <input type='button' value={3} className='button' onClick={handleDisplay}/>
        <input type='button' value={'+'} className='button' onClick={handleDisplay}/>
        <input type='button' value={4} className='button' onClick={handleDisplay}/>
        <input type='button' value={5} className='button' onClick={handleDisplay}/>
        <input type='button' value={6} className='button' onClick={handleDisplay}/>
        <input type='button' value={'-'} className='button' onClick={handleDisplay}/>
        <input type='button' value={7} className='button' onClick={handleDisplay}/>
        <input type='button' value={8} className='button' onClick={handleDisplay}/>
        <input type='button' value={9} className='button' onClick={handleDisplay}/>
        <input type='button' value={'*'} className='button' onClick={handleDisplay}/>
        <input type='button' value={0} className='button' onClick={handleDisplay}/>
        <input type='button' value={'C'} className='button' onClick={handleClear}/>
        <input type='button' value={'='} className='button' onClick={handleCalulation}/>
        <input type='button' value={'/'} className='button' onClick={handleDisplay}/>
      </div>
    </div>
  )
}
