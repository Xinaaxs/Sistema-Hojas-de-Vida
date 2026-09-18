import { useState } from 'react';

import Header from './components/Header';
import FormularioDatos from './components/FormularioDatos';
import FormacionAcademica from './components/FormularioAcademico';
import ExperienciaLaboral from './components/FormularioExperiencia';
import VistaPrevia from './components/VistaPrevia';
import Footer from './components/Footer';

import './App.css';

function App() {

  const [paso, setPaso] = useState(1);

  //datos compartidos
  const [persona, setPersona] = useState({
    foto: null,
    nombre: "",
    edad: "",
    ciudad: "",
    correo: "",
    programa: "",
    ficha: "",
    jornada: "Mañana",

    nivel: "",
    institucion: "",
    titulo: "",
    anio: "",

    cursos: [],

    experiencias: []
  });


  //guardar datos personales

  const guardarhojavida = async () => {

    try {

      const datosapi = {
        nombre: persona.nombre,
        edad: persona.edad,
        ciudad: persona.ciudad,
        correo: persona.correo,
        fotografia: null,
        programa: persona.programa,
        ficha: persona.ficha,
        jornada: persona.jornada
      };

      const respuesta = await fetch(
        "http://127.0.0.1:5000/api/registrohv",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(datosapi)
        }
      );

      const resultado = await respuesta.json();

      console.log("Hoja de vida registrada:", resultado);

      return resultado.id;

    } catch (error) {

      console.error("Error al conectar con Flask", error);

      return null;
    }
  };


  //guardar estudios

  const guardarformacion = async (idHojaVida) => {

    try {

      const datosapi = {
        nivel: persona.nivel,
        institucion: persona.institucion,
        titulo: persona.titulo,
        anio_graduacion: persona.anio
      };

      const respuesta = await fetch(
        `http://127.0.0.1:5000/api/hojasvida/${idHojaVida}/estudios`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(datosapi)
        }
      );

      const resultado = await respuesta.json();

      console.log("Estudio registrado:", resultado);

      return resultado.id;

    } catch (error) {

      console.error("Error al registrar estudio:", error);

      return null;
    }
  };


  //Guardar Cursos

  const guardarCursos = async (idHojaVida) => {

    for (const curso of persona.cursos) {

      try {

        const respuesta = await fetch(
          `http://127.0.0.1:5000/api/hojasvida/${idHojaVida}/cursos`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              nombre: curso
            })
          }
        );

        const resultado = await respuesta.json();

        console.log("Curso registrado:", resultado);

      } catch (error) {

        console.error("Error al registrar curso:", error);
      }
    }
  };


  //Guardar Experiencia

  const guardarExperiencia = async (idHojaVida, experiencia) => {

    try {

      const datosapi = {
        empresa: experiencia.empresa,
        cargo: experiencia.cargo,
        tiempo: experiencia.tiempo,
        funciones: Array.isArray(experiencia.funciones)
          ? experiencia.funciones.join(", ")
          : experiencia.funciones
      };

      const respuesta = await fetch(
        `http://127.0.0.1:5000/api/hojasvida/${idHojaVida}/experiencias`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(datosapi)
        }
      );

      const resultado = await respuesta.json();

      console.log("Experiencia registrada:", resultado);

      return resultado.id;

    } catch (error) {

      console.error("Error al registrar experiencia:", error);

      return null;
    }
  };


  //Guardar habilidades

  const guardarHabilidades = async (idExperiencia, habilidades) => {

    for (const habilidad of habilidades) {

      try {

        const respuesta = await fetch(
          `http://127.0.0.1:5000/api/experiencias/${idExperiencia}/habilidades`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              nombre: habilidad
            })
          }
        );

        const resultado = await respuesta.json();

        console.log("Habilidad registrada:", resultado);

      } catch (error) {

        console.error("Error al registrar habilidad:", error);
      }
    }
  };


  //Guardar todo

  const guardarTodo = async () => {

    const idHojaVida = await guardarhojavida();

    if (!idHojaVida) {
      return;
    }

    await guardarformacion(idHojaVida);

    await guardarCursos(idHojaVida);

    for (const experiencia of persona.experiencias) {

      const idExperiencia = await guardarExperiencia(
        idHojaVida,
        experiencia
      );

      if (idExperiencia) {
        await guardarHabilidades(
          idExperiencia,
          experiencia.habilidades
        );
      }
    }

    alert("¡Hoja de vida registrada correctamente!");
  };


  return (
    <div className='contenedor'>

      <Header />

      {paso === 1 && (
        <FormularioDatos
          persona={persona}
          setPersona={setPersona}
          siguiente={() => setPaso(2)}
        />
      )}

      {paso === 2 && (
        <FormacionAcademica
          persona={persona}
          setPersona={setPersona}
          anterior={() => setPaso(1)}
          siguiente={() => setPaso(3)}
        />
      )}

      {paso === 3 && (
        <ExperienciaLaboral
          persona={persona}
          setPersona={setPersona}
          anterior={() => setPaso(2)}
          siguiente={() => setPaso(4)}
        />
      )}

      {paso === 4 && (
        <VistaPrevia
          persona={persona}
          anterior={() => setPaso(3)}
          guardarhojavida={guardarTodo}
        />
      )}

      <Footer />

    </div>
  );
}

export default App;