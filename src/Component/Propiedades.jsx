import React from "react";

const curso = {
    'title': "React",
    "image": "https://www.patterns.dev/img/reactjs/react-logo@3x.svg",
    "price": "30 usd"
}




const Propiedades = () =>(
    <div className="card" style={{width: "13rem"}}>
        {/* jsx propiedades */}
      <img className="card-img-top" src={curso.image} alt={curso.title} />
      <div className="card-body">
        {/* Contenido Js en el template */}

      <div className=" justify-content-center">
        <h3>{curso.title}</h3>
        <div className="">
          <a href="#" className="d-flex justify-content-center">{`$ ${curso.price}`}</a>
        </div>
      </div>
     

      </div>
    </div>
)

export default Propiedades;
 

