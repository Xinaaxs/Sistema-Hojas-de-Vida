import { useState } from 'react';

import Header from './components/Header';
import FormularioDatos from './components/FormularioDatos';
import FormacionAcademica from './components/FormularioAcademico';
import ExperienciaLaboral from './components/FormularioExperiencia';
import Footer from './components/Footer';

import './App.css';

function App() {
  const [paso, setPaso] = useState(1);

  return (
    <div className='contenedor'>
      <Header />

      {paso === 1 && (
        <FormularioDatos siguiente={() => setPaso(2)} />
      )}

      {paso === 2 && (
        <FormacionAcademica
          anterior={() => setPaso(1)}
          siguiente={() => setPaso(3)}
        />
      )}

      {paso === 3 && (
        <ExperienciaLaboral
          anterior={() => setPaso(2)}
          siguiente={() => setPaso(4)}
        />
      )}

      <Footer />
    </div>
  );
}

export default App;