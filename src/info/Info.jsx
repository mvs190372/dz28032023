import {React, useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

function Info() {

    const [count, setCount] = useState(0);

    useEffect(() => {
        function onTick() {
          setCount(c => c + 1);
        }
    
    setInterval(onTick, 1000);
    }, []);

  return (
    <div>Info
        <br></br>
        <br></br>
        <h1>{count}</h1>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Link to="/">На главную</Link>
    </div>
  )
}

export default Info