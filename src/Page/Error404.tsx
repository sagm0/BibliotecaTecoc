import React from 'react';
import { useNavigate } from 'react-router-dom';

const Error404: React.FC = () => {
  const navigate = useNavigate();

  const handleAdminRedirect = () => {
    navigate('/admin');
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Error 404</h1>
      <p style={styles.message}>Página NO Encontrada</p>
      <button onClick={handleAdminRedirect} style={styles.button}>
        Ir a la página de inicio
      </button>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
    backgroundColor: '#f8f9fa',
    color: '#333',
  },
  header: {
    fontSize: '3rem',
    margin: '0',
  },
  message: {
    fontSize: '1.5rem',
    margin: '1rem 0',
  },
  button: {
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    color: '#fff',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default Error404;
