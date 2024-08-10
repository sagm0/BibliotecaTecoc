
export const UserRegistration = () => {
  return (
    <div className="inputsContainer">
      <h1> AGREGAR USUARIO</h1>
      <form>
      <input type="text" placeholder="Id" /><br />
        <input type="text" placeholder="Nombre" /><br />
        <input type="text" placeholder="Apellido" /><br />
        <input type="text" placeholder="Edad" /><br />
        <input type="text" placeholder="Programa" /><br />
        <input type="text" placeholder="Correo" /><br />
        <button type="submit">Agregar Usuario</button>
      </form>
    </div>
  )
}
