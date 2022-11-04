import React from "react-dom";
import {useParams} from "react-router-dom";

const cursosArray =[
    {
        "id": 1,
      "titulo": "React 0",
      "image": "https://www.patterns.dev/img/reactjs/react-logo@3x.svg",
      "price": 30,
      "profesor": "Quiroga"
    },
    {
        "id": 2,
      "titulo": "Boostrap",
      "image": "https://avatars.githubusercontent.com/u/2918581?s=280&v=4",
      "price": 13,
      "profesor": "Alvaro"
    },
    {
        "id": 3,
      "titulo": "Node.JS",
      "image": "https://res.cloudinary.com/practicaldev/image/fetch/s--vrvqSDHx--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/s15ubgod56c7butyt7eu.jpg",
      "price": 23,
      "profesor": "Alexis"
    }
    
  
  ]

// Dentro de la preopiedead Match se encuentran los parametros

const Course  = ({match}) => {
// React Router v6 brought some changes to the general syntax:

// Before:   <Route path="heroes/:id" component={Hero} />

// Now:      <Route path="heroes/:id" element={<Hero />} />

// You can't access params like with this.props.match anymore:

// Before:   this.props.match.params.id

// Now:      import {useParams} from "react-router-dom";
//           const {id} = useParams();

// You can now just use id as any other variable.

    const {id} = useParams();
    // console.log(id);

    const cursoActual= cursosArray.filter(c => c.id === parseInt(id))[0]
    return(
        <div className="ed-grid m-grid-3">
            {
                cursoActual ? (
                    <>
                    <h1>Curso: {cursoActual.titulo} </h1>
                    <img src={cursoActual.image} alt="algo fallo" />
                    <p className="m-cols-2">Descripcion</p>
                    </>
                ) :(
                    <h1>El curso no existe</h1>
                )
                
            }
        

    </div>
    )
}

export default Course;