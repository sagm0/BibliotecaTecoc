import { NavLink } from "react-router-dom"

const Nav = () => {
  return (
    <div>
    <nav className="navBarDiv">
    <img className="tecoc" src="/src/img/tecoc.png" alt="" />
    <NavLink className={({isActive}) => (isActive ? "activado" : "")} to="/admin"> ADMIISTRACIÓN </NavLink>
    <NavLink className={({isActive}) => (isActive ? "activado" : "")} to="/userRegistration"> AGG USUARIOS </NavLink>
    <NavLink className={({isActive}) => (isActive ? "activado" : "")} to="/booksRecords"> AGG LIBROS </NavLink>
    <NavLink className={({isActive}) => (isActive ? "activado" : "")} to="/borrowed"> PRESTADOS </NavLink>
    <NavLink className={({isActive}) => (isActive ? "activado" : "")} to="/records"> REGISTROS </NavLink>
  </nav>
  </div>
  )
}

export default Nav