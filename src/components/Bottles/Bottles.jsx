import { useEffect } from "react";
import { useState } from "react";


const Bottles = () => {
    const [bottles , setBottles] = useState([]);
    useEffect(()=> {
        fetch('bottle.json')
        .then(res => res.json())
        .then ( data => setBottles(data));
    },[])
    return (
        <div>
            <h2>Bottles Here : {bottles.length} </h2>
            {
                bottles.map(bottle => <Bootle></Bootle>)
            }
        </div>
    );
};

export default Bottles;

