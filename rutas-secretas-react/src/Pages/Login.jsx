// src/pages/Login.jsx

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    
    // 1. Estados para los campos del formulario
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    // 2. Estados para los errores de validación (de Validation.js)
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [loginMessage, setLoginMessage] = useState('');

    const correoRegex = /^[w.-]+@(duoc.cl|profesor.duoc.cl|gmail.com)$/i;

    // 3. Función de Manejo del Submit (la lógica de Validation.js)
    const handleSubmit = (e) => {
        e.preventDefault();
        
        let isValid = true;
        // Limpiar errores previos
        setEmailError('');
        setPasswordError('');
        setLoginMessage('');

        // Validar Email (Lógica de Validation.js)
        if (!email.trim()) {
            setEmailError('Ingrese su correo electrónico');
            isValid = false;
        } else if (email.length > 100) {
            setEmailError('El correo no puede exceder 100 caracteres');
            isValid = false;
        } else if (!correoRegex.test(email.trim())) {
            setEmailError('Ingrese un correo válido (@duoc.cl, @profesor.duoc.cl, @gmail.com)');
            isValid = false;
        }

        // Validar Contraseña (Lógica de Validation.js)
        if (!password.trim()) {
            setPasswordError('Ingrese su contraseña');
            isValid = false;
        } else if (password.length < 4 || password.length > 10) {
            setPasswordError('La contraseña debe tener entre 4 y 10 caracteres');
            isValid = false;
        }

        if (!isValid) return;

        // SIMULACIÓN DE INICIO DE SESIÓN (Deberías reemplazar con tu backend real)
        const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
        const usuario = usuarios.find(u => u.email === email && u.password === password);

        if (usuario) {
            setLoginMessage('Inicio de sesión exitoso. Redirigiendo...');
            // Simular login y redirigir
            setTimeout(() => {
                navigate('/'); // Redirige al inicio (Index.html)
            }, 1000);
        } else {
            setLoginMessage('Credenciales incorrectas.');
        }
    };

    return (
        <main className="d-flex justify-content-center align-items-center min-vh-100">
            <section className="user-box">
                <h2 className="text-center mb-4"> Iniciar Sesión </h2>
                {/* 4. Asignar la función handleSubmit al evento onSubmit */}
                <form id="loginForm" onSubmit={handleSubmit}>

                    <div className="mb-3">
                        <label htmlFor="emailInput" className="form-label">Correo electrónico</label>
                        {/* 5. Conectar el input con el estado mediante value y onChange */}
                        <input 
                            type="email" 
                            className="form-control" 
                            id="emailInput" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {/* 6. Mostrar el error condicionalmente */}
                        {emailError && <div className="text-danger small">{emailError}</div>}
                    </div>
                    
                    <div className="mb-3">
                        <label htmlFor="passwordInput" className="form-label">Contraseña</label>
                        {/* 7. Controlar el tipo de input con el estado showPassword */}
                        <input 
                            type={showPassword ? 'text' : 'password'} 
                            className="form-control" 
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
                            onChange={(e) => setShowPassword(e.target.checked)}
                        />
                        <label className="form-check-label" htmlFor="showPassword">Ver contraseña</label>
                    </div>

                    <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
                    <br /><br />
                    {loginMessage && <div className="login-msg mt-3 text-center">{loginMessage}</div>}
                    <nav>
                        <Link to="/registro">¿No tienes una cuenta? Regístrate</Link>
                    </nav>
                </form>
            </section>
        </main>
    );
}

export default Login;