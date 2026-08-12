import { useState } from "react";

function ExperienciaLaboral({ persona, setPersona, anterior, siguiente }) {
  const [nuevaExperiencia, setNuevaExperiencia] = useState({
    empresa: "",
    cargo: "",
    tiempo: "",
    funciones: [],
    habilidades: []
  });

  const [nuevaFuncion, setNuevaFuncion] = useState("");
  const [nuevaHabilidad, setNuevaHabilidad] = useState("");

  // Agregar función
  const agregarFuncion = () => {
    if (nuevaFuncion.trim() === "") return;

    setNuevaExperiencia({
      ...nuevaExperiencia,
      funciones: [...nuevaExperiencia.funciones, nuevaFuncion]
    });

    setNuevaFuncion("");
  };

  // Eliminar función
  const eliminarFuncion = (indice) => {
    setNuevaExperiencia({
      ...nuevaExperiencia,
      funciones: nuevaExperiencia.funciones.filter((_, i) => i !== indice)
    });
  };

  // Agregar habilidad
  const agregarHabilidad = () => {
    if (nuevaHabilidad.trim() === "") return;

    setNuevaExperiencia({
      ...nuevaExperiencia,
      habilidades: [...nuevaExperiencia.habilidades, nuevaHabilidad]
    });

    setNuevaHabilidad("");
  };

  // Eliminar habilidad
  const eliminarHabilidad = (indice) => {
    setNuevaExperiencia({
      ...nuevaExperiencia,
      habilidades: nuevaExperiencia.habilidades.filter((_, i) => i !== indice)
    });
  };

  // Agregar experiencia
  const agregarExperiencia = () => {
    if (
      nuevaExperiencia.empresa.trim() === "" ||
      nuevaExperiencia.cargo.trim() === ""
    ) {
      return;
    }

    setPersona({
      ...persona,
      experiencias: [...persona.experiencias, nuevaExperiencia]
    });

    setNuevaExperiencia({
      empresa: "",
      cargo: "",
      tiempo: "",
      funciones: [],
      habilidades: []
    });
  };

  // Eliminar experiencia
  const eliminarExperiencia = (indice) => {
    setPersona({
      ...persona,
      experiencias: persona.experiencias.filter((_, i) => i !== indice)
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
          <h2>Experiencia Laboral</h2>

          <div className="grid-form">
            <div className="grupo">
              <label>Empresa</label>
              <input
                type="text"
                placeholder="Nombre de la empresa"
                value={nuevaExperiencia.empresa}
                onChange={(e) =>
                  setNuevaExperiencia({
                    ...nuevaExperiencia,
                    empresa: e.target.value
                  })
                }
              />
            </div>

            <div className="grupo">
              <label>Cargo</label>
              <input
                type="text"
                placeholder="Cargo desempeñado"
                value={nuevaExperiencia.cargo}
                onChange={(e) =>
                  setNuevaExperiencia({
                    ...nuevaExperiencia,
                    cargo: e.target.value
                  })
                }
              />
            </div>

            <div className="grupo">
              <label>Tiempo de experiencia</label>
              <input
                type="text"
                placeholder="Ejemplo: 1 año"
                value={nuevaExperiencia.tiempo}
                onChange={(e) =>
                  setNuevaExperiencia({
                    ...nuevaExperiencia,
                    tiempo: e.target.value
                  })
                }
              />
            </div>

            {/* Funciones */}
            <div className="grupo grupo-completo">
              <label>Funciones desempeñadas</label>

              <div className="fila-curso">
                <input
                  type="text"
                  placeholder="Agregar una función"
                  value={nuevaFuncion}
                  onChange={(e) => setNuevaFuncion(e.target.value)}
                />

                <button
                  type="button"
                  className="btn-agregar"
                  onClick={agregarFuncion}
                >
                  + Agregar
                </button>
              </div>

              <div className="lista-cursos">
                {nuevaExperiencia.funciones.map((funcion, indice) => (
                  <div key={indice} className="curso-item">
                    <span>{funcion}</span>

                    <button
                      type="button"
                      className="btn-eliminar"
                      onClick={() => eliminarFuncion(indice)}
                    >
                      Eliminar
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Habilidades */}
            <div className="grupo grupo-completo">
              <label>Habilidades técnicas</label>

              <div className="fila-curso">
                <input
                  type="text"
                  placeholder="Agregar una habilidad"
                  value={nuevaHabilidad}
                  onChange={(e) => setNuevaHabilidad(e.target.value)}
                />

                <button
                  type="button"
                  className="btn-agregar"
                  onClick={agregarHabilidad}
                >
                  + Agregar
                </button>
              </div>

              <div className="lista-cursos">
                {nuevaExperiencia.habilidades.map((habilidad, indice) => (
                  <div key={indice} className="curso-item">
                    <span>{habilidad}</span>

                    <button
                      type="button"
                      className="btn-eliminar"
                      onClick={() => eliminarHabilidad(indice)}
                    >
                      Eliminar
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <button
            type="button"
            className="btn"
            onClick={agregarExperiencia}
            style={{ marginTop: "20px", marginBottom: "20px" }}
          >
            + Agregar experiencia
          </button>

          <div className="lista-experiencias">
            {persona.experiencias.map((exp, indice) => (
              <div key={indice} className="experiencia-item">
                <p><strong>Empresa:</strong> {exp.empresa}</p>
                <p><strong>Cargo:</strong> {exp.cargo}</p>
                <p><strong>Tiempo:</strong> {exp.tiempo}</p>

                <p><strong>Funciones:</strong></p>
                <ul>
                  {exp.funciones.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>

                <p><strong>Habilidades:</strong></p>
                <ul>
                  {exp.habilidades.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>

                <button
                  type="button"
                  className="btn-eliminar"
                  onClick={() => eliminarExperiencia(indice)}
                >
                  Eliminar experiencia
                </button>
              </div>
            ))}
          </div>

          <div className="botones">
            <button type="button" className="btn" onClick={anterior}>
              ← Anterior
            </button>

            <button type="submit" className="btn">
              Vista previa
            </button>
          </div>
        </form>
      </div>

      <footer>© 2026 Derechos reservados.</footer>
    </div>
  );
}

export default ExperienciaLaboral;