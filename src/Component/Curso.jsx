import React from "react";


// Contenido JS (objeto)
const persona = {"nombre": "Alberto", "edad": 39} 

// Objeto 2
const pablos = {"hi": "Hello", "hi2" : "Friend!!", "edad": 32}


// Funcion
const mayorDeEdad = edad => edad > 18;


const Curso = () =>(
    <div className="card" style={{width: "18rem"}}>
      <img className="card-img-top" src="https://avatars.githubusercontent.com/u/6853419?s=200&v=4" alt="Card cap error" />
      <div className="card-body">
        {/* Contenido Js en el template */}
      <div>{persona.nombre}</div> 
      <h5 className="card-title">{3 + 6 + 9}</h5>
      {/* Contenido con variables template string */}
      <span className="small">{`Hello Friend!${persona.nombre} an you have ${persona.edad} yearls old`}</span>
      {/* Usando funcion con operador ternario*/}
      <h3>{mayorDeEdad(persona.edad) ? "Soy mayor de edad ": "Soy menor "}</h3>
      
      {/* Tambien puede devolver un template o estructura  jsx */}

      {
      mayorDeEdad(persona.edad) 
        ? <div className=".text-success">
            <h1>
              <span>{`Hey ${pablos.hi} ${pablos.hi2}`}</span>
            </h1>
          </div> 
        : <p>Sorry Men</p>
      }
       
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="http://localhost" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
)

export default Curso;
 

