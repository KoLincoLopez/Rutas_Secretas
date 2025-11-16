import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Login';

function Login() {
    const navigate = useNavigate();
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [loginMessage, setLoginMessage] = useState('');

    const correoRegex = /^[\w.-]+@(duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/i;

    const handleSubmit = (e) => {
        e.preventDefault();
        
        let isValid = true;
        setEmailError('');
        setPasswordError('');
        setLoginMessage('');

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

        if (!password.trim()) {
            setPasswordError('Ingrese su contraseña');
            isValid = false;
        } else if (password.length < 4 || password.length > 10) {
            setPasswordError('La contraseña debe tener entre 4 y 10 caracteres');
            isValid = false;
        }

        if (!isValid) return;

        const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
        const usuario = usuarios.find(u => u.email === email && u.password === password);

        if (usuario) {
            setLoginMessage('Inicio de sesión exitoso. Redirigiendo...');
            setTimeout(() => {
                navigate('/'); 
            }, 1000);
        } else {
            setLoginMessage('Credenciales incorrectas.');
        }
    };

    return (
        <main className="d-flex justify-content-center align-items-center min-vh-100">
            <section className="user-box">
                <h2 className="text-center mb-4"> Iniciar Sesión </h2>
                <form id="loginForm" onSubmit={handleSubmit}>

                    <div className="mb-3">
                        <label htmlFor="emailInput" className="form-label">Correo electrónico</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            id="emailInput" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {emailError && <div className="text-danger small">{emailError}</div>}
                    </div>
                    
                    <div className="mb-3">
                        <label htmlFor="passwordInput" className="form-label">Contraseña</label>
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
