
export const BookRecords = () => {
  return (
    <div className="inputsContainer">
    <form>
      <h1>AGREGAR LIBRO</h1><br />
      <input className="placehoder" type="text" placeholder="ID del Libro" /><br />
      <input className="placehoder" type="text" placeholder="Título" /><br />
      <input className="placehoder" type="text" placeholder="Autor" /><br />
      <input className="placehoder" type="text" placeholder="Género" /><br />
      <select>
        <option value="disponible">Disponible</option>
        <option value="prestado">Prestado</option>
        <option value="prestado">Reservado</option>
      </select>
      
      <button type="submit">Agregar Libro</button>
    </form>
  </div>
  )
}
