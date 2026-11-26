import { useState } from "react";   
import { iniciarSesion } from "../../services/api";

function NavigatorLogin({onlogin}){

    //estado del formulario
    const [correo,setCorreo] = useState("");
    const [password,setPassword] = useState("");

    //estado para controlar los procesos
    const [error,setError] = useState("");
    const [cargando,setCargando] = useState(false);

    const manejarLogin = async (e) => {
        //evitar que el formulario recargue la pagina
        e.preventDefault();
        setError("");
        setCargando(true);

        try{
            //enviar los datos a Flask
            const respuesta = await iniciarSesion({
                correo: correo.trim().toLowerCase(),
                password: password 
            });

            onlogin(respuesta.usuario);

        }catch(error){
            setError(error.message);

        }finally{
            setCargando(false);
        }
    };

    return(
        <div className="login-container">
            <h2>Inicio de sesión</h2>

            <form onSubmit={manejarLogin}>
                <div className="form-group">
                    <label>Correo electronico</label>
                    <input type="email" value={correo} onChange={(e)=>
                        setCorreo(e.target.value)
                    } required />
                </div>

                <div className="form-group">
                    <label>Contraseña</label>
                    <input type="password" value={password} onChange={(e)=>
                        setPassword(e.target.value)
                    } required />
                </div>

                {error && <p>{error}</p>}

                <button type="submit" disabled={cargando}>
                    {cargando
                        ? "Validando..."
                        : "Ingresar"}
                </button>

            </form>
        </div>
    );
}

export default login