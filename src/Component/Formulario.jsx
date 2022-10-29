// **** COMPONENTES DE CLASE 
// Maner 1 de Extender las propiedades de Componet
// import React from "react";
// se puede extendes React.Component{}

// Manera 2 de Extender y traer las propiedades componet
import React, {Component} from "react";
// al importar React nos permite utilizar jsx

class Formulario extends Component{
    constructor(props) {
        // POO JS super() para traer las propiedades del padre
        super(props)

        // El estado controla al componente y solo es para ese componente (se puede heredar como propiedades a un hijo )
        this.state ={
            nombre: "",
            correo: "",
            fecha: new Date()
        }
        // Bind  sirve para enlacer nombre con el Metodo con el constructor
        this.cambiarNombre = this.cambiarNombre.bind(this);


        this.cambiarCorreo = this.cambiarCorreo.bind(this);

        this.cambiarFecha = this.cambiarFecha.bind(this);
    }

    

    cambiarNombre (e){
        this.setState({
            nombre: e.target.value
        })
    }

    cambiarCorreo (param){
        this.setState({
            correo: param.target.value
        })
    } 

    cambiarFecha(){
        this.setState({
            fecha: new Date()
        })
    }

    

    // this.state({})

    render(){
        return (
            <>
                <form action="/Hola" id="elemento">
                <div className="ed-grid">
                    <h1>Formulario {this.props.name}</h1>
                    <h4>Fecha actual{Math.ceil(this.state.fecha/1000)}</h4>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Nombre Completo</label>
                        {/* this.setState() para colocar un estado CON CALLBACK*/}
                        <input type="text" class="form-control" id="exampleFormControlInput1"
                         placeholder="Juanito Perez" onChange={this.cambiarNombre } />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"  onChange={ this.cambiarCorreo}/>
                    </div>
                    <input type="submit" class="btn btn-primary" value="Enviar" />


                </div> 
                </form>
                {/* Aqui se reflejan los cambios del estado  */}
                <h2>{`Hola ${this.state.nombre}`}</h2>
                <span>{`Tu correo es: ${this.state.correo}`}</span>
            </>
            
            
        )

    }

    componentDidMount(){
        let elemento = document.getElementById("elemento")
        // console.log(elemento);
        this.intevaloFecha = setInterval( () =>{
            this.cambiarFecha()
            console.log(new Date());
        },1000)
    }

    // Podemos acceder a las propiedades antes de qu el componete sea actulizado

    componentDidUpdate(prevProps, prevState){
        // viene de la invocacion en App Formulario name=Edteam
        // console.log(prevProps);
        // console.log(prevState);
        // console.log("----");

    }

    // Cada ves que se tengha que cambian intervalos , llamadas asincronas verificacion cierto tiempo para que no truene la aplicacion por recursos
    componentWillUnmount(){
         clearInterval(this.intevaloFecha)
    }

}

export default Formulario;