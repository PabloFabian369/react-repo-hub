import React from "react";


const Validacion = ({title,image,price}) =>(
    <div className="card" style={{width: "13rem"}}>
        {/* validacion forma 1 */}
        {/* {
            image 
            ? <img className="card-img-top boots" src={image} alt={title} />
            : <p>NO hay imagen</p>
        } */}

        {/* Validacion forma 2 (dentro de los parametros) */}
        <img 
            src= { image ? image : "https://img.freepik.com/vector-gratis/ups-error-404-ilustracion-concepto-robot-roto_114360-5529.jpg?w=740&t=st=1666755621~exp=1666756221~hmac=4f25025d432f1252d0b64cce6e8eeb4261510333d41d46fca384fdb2b78d510b"}
            alt = { title ? title : "No hay titulo"}
        />
      
      <div className="card-body">
       

      <div className=" justify-content-center">
        

        <h3>{title ?  title : "No hay titulo" }</h3>
        <div className="">
          <a href="http://localhost" className="d-flex justify-content-center">{`$ ${price}`}</a>
        </div>
      </div>
     

      </div>
    </div>
)

export default Validacion;
 

