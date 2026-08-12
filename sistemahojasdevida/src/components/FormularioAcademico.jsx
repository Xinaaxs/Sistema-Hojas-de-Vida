import { useState } from "react";

function FormacionAcademica({ persona, setPersona, anterior, siguiente }) {
  // Estado temporal para escribir un curso
  const [nuevoCurso, setNuevoCurso] = useState("");

  // Agregar curso
  const agregarCurso = () => {
    if (nuevoCurso.trim() === "") return;

    setPersona({
      ...persona,
      cursos: [...persona.cursos, nuevoCurso]
    });

    setNuevoCurso("");
  };

  // Eliminar curso
  const eliminarCurso = (indice) => {
    const cursosActualizados = persona.cursos.filter((_, i) => i !== indice);

    setPersona({
      ...persona,
      cursos: cursosActualizados
    });
  };

  const continuar = (e) => {
    e.preventDefault();
    if (siguiente) siguiente();
  };

  return (
    <div className="pagina-formacion">
      <h1>Sistema de Registro Hojas de Vida</h1>

      <div className="tarjeta-formulario">
        <form onSubmit={continuar}>
          <h2>Formación Académica</h2>

          <div className="grid-form">
            <div className="grupo">
              <label>Nivel de Formación</label>
              <select
                value={persona.nivel}
                onChange={(e) =>
                  setPersona({ ...persona, nivel: e.target.value })
                }
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
                onChange={(e) =>
                  setPersona({ ...persona, institucion: e.target.value })
                }
              />
            </div>

            <div className="grupo">
              <label>Título Obtenido</label>
              <input
                type="text"
                placeholder="Ingrese el título"
                value={persona.titulo}
                onChange={(e) =>
                  setPersona({ ...persona, titulo: e.target.value })
                }
              />
            </div>

            <div className="grupo">
              <label>Año de Graduación</label>
              <input
                type="number"
                placeholder="Ejemplo: 2025"
                value={persona.anio}
                onChange={(e) =>
                  setPersona({ ...persona, anio: e.target.value })
                }
              />
            </div>

            <div className="grupo grupo-completo">
              <label>Cursos Realizados</label>

              <div className="fila-curso">
                <input
                  type="text"
                  placeholder="Escriba un curso"
                  value={nuevoCurso}
                  onChange={(e) => setNuevoCurso(e.target.value)}
                />

                <button
                  type="button"
                  className="btn-agregar"
                  onClick={agregarCurso}
                >
                  + Agregar
                </button>
              </div>

              <div className="lista-cursos">
                {persona.cursos.map((curso, indice) => (
                  <div key={indice} className="curso-item">
                    <span>{curso}</span>

                    <button
                      type="button"
                      className="btn-eliminar"
                      onClick={() => eliminarCurso(indice)}
                    >
                      Eliminar
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="botones">
            <button type="button" className="btn" onClick={anterior}>
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