const User = () => {
  return (
    <div className="loan-management">
  <h1>Gestión de Préstamos de Libros</h1>

  
  <div className="loan-form">
    <h2>Registrar Préstamo</h2>
    <form>
      <label htmlFor="book">Seleccionar Libro:</label>
      <select id="book" name="book">
        
      </select>

      <label htmlFor="user">Seleccionar Usuario:</label>
      <select id="user" name="user">
        
      </select>

      <label htmlFor="loan-date">Fecha de Préstamo:</label>
      <input type="date" id="loan-date" name="loan-date" value={new Date().toISOString().split('T')[0]} readOnly />

      <label htmlFor="due-date">Fecha de Vencimiento:</label>
      <input type="date" id="due-date" name="due-date" />

      <button type="submit">Registrar Préstamo</button>
    </form>
  </div>

  
  <div className="return-form">
    <h2>Registrar Devolución</h2>
    <form>
      <label htmlFor="return-book">Seleccionar Libro:</label>
      <select id="return-book" name="return-book">
        
      </select>

      <label htmlFor="return-user">Seleccionar Usuario:</label>
      <select id="return-user" name="return-user">
        
      </select>

      <label htmlFor="return-date">Fecha de Devolución:</label>
      <input type="date" id="return-date" name="return-date" value={new Date().toISOString().split('T')[0]} readOnly />

      <label htmlFor="book-condition">Estado del Libro:</label>
      <select id="book-condition" name="book-condition">
        <option value="good">En Buen Estado</option>
        <option value="damaged">Dañado</option>
      </select>

      <button type="submit">Registrar Devolución</button>
    </form>
  </div>


  <div className="reports">
    <h2>Reportes y Consultas</h2>
    <button>Generar Reporte de Libros Prestados</button>
    <button>Generar Reporte de Libros Vencidos</button>
    <input type="text" placeholder="Buscar Libro por Título, Autor o Género" />
    <input type="text" placeholder="Buscar Usuario por Nombre o ID" />
  </div>
</div>

  )
}

export default User