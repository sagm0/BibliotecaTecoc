
export const BookRecords = () => {
  return (
    <div className="inputsContainer">
    <form>
      <h1>AGG LIBROS</h1><br />
      <input className="placehoder" type="text" placeholder="ID del Libro" /><br />
      <input className="placehoder" type="text" placeholder="Título" /><br />
      <input className="placehoder" type="text" placeholder="Autor" /><br />
      <input className="placehoder" type="text" placeholder="Género" /><br />
      <select>
        <option value="disponible">Disponible</option>
        <option value="prestado">Prestado</option>
      </select>
      
      <button type="submit">Agregar Libro</button>
    </form>
  </div>
  )
}
