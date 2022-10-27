import React from "react";
// Instalar prop-types
//  $ yarn add prop-types
// Sirve para validar a traves de un objeto y no uno por uno
import PropTypes from 'prop-types';


const ValidacionPropTypes = ({title,image,price}) =>(
    <div className="card" style={{width: "13rem"}}>
        {/* Validacion por prop-types */}
        <img src= { image} alt = { title} />
      
      <div className="card-body">
       

      <div className=" justify-content-center">
        

        <h3>{title }</h3>
        <div className="">
          <a href="localhost" className="d-flex justify-content-center">{`$ ${price} USD`}</a>
        </div>
      </div>
     

      </div>
    </div>
)

// Super importante la sintaxis invocacion del componente, .propTypes  y .defaultProps

ValidacionPropTypes.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
    profesor: PropTypes.string
}

ValidacionPropTypes.defaultProps ={
    title: "No se encontro titulo",
    image: "https://img.freepik.com/vector-gratis/ups-error-404-ilustracion-concepto-robot-roto_114360-5529.jpg?w=740&t=st=1666755621~exp=1666756221~hmac=4f25025d432f1252d0b64cce6e8eeb4261510333d41d46fca384fdb2b78d510b",
    price: "--",
    profesor: ""

}

export default ValidacionPropTypes;
 

