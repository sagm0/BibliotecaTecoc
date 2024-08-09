
import { useState } from "react";
import { Navigate } from "react-router-dom";

const Admin = () => {
  const [redirectTo, setRedirectTo] = useState<string | null>(null);

const logoutHandler = () => {
    localStorage.removeItem('isAuthenticated');
    setRedirectTo('/');
}

if (redirectTo) {
    return <Navigate to={redirectTo} />
}



  const isAuthenticated = localStorage.getItem("isAuthenticated");

if(isAuthenticated !== 'true') {
  return <Navigate to='/'/>
} 



  return (
    <div className="Admin">
      <h1>¡Bienvenido al sistema de gestión de la biblioteca del Tecoc!</h1>
      <h2>Como administrador, tienes el control total para garantizar el funcionamiento óptimo de la biblioteca. <br /> Aquí tienes un resumen de tus responsabilidades y las potentes herramientas a tu disposición:</h2>
      <h3>Gestión de Libros</h3>
      <h3>Gestión de Préstamos</h3>
      <h3>Gestión de Usuarios</h3>
      <h3>Reportes y Consultas</h3>
      <h3>Seguridad y Accesibilidad</h3>
      <button onClick={logoutHandler}> Logaut</button>
    </div>
  )
}

export default Admin