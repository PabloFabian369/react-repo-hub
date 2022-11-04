import React from "react";

// En l aversion 6 ya no aparecen estas propiedades
const Historial = ({match, location, history}) =>{
    return(
        <div>
        Hello
        {JSON.stringify(location)}
    </div>
    )
    
}

export default Historial;