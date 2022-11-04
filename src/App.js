
// import logo from './logo.svg';
import React, {Fragment} from 'react';
// import './App.css';
import "./styles/styles.scss";
import Curso from './Component/Curso';
import Cursistos from './Component/Cursitos'
import Propiedades from "./Component/Propiedades";
// import PropiedadesDestructuradasParametro from './Component/PropiedadesDestructuradasParametro';
// import PropiedadesDestructuradas from './Component/PropiedadesDestructuradas'
// import Validacion from './Component/Validacion';
// import ValidacionPropTypes from './Component/ValidacionPropTypes';
import Banner from './Component/Banner'; 
import Formulario from './Component/Formulario';
import Course from './Component/Course';
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import MainMenu from './Component/MainMenu';
import Historial from './Component/Historial';


const cursosArray =[
  {
    "id":1,
    "titulo": "React 0",
    "image": "https://www.patterns.dev/img/reactjs/react-logo@3x.svg",
    "price": 30,
    "profesor": "Quiroga"
  },
  {
    "id":2,
    "titulo": "Boostrap",
    "image": "https://avatars.githubusercontent.com/u/2918581?s=280&v=4",
    "price": 13,
    "profesor": "Alvaro"
  },
  {
    "id":3,
    "titulo": "Node.JS",
    "image": "https://res.cloudinary.com/practicaldev/image/fetch/s--vrvqSDHx--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/s15ubgod56c7butyt7eu.jpg",
    "price": 23,
    "profesor": "Alexis"
  }
  

]

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
  
  <Router >
  {/* Route tiene dos propiedades el path o ruta el componente exact es un booleano para declara que la ruta sea exacta */}
  {/* en el componente se le puede llamanr a un componente o a un callback */}
  {/* El el video no lo dice pero no funcina sin <Routes> que engloba a route y se remplaza (component) por element={<Componente />} */}
 
  {/* <MainMenu/> */}
    

{/* Switch FUE REMPLAZADO POR Routes */}
  <Routes>
    {/* DefaultRoute and NotFoundRoute were removed in react-router 1.0.0. como en el video */}
    <Route path='*' exact={true} element={<Banner />} />
    {/* <Route exact path="/" element={<Banner />} /> */}
    {/* :parametro */}
    <Route path='/curso' element={<Curso />}  />
    <Route path='/cursos' element={
      <div>
      {
        cursosArray.map( cursoParametro =><Cursistos key={cursoParametro.id} id={cursoParametro.id} title={cursoParametro.titulo} image={cursoParametro.image} price={cursoParametro.price} /> )
      }
   </div>
    } />
    <Route path='/cursos/:id' element={<Course />} />
    <Route exact path="/formulario"  element={  <Formulario />} />
    <Route exact path='/propiedades'  element={ <Propiedades />} />
    <Route exact path='/historial'  element={ <Historial />} />
    
    {/* Creacion de elementos */}
    <Route path='/error' element= 
      { 
        <div className='ed-grid'>
          <h1>Error 404</h1>
          <span>Pagina no encontrada</span>
        </div>
      } 
    />
  </Routes>
  

</ Router >
  )
};

export default App;
