
export const BookRecords = () => {
  return (
    <div className="inputsContainer">
    <form>
      <h1>AGG LIBROS</h1>
      <input className="placehoder" type="text" placeholder="ID del Libro" />
      <input className="placehoder" type="text" placeholder="Título" />
      <input className="placehoder" type="text" placeholder="Autor" />
      <input className="placehoder" type="text" placeholder="Género" />
      <select>
        <option value="disponible">Disponible</option>
        <option value="prestado">Prestado</option>
      </select>
      
      <button type="submit">Agregar Libro</button>
    </form>
  </div>
  )
}
