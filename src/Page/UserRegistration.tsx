
export const UserRegistration = () => {
  return (
    <div className="inputsContainer">
      <h1> USUARIOS</h1>
      <form>
        <input type="text" placeholder="Nombre" />
        <input type="text" placeholder="Número de Identificación" />
        <input type="text" placeholder="Dirección" />
        <button type="submit">Agregar Usuario</button>
      </form>
    </div>
  )
}
