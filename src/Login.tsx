import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { usuarios } from './UserInterface';

const Login = () => {
  const [userName, setUserName] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [userExists, setUserExists] = useState<boolean>(false);
  const emailRegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const [redirecto, setRedirecto] = useState<string | null>(null);
  
  useEffect(() => {
    const usuarioEncontrado = usuarios.some(user => user.correo === userName);
    setUserExists(usuarioEncontrado);
}, [userName]);

  useEffect(() => {
  const isAuthenticated = localStorage.getItem('isAuthenticated');
  if (isAuthenticated === 'true') {
      setRedirecto('/admin');
  }
}, []);

const loginHandler = () => {
  // Verificar si el correo es válido 
  if (emailRegExp.test(userName) && userExists) {
    if (userName.includes('tecoc.edu')) {
      console.log("Acceso permitido");
      localStorage.setItem('isAuthenticated', 'true');
      setRedirecto('/admin');
    } else {
      setErrorMessage("Dominio de correo no válido.");
    }
  } else {
    setErrorMessage("Correo no válido");
  }
};
  if(redirecto){
    return <Navigate to ={redirecto} />
  }

  const handlerClear = () => {
    setUserName(""); 
  }

  return (
    <div className='usuarios'>
      <img className="tecoc" src="/src/img/tecoc.png" alt="" />
      <h1>Login</h1>
      <h3>USUARIOS</h3>
      <input type="text" name="u" placeholder="Email" value={userName}
        onChange={(event) => {
          setUserName(event.target.value);
          setErrorMessage(""); // Limpiar el mensaje de error al cambiar el texto
        }}
      />
      <br />
      {errorMessage && <h3 style={{ color: 'red' }}>{errorMessage}</h3>}
      <button onClick={handlerClear} type='button'>Clear</button>
      <button type="button" onClick={loginHandler}>Login</button>
    </div>
  )
}

export default Login;