// import logo from './logo.svg';
import React, {Fragment} from 'react';
// import './App.css';
import "./styles/styles.scss";
import Curso from './Curso'

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
    
    {/* <div className="card" style={{width: "18rem"}}>
      <img className="card-img-top" src="https://avatars.githubusercontent.com/u/6853419?s=200&v=4" alt="Card cap error" />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="http://localhost" className="btn btn-primary">Go somewhere</a>
      </div>
    </div> */}

    <Curso />
        

     
  </>
  )
};

export default App;
