
 //direccion del backend
const API_URL = "http://127.0.0.1:5000";

export const obtenerToken = () => {
    return localStorage.getItem("token");
};

export const apiRequest = async (endpoint, opciones = {}) => {
    const token = obtenerToken();

    //crear los encabezados enviar la informacion al servidor
    const headers = {
        ...opciones.headers
    };

    if(opciones.body){
        headers["Content-Type"] = "application/json";
    }

    if(token){
        headers["Authorization"] = `Bearer ${token}`;
    }

    //peticion fecth a flask
    const respuesta = await fetch(`${API_URL}${endpoint}`, {
        ...opciones,
        headers
    });

    //verificar los errores en la conexion
    const datos = await respuesta.json();

    if (!respuesta.ok){
        throw new Error(datos.mensaje || "Error en la petición");
    }

    return datos;
};

//registro de usuario
export const registroUsuario = (datos) =>{
    return apiRequest("/api/registro-usuario", {
        method: "POST",
        body: JSON.stringify(datos)
    });
};

//Inicio sesion
export const iniciarSesion = async (datos) => {
    const respuesta = await apiRequest("/api/login", {
        method: "POST",
        body: JSON.stringify(datos)
    });

    localStorage.setItem("token", respuesta.token);
    localStorage.setItem("usuario", JSON.stringify(respuesta.usuario));

    return respuesta;
};

//Cerrar Sesion
export const cerrarSesion = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("usuario");
};
