import { useState } from "react";

function FormacionAcademica({ persona, setPersona, anterior, siguiente }) {
  const [nivel, setNivel] = useState("");
  const [institucion, setInstitucion] = useState("");
  const [titulo, setTitulo] = useState("");
  const [anio, setAnio] = useState("");
  const [cursos, setCursos] = useState("");

  const continuar = (e) => {
    e.preventDefault();
    if (siguiente) siguiente();
  };

  return (
    <div className="pagina-formacion">
      <h1>Sistema de Registro Hojas de vida</h1>

      <div className="tarjeta-formulario">
        <form onSubmit={continuar}>
          <h2>Formación Académica</h2>

          <div className="grid-form">
            <div className="grupo">
              <label>Nivel de Formación</label>
              <select
                value={persona.nivel}
                onChange={(e) => setPersona({...persona, nivel: e.target.value})}
              >
                <option value="">Seleccione...</option>
                <option>Técnico</option>
                <option>Tecnólogo</option>
                <option>Universitario</option>
                <option>Especialización</option>
              </select>
            </div>

            <div className="grupo">
              <label>Institución Educativa</label>
              <input
                type="text"
                placeholder="Ingrese la institución"
                value={persona.institucion}
                onChange={(e) => setPersona({...persona, institucion: e.target.value})}
              />
            </div>

            <div className="grupo">
              <label>Título Obtenido</label>
              <input
                type="text"
                placeholder="Ingrese el título"
                value={persona.titulo}
                onChange={(e) => setPersona({...persona, titulo: e.target.value})}
              />
            </div>

            <div className="grupo">
              <label>Año de Graduación</label>
              <input
                type="number"
                placeholder="Ejemplo: 2025"
                value={persona.anio}
                onChange={(e) => setPersona({...persona, anio: e.target.value})}
              />
            </div>

            <div className="grupo grupo-completo">
              <label>Cursos Realizados</label>
              <textarea
                rows="3"
                placeholder="Escriba los cursos realizados"
                value={persona.cursos}
                onChange={(e) => setPersona({...persona, cursos: e.target.value})}
              />
            </div>
          </div>

          <div className="botones">
            <button
              type="button"
              className="btn"
              onClick={anterior}
            >
              ← Anterior
            </button>

            <button type="submit" className="btn">
              Siguiente →
            </button>
          </div>
        </form>
      </div>

      <footer>© 2026 Derechos reservados.</footer>
    </div>
  );
}

export default FormacionAcademica;