import { useState } from 'react';

function ExperienciaLaboral({ persona, setPersona, anterior, siguiente }) {
  const [empresa, setEmpresa] = useState('');
  const [cargo, setCargo] = useState('');
  const [tiempo, setTiempo] = useState('');
  const [funciones, setFunciones] = useState('');
  const [habilidades, setHabilidades] = useState('');

  const continuar = (e) => {
    e.preventDefault();

    if (siguiente) {
      siguiente();
    }
  };

  return (
    <div className='pagina-formacion'>
      <h1>Sistema de Registro Hojas de vida</h1>

      <div className='tarjeta-formulario'>
        <form onSubmit={continuar}>
          <h2>Experiencia Laboral</h2>

          <div className='grid-form'>
            <div className='grupo'>
              <label>Empresa</label>
              <input
                type='text'
                placeholder='Nombre de la empresa'
                value={persona.empresa}
                onChange={(e) => setPersona({...persona, empresa: e.target.value})}
              />
            </div>

            <div className='grupo'>
              <label>Cargo</label>
              <input
                type='text'
                placeholder='Cargo desempeñado'
                value={persona.cargo}
                onChange={(e) => setPersona({...persona, cargo: e.target.value})}
              />
            </div>

            <div className='grupo'>
              <label>Tiempo de Experiencia</label>
              <input
                type='text'
                placeholder='Ejemplo: 1 año'
                value={persona.tiempo}
                onChange={(e) => setPersona({...persona, tiempo: e.target.value})}
              />
            </div>

            <div className='grupo'>
              <label>Funciones Desempeñadas</label>
              <textarea
                rows='4'
                placeholder='Describa las funciones realizadas'
                value={persona.funciones}
                onChange={(e) => setPersona({...persona, funciones: e.target.value})}
              />
            </div>

            <div className='grupo grupo-completo'>
              <label>Habilidades Técnicas</label>
              <textarea
                rows='3'
                placeholder='Ejemplo: HTML, CSS, JavaScript, React...'
                value={persona.habilidades}
                onChange={(e) => setPersona({...persona, habilidades: e.target.value})}
              />
            </div>
          </div>

          <div className='botones'>
            <button type='button' className='btn' onClick={anterior}>
              ← Anterior
            </button>

            <button type='submit' className='btn'>
              Vista Previa
            </button>
          </div>
        </form>
      </div>

      <footer>© 2026 Derechos reservados.</footer>
    </div>
  );
}

export default ExperienciaLaboral;