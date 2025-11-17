import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import '../styles/Registro.css'; 
import '../styles/Global.css'; 

const Registro = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nombres: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    comuna: '',
    direccion: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.nombres) newErrors.nombres = 'Los nombres son obligatorios.';
    if (!formData.apellidoPaterno) newErrors.apellidoPaterno = 'El apellido paterno es obligatorio.';
    if (!formData.apellidoMaterno) newErrors.apellidoMaterno = 'El apellido materno es obligatorio.';
    if (!formData.comuna) newErrors.comuna = 'La comuna es obligatoria.';
    if (!formData.direccion) newErrors.direccion = 'La dirección es obligatoria.';

    if (!formData.email) {
      newErrors.email = 'El correo electrónico es obligatorio.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'El correo electrónico no es válido.';
    }

    if (!formData.password) {
      newErrors.password = 'La contraseña es obligatoria.';
    } else if (formData.password.length < 6) {
      newErrors.password = 'La contraseña debe tener al menos 6 caracteres.';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Debes confirmar la contraseña.';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Las contraseñas no coinciden.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Formulario de registro enviado:', formData);
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
        navigate('/login'); 
      }, 2000);
    }
  };

  return (
    <>
      <Navbar />
      <body className="body"> 
        <main className="d-flex justify-content-center align-items-center min-vh-100">
          <section className="registro-box">
            <h2 className="text-center mb-4">Registrarse</h2>
            <form id="registroForm" className="row g-3" noValidate onSubmit={handleSubmit}>
              <div className="col-md-6">
                <label htmlFor="nombres" className="form-label">Nombres</label>
                <input
                  type="text"
                  className={`form-control ${errors.nombres ? 'is-invalid' : ''}`}
                  id="nombres"
                  placeholder="Tu nombre"
                  value={formData.nombres}
                  onChange={handleChange}
                />
                {errors.nombres && <div className="invalid-feedback">{errors.nombres}</div>}
              </div>
              <div className="col-md-6">
                <label htmlFor="apellidoPaterno" className="form-label">Apellido Paterno</label>
                <input
                  type="text"
                  className={`form-control ${errors.apellidoPaterno ? 'is-invalid' : ''}`}
                  id="apellidoPaterno"
                  placeholder="Apellido paterno"
                  value={formData.apellidoPaterno}
                  onChange={handleChange}
                />
                {errors.apellidoPaterno && <div className="invalid-feedback">{errors.apellidoPaterno}</div>}
              </div>
              <div className="col-md-6">
                <label htmlFor="apellidoMaterno" className="form-label">Apellido Materno</label>
                <input
                  type="text"
                  className={`form-control ${errors.apellidoMaterno ? 'is-invalid' : ''}`}
                  id="apellidoMaterno"
                  placeholder="Apellido materno"
                  value={formData.apellidoMaterno}
                  onChange={handleChange}
                />
                {errors.apellidoMaterno && <div className="invalid-feedback">{errors.apellidoMaterno}</div>}
              </div>
              <div className="col-md-6">
                <label htmlFor="comuna" className="form-label">Comuna</label>
                <input
                  type="text"
                  className={`form-control ${errors.comuna ? 'is-invalid' : ''}`}
                  id="comuna"
                  placeholder="Comuna"
                  value={formData.comuna}
                  onChange={handleChange}
                />
                {errors.comuna && <div className="invalid-feedback">{errors.comuna}</div>}
              </div>
              <div className="col-md-12">
                <label htmlFor="direccion" className="form-label">Dirección</label>
                <input
                  type="text"
                  className={`form-control ${errors.direccion ? 'is-invalid' : ''}`}
                  id="direccion"
                  placeholder="Dirección"
                  value={formData.direccion}
                  onChange={handleChange}
                />
                {errors.direccion && <div className="invalid-feedback">{errors.direccion}</div>}
              </div>
              <div className="col-md-12">
                <label htmlFor="email" className="form-label">Correo Electrónico</label>
                <input
                  type="email"
                  className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                  id="email"
                  aria-describedby="emailHelp"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <div className="invalid-feedback mt-1">{errors.email}</div>}
                <div id="emailHelp" className="form-text">Nunca compartiremos tu correo electrónico con nadie más.</div>
              </div>
              <div className="col-md-6">
                <label htmlFor="password" className="form-label">Contraseña</label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                  id="password"
                  placeholder="Crea una contraseña"
                  value={formData.password}
                  onChange={handleChange}
                />
                {errors.password && <div className="invalid-feedback mt-1">{errors.password}</div>}
              </div>
              <div className="col-md-6">
                <label htmlFor="confirmPassword" className="form-label">Confirmar Contraseña</label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
                  id="confirmPassword"
                  placeholder="Repite la contraseña"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
                {errors.confirmPassword && <div className="invalid-feedback mt-1">{errors.confirmPassword}</div>}
              </div>
              <div className="col-md-12 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="showPasswordRegistro"
                  checked={showPassword}
                  onChange={() => setShowPassword(!showPassword)}
                />
                <label className="form-check-label" htmlFor="showPasswordRegistro">Ver contraseña</label>
              </div>

              <div className="col-12">
                <button type="submit" className="btn btn-primary w-100">Registrarse</button>
              </div>
            </form>
          </section>
        </main>
      </body>
      <div id="successToast" className={`toast-success ${showToast ? 'show' : ''}`}>
        Registro exitoso. Redirigiendo al login...
      </div>
      <br /><br /><br /><br />
    </>
  );
};

export default Registro;