import "./task.css";
export function TaskCard({ready}) {
  return (
    <div className="card">
      <h1>Mi primer tarea</h1>
        <span className={ready ? 'bg-green' : 'bg-red'}>
             {ready ? " Tarea realizada " : " Tarea pendiente "}
        </span>
      {/* FORMA DE AGREGARLE ESTILO en linea con OPERADOR TERNARIO se puede hacer usando estilos en linea o clasesName como se ve ejemplo de arriba. */}
      {/* <span
      style={ready? {background: 'green'}:{background: 'red'}}
      > {ready ? " Tarea realizada " : " Tarea pendiente "}</span> */}
    </div>
  );
  //FORMA DE AÑADIR ESTILOS EN LINEA es util si quieres hacer que una propiedad si es true te muestre un valor si es false te muestre otro color etc...

  //   const cardStyles = { background: "#202020", color: "#fff", padding: "20px" };
  //   const titleStyle ={ fontWeight: "lighter" }

  //   return (
  //     <div style={cardStyles}>
  //       <h1 style={ti}>Componente</h1>
  //       <p>Tarea realizada con exito</p>
  //     </div>
  //   );
}
