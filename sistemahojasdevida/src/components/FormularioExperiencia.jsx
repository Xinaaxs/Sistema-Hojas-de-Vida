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


  const agregarFuncion = () => {
    if (nuevaFuncion.trim() === "") return;

    setNuevaExperiencia((prev) => ({
      ...prev,
      funciones: [...prev.funciones, nuevaFuncion.trim()]
    }));

    setNuevaFuncion("");
  };


  const eliminarFuncion = (indice) => {
    setNuevaExperiencia((prev) => ({
      ...prev,
      funciones: prev.funciones.filter((_, i) => i !== indice)
    }));
  };


  const agregarHabilidad = () => {
    if (nuevaHabilidad.trim() === "") return;

    setNuevaExperiencia((prev) => ({
      ...prev,
      habilidades: [...prev.habilidades, nuevaHabilidad.trim()]
    }));

    setNuevaHabilidad("");
  };

  const eliminarHabilidad = (indice) => {
    setNuevaExperiencia((prev) => ({
      ...prev,
      habilidades: prev.habilidades.filter((_, i) => i !== indice)
    }));
  };

  const agregarExperiencia = () => {
    // Validar empresa
    if (nuevaExperiencia.empresa.trim() === "") {
      alert("Completa Empresa.");
      return;
    }


    if (nuevaExperiencia.cargo.trim() === "") {
      alert("Completa Cargo.");
      return;
    }


    if (nuevaExperiencia.tiempo.trim() === "") {
      alert("Completa Tiempo de Experiencia.");
      return;
    }


    if (nuevaExperiencia.funciones.length === 0) {
      alert("Completa Funciones desempeñadas.");
      return;
    }


    if (nuevaExperiencia.habilidades.length === 0) {
      alert("Completa Habilidades Técnicas.");
      return;
    }

    // Agregar experiencia a persona
    setPersona((prevPersona) => ({
      ...prevPersona,
      experiencias: [
        ...prevPersona.experiencias,
        {
          ...nuevaExperiencia,
          funciones: [...nuevaExperiencia.funciones],
          habilidades: [...nuevaExperiencia.habilidades]
        }
      ]
    }));


    setNuevaExperiencia({
      empresa: "",
      cargo: "",
      tiempo: "",
      funciones: [],
      habilidades: []
    });

    setNuevaFuncion("");
    setNuevaHabilidad("");

    alert("Experiencia agregada correctamente.");
  };


  const eliminarExperiencia = (indice) => {
    setPersona((prevPersona) => ({
      ...prevPersona,
      experiencias: prevPersona.experiencias.filter(
        (_, i) => i !== indice
      )
    }));
  };

  const continuar = (e) => {
    e.preventDefault();

    const hayNuevaExperiencia =
      nuevaExperiencia.empresa.trim() !== "" ||
      nuevaExperiencia.cargo.trim() !== "" ||
      nuevaExperiencia.tiempo.trim() !== "" ||
      nuevaExperiencia.funciones.length > 0 ||
      nuevaExperiencia.habilidades.length > 0;


    if (hayNuevaExperiencia) {
      if (nuevaExperiencia.empresa.trim() === "") {
        alert("Completa Empresa.");
        return;
      }

      if (nuevaExperiencia.cargo.trim() === "") {
        alert("Completa Cargo.");
        return;
      }

      if (nuevaExperiencia.tiempo.trim() === "") {
        alert("Completa Tiempo de Experiencia.");
        return;
      }

      if (nuevaExperiencia.funciones.length === 0) {
        alert("Completa Funciones desempeñadas.");
        return;
      }

      if (nuevaExperiencia.habilidades.length === 0) {
        alert("Completa Habilidades Técnicas.");
        return;
      }
    }

    /*
      Si no hay experiencias guardadas y tampoco
      hay una nueva experiencia diligenciada,
      no podemos continuar.
    */
    if (
      persona.experiencias.length === 0 &&
      !hayNuevaExperiencia
    ) {
      alert("Ingresa al menos una experiencia laboral.");
      return;
    }

    if (hayNuevaExperiencia) {
      setPersona((prevPersona) => ({
        ...prevPersona,
        experiencias: [
          ...prevPersona.experiencias,
          {
            ...nuevaExperiencia,
            funciones: [...nuevaExperiencia.funciones],
            habilidades: [...nuevaExperiencia.habilidades]
          }
        ]
      }));
    }

    alert("La experiencia laboral fue guardada correctamente.");

    if (siguiente) {
      siguiente();
    }
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
                  setNuevaExperiencia((prev) => ({
                    ...prev,
                    empresa: e.target.value
                  }))
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
                  setNuevaExperiencia((prev) => ({
                    ...prev,
                    cargo: e.target.value
                  }))
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
                  setNuevaExperiencia((prev) => ({
                    ...prev,
                    tiempo: e.target.value
                  }))
                }
              />
            </div>

            <div className="grupo grupo-completo">
              <label>Funciones desempeñadas</label>

              <div className="fila-curso">
                <input
                  type="text"
                  placeholder="Agregar una función"
                  value={nuevaFuncion}
                  onChange={(e) =>
                    setNuevaFuncion(e.target.value)
                  }
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
                {nuevaExperiencia.funciones.map(
                  (funcion, indice) => (
                    <div
                      key={indice}
                      className="curso-item"
                    >
                      <span>{funcion}</span>

                      <button
                        type="button"
                        className="btn-eliminar"
                        onClick={() =>
                          eliminarFuncion(indice)
                        }
                      >
                        Eliminar
                      </button>
                    </div>
                  )
                )}
              </div>
            </div>

            <div className="grupo grupo-completo">
              <label>Habilidades técnicas</label>

              <div className="fila-curso">
                <input
                  type="text"
                  placeholder="Agregar una habilidad"
                  value={nuevaHabilidad}
                  onChange={(e) =>
                    setNuevaHabilidad(e.target.value)
                  }
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
                {nuevaExperiencia.habilidades.map(
                  (habilidad, indice) => (
                    <div
                      key={indice}
                      className="curso-item"
                    >
                      <span>{habilidad}</span>

                      <button
                        type="button"
                        className="btn-eliminar"
                        onClick={() =>
                          eliminarHabilidad(indice)
                        }
                      >
                        Eliminar
                      </button>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          <button
            type="button"
            className="btn"
            onClick={agregarExperiencia}
            style={{
              marginTop: "20px",
              marginBottom: "20px"
            }}
          >
            + Agregar experiencia
          </button>

          <div className="lista-experiencias">
            {persona.experiencias.map(
              (exp, indice) => (
                <div
                  key={indice}
                  className="experiencia-item"
                >
                  <p>
                    <strong>Empresa:</strong>{" "}
                    {exp.empresa}
                  </p>

                  <p>
                    <strong>Cargo:</strong>{" "}
                    {exp.cargo}
                  </p>

                  <p>
                    <strong>Tiempo:</strong>{" "}
                    {exp.tiempo}
                  </p>

                  <p>
                    <strong>Funciones:</strong>
                  </p>

                  <ul>
                    {exp.funciones.map(
                      (funcion, i) => (
                        <li key={i}>
                          {funcion}
                        </li>
                      )
                    )}
                  </ul>

                  <p>
                    <strong>Habilidades:</strong>
                  </p>

                  <ul>
                    {exp.habilidades.map(
                      (habilidad, i) => (
                        <li key={i}>
                          {habilidad}
                        </li>
                      )
                    )}
                  </ul>

                  <button
                    type="button"
                    className="btn-eliminar"
                    onClick={() =>
                      eliminarExperiencia(indice)
                    }
                  >
                    Eliminar experiencia
                  </button>
                </div>
              )
            )}
          </div>

    
          <div className="botones">
            <button
              type="button"
              className="btn"
              onClick={anterior}
            >
              ← Anterior
            </button>

            <button
              type="submit"
              className="btn"
            >
              Vista previa
            </button>
          </div>
        </form>
      </div>

      <footer>
        © 2026 Derechos reservados.
      </footer>
    </div>
  );
}

export default ExperienciaLaboral;