import React from "react";


const PropiedadesDestructuradas = ({title,image,price}) =>(
    <div className="card" style={{width: "13rem"}}>
        {/* jsx propiedades */}
      <img className="card-img-top boots" src={image} alt={title} />
      <div className="card-body">
        {/* Contenido Js en el template */}

      <div className=" justify-content-center">
        <h3>{title}</h3>
        <div className="">
          <a href="#" className="d-flex justify-content-center">{`$ ${price}`}</a>
        </div>
      </div>
     

      </div>
    </div>
)

export default PropiedadesDestructuradas;
 

