import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import '../styles/Login.css'; 
import '../styles/Global.css'; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateForm = () => {
    let isValid = true;
    setEmailError('');
    setPasswordError('');

    if (!email) {
      setEmailError('El correo electrónico es obligatorio.');
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('El correo electrónico no es válido.');
      isValid = false;
    }

    if (!password) {
      setPasswordError('La contraseña es obligatoria.');
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError('La contraseña debe tener al menos 6 caracteres.');
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Aquí iría la lógica de autenticación real
      console.log('Login exitoso con:', { email, password });
      alert('Inicio de sesión exitoso!');
      // Redirigir al usuario, por ejemplo: navigate('/');
    }
  };

  return (
    <>
      <Navbar />
      <body className="login-page"> 
        <main className="d-flex justify-content-center align-items-center min-vh-100">
          <section className="user-box">
            <h2 className="text-center mb-4"> Iniciar Sesión </h2>
            <form id="loginForm" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="emailInput" className="form-label"> Correo Electrónico</label>
                <input
                  type="email"
                  className={`form-control ${emailError ? 'is-invalid' : ''}`}
                  id="emailInput"
                  aria-describedby="emailHelp"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {emailError && <div className="text-danger small">{emailError}</div>}
                <div id="emailHelp" className="form-text">Nunca compartiremos tu correo electrónico con nadie más.</div>
              </div>
              <div className="mb-3">
                <label htmlFor="passwordInput" className="form-label">Contraseña</label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  className={`form-control ${passwordError ? 'is-invalid' : ''}`}
                  id="passwordInput"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {passwordError && <div className="text-danger small">{passwordError}</div>}
              </div>

              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="showPassword"
                  checked={showPassword}
                  onChange={() => setShowPassword(!showPassword)}
                />
                <label className="form-check-label" htmlFor="showPassword">Ver contraseña</label>
              </div>

              <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
              <br /><br />
              <nav>
                <Link to="/registro">¿No tienes una cuenta? Regístrate </Link>
              </nav>
            </form>
          </section>
        </main>
      </body>
      <Footer />
    </>
  );
};

export default Login;