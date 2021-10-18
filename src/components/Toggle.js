import { useState } from 'react';
function Toggle (){
const [toggleValue, setToggleValue] = useState(false);
    return(

        <>
            <h1>We are Toggling the Color Box:</h1>

           <div className = {toggleValue ? "red" : "green"}>

           </div>
            <br />
           <button onClick = {() => setToggleValue(!toggleValue)}>
               <h3>
                   Toggle Me
               </h3>
           </button>
        </>
    );
}

export default Toggle;