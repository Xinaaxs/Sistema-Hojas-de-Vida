import { useState } from 'react';

function ExperienciaLaboral({ anterior, siguiente }) {
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
                value={empresa}
                onChange={(e) => setEmpresa(e.target.value)}
              />
            </div>

            <div className='grupo'>
              <label>Cargo</label>
              <input
                type='text'
                placeholder='Cargo desempeñado'
                value={cargo}
                onChange={(e) => setCargo(e.target.value)}
              />
            </div>

            <div className='grupo'>
              <label>Tiempo de Experiencia</label>
              <input
                type='text'
                placeholder='Ejemplo: 1 año'
                value={tiempo}
                onChange={(e) => setTiempo(e.target.value)}
              />
            </div>

            <div className='grupo'>
              <label>Funciones Desempeñadas</label>
              <textarea
                rows='4'
                placeholder='Describa las funciones realizadas'
                value={funciones}
                onChange={(e) => setFunciones(e.target.value)}
              />
            </div>

            <div className='grupo grupo-completo'>
              <label>Habilidades Técnicas</label>
              <textarea
                rows='3'
                placeholder='Ejemplo: HTML, CSS, JavaScript, React...'
                value={habilidades}
                onChange={(e) => setHabilidades(e.target.value)}
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