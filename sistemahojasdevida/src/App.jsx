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
  const [persona,setPersona] = useState({
    
    
    //datos personales de la persona
    foto: null,
    nombre:"",
    edad:"",
    ciudad:"",
    correo:"",
    programa:"",
    ficha:"",
    jornada:"Mañana",

    //informmación de estudios
    nivel:"",
    institucion:"",
    titulo:"",
    anio:"",
    cursos:[],

    //experiencia
    experiencias: []


  })

  return (
    <div className='contenedor'>
      <Header />

      {paso === 1 && (
        <FormularioDatos 
        persona = {persona}
        setPersona = {setPersona}
        siguiente={() => setPaso(2)} 
        />
      )}

      {paso === 2 && (
        <FormacionAcademica
          persona = {persona}
          setPersona = {setPersona}
          anterior={() => setPaso(1)}
          siguiente={() => setPaso(3)}
        />
      )}

      {paso === 3 && (
        <ExperienciaLaboral
          persona = {persona}
          setPersona = {setPersona}
          anterior={() => setPaso(2)}
          siguiente={() => setPaso(4)}
        />
      )}

      {paso === 4 && (
        <VistaPrevia
          persona = {persona}
          anterior={() => setPaso(3)}
          enviar={() => {
          }}
        />
      )}

      <Footer />
    </div>
  );
}

export default App;