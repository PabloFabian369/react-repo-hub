// import logo from './logo.svg';
import React, {Fragment} from 'react';
// import './App.css';
import "./styles/styles.scss";
// import Curso from './Curso';
// import Propiedades from "./Propiedades";
// import PropiedadesDestructuradasParametro from './Component/PropiedadesDestructuradasParametro';
// import PropiedadesDestructuradas from './Component/PropiedadesDestructuradas'
// import Validacion from './Component/Validacion';
// import ValidacionPropTypes from './Component/ValidacionPropTypes';
import Banner from './Component/Banner'; 
import Formulario from './Component/Formulario'


// Reglas JSX:
  // 1. Toda Etiqueta debe cerrar etiquetas (incluso img se cierra)
  // 2.Expresiones JSX solo pueden tener 1 hijo directo, solo se puede ser 1 (ejemplo div)
  // 3. Fragment se tien que importar y se utiliza para apoyasrse para devolover 2 elementos y violar la regla 1
  // 4: Fragment => <> hijos </>
  // 5: class pasa a ser => className
  // 6: for pasa a ser => htmlFor
  // 7. EStilos como objetos
  // 8. NO if, else, while
                  
const App = () => {
  return(
    // Revisar la consola en busca de advertencias
  <>
    
    {/* <Curso /> */}
    {/* <Propiedades /> */}
    {/* <PropiedadesDestructuradasParametro 
      title='React'
      image="https://www.patterns.dev/img/reactjs/react-logo@3x.svg"
      price= "30 usd"
    />

    <PropiedadesDestructuradas
      title='Boostrap'
      image="https://avatars.githubusercontent.com/u/2918581?s=280&v=4"
      price= "20 usd"
    /> */}
  {/* <Validacion />
  <ValidacionPropTypes  /> */}

     {/* <div>
        {
          cursosArray.map( cursoParametro =><ValidacionPropTypes title={cursoParametro.titulo} image={cursoParametro.image} price={cursoParametro.price} /> )
        }
     </div> */}


     <Banner />
     <Formulario />




  </>
  )
};

export default App;
