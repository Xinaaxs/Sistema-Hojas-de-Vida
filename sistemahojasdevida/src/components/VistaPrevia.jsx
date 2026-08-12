import React from 'react';

function VistaPrevia({ persona, anterior, enviar }) {

  const confirmarEnvio = () => {
    alert("¡Registro completado exitosamente!");
    if(enviar) enviar();
  };

  const urlFoto = persona.foto ? URL.createObjectURL(persona.foto) : null;

  return (
    <div className="pagina-formacion">
      <h1>Resumen de la Hoja de Vida</h1>

      <div className="tarjeta-formulario">
        <h2>Vista Previa de Información</h2>



        {/* Muestra la fotografía si el usuario la seleccionó */}
        {urlFoto && (
          <div className="contenedor-foto" style={{ textAlign: 'center', marginBottom: '20px' }}>
            <img 
              src={urlFoto} 
              alt="Fotografía del aprendiz" 
              style={{
                width: '130px',
                height: '130px',
                objectFit: 'cover',
                borderRadius: '50%',
                border: '3px solid #007bff'
              }} 
            />
          </div>
        )}

        {/* Sección Datos Personales */}
        <section className="seccion-resumen">
          <h3>Datos Personales</h3>
          <p><strong>Nombre:</strong> {persona.nombre || "No especificado"}</p>
          <p><strong>Edad:</strong> {persona.edad}</p>
          <p><strong>Ciudad:</strong> {persona.ciudad}</p>
          <p><strong>Programa:</strong> {persona.programa}</p>
          <p><strong>Correo:</strong> {persona.correo}</p>
          <p><strong>Ficha:</strong> {persona.ficha}</p>
          <p><strong>Jornada:</strong> {persona.jornada}</p>
        </section>

        <hr />

        {/* Sección Formación Académica */}
        <section className="seccion-resumen">
          <h3>Formación Académica</h3>
          <p><strong>Nivel:</strong> {persona.nivel}</p>
          <p><strong>Institución:</strong> {persona.institucion}</p>
          <p><strong>Título:</strong> {persona.titulo}</p>
          <p><strong>Año:</strong> {persona.anio}</p>
          <p><strong>Cursos realizados:</strong></p>

          {persona.cursos.length > 0 ? (
            <ul>
                {persona.cursos.map((curso, indice) => (
                  <li key={indice}>{curso}</li>
            ))}
            </ul>
          ) : (
            <p>No se registraron cursos.</p>
          )}
          </section>

        <hr />

        

        {/* Sección Experiencia Laboral */}
<section className="seccion-resumen">
  <h3>Experiencia Laboral</h3>

  {persona.experiencias.length > 0 ? (
    persona.experiencias.map((exp, indice) => (
      <div key={indice} className="detalle">
        <p><strong>Empresa:</strong> {exp.empresa}</p>
        <p><strong>Cargo:</strong> {exp.cargo}</p>
        <p><strong>Tiempo:</strong> {exp.tiempo}</p>
        <p><strong>Funciones:</strong> {exp.funciones}</p>
        <p><strong>Habilidades:</strong> {exp.habilidades}</p>
        <hr />
      </div>
    ))
  ) : (
    <p>No se registraron experiencias laborales.</p>
  )}
</section>






        <div className="botones">
          <button type="button" className="btn" onClick={anterior}>
            ← Editar datos
          </button>

          <button type="button" className="btn" onClick={confirmarEnvio} style={{backgroundColor: '#28a745', color: 'white'}}>
            Confirmar y Enviar →
          </button>
        </div>
      </div>
    </div>
  );
}

export default VistaPrevia;