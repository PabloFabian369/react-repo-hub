import React from "react";


const PropiedadesDestructuradasParametro = (props) =>(
    <div className="card" style={{width: "13rem"}}>
        {/* jsx propiedades */}
      <img className="card-img-top" src={props.image} alt={props.title} />
      <div className="card-body">
        {/* Contenido Js en el template */}

      <div className=" justify-content-center">
        <h3>{props.title}</h3>
        <div className="">
          <a href="#" className="d-flex justify-content-center">{`$ ${props.price}`}</a>
        </div>
      </div>
     

      </div>
    </div>
)

export default PropiedadesDestructuradasParametro;
 

