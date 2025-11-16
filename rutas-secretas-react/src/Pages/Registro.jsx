import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../styles/Registro'; 


function Registro() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        nombres: '',
        apellidoPaterno: '', 
        apellidoMaterno: '', 
        comuna: '',          
        direccion: '',       
        email: '',
        password: '',
        confirmar: '',
    });

    const [errors, setErrors] = useState({
        nombres: '',
        apellidoPaterno: '',
        apellidoMaterno: '',
        comuna: '',
        direccion: '',
        email: '',
        password: '',
        confirmar: '',
    });

    const [showPassword, setShowPassword] = useState(false);

    const [showSuccessToast, setShowSuccessToast] = useState(false);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [id]: value
        }));
        setErrors(prevErrors => ({
            ...prevErrors,
            [id]: ''
        }));
    };

    const handleShowPasswordToggle = () => {
        setShowPassword(prevShow => !prevShow);
    };

    const validarEmail = (email) => {
        if (!email) return false;
        if (email.length > 100) return false;
        const re = /^[^\s@]+@(duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/i;
        return re.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault(); 

        let newErrors = { ...errors }; 
        let isValid = true; 


        if (!formData.nombres.trim()) {
            newErrors.nombres = 'Los nombres son obligatorios.';
            isValid = true;
        }

        if (!formData.apellidoPaterno.trim()) {
            newErrors.apellidoPaterno = 'El apellido paterno es obligatorio.';
            isValid = false;
        }

        if (!formData.apellidoMaterno.trim()) {
            newErrors.apellidoMaterno = 'El apellido materno es obligatorio.';
            isValid = false;
        }
        if (!formData.comuna.trim()) {
            newErrors.comuna = 'La comuna es obligatoria.';
            isValid = false;
        }
        if (!formData.direccion.trim()) {
            newErrors.direccion = 'La dirección es obligatoria.';
            isValid = false;
        }

        if (!validarEmail(formData.email)) {
            newErrors.email = 'Correo inválido. Debe ser @duoc.cl, @profesor.duoc.cl o @gmail.com y máximo 100 caracteres.';
            isValid = false;
        } else {
            const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
            const existe = usuarios.some(u => u.email && u.email.toLowerCase() === formData.email.toLowerCase());
            if (existe) {
                newErrors.email = 'El correo ya está registrado.';
                isValid = false;
            }
        }

        if (formData.password.length < 4 || formData.password.length > 10) {
            newErrors.password = 'La contraseña debe tener entre 4 y 10 caracteres.';
            isValid = false;
        }

        if (formData.password !== formData.confirmar) {
            newErrors.confirmar = 'Las contraseñas no coinciden.';
            isValid = false;
        }

        setErrors(newErrors); 

        if (isValid) {
            const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
            const nuevoUsuario = {
                nombres: formData.nombres,
                apellidoPaterno: formData.apellidoPaterno,
                apellidoMaterno: formData.apellidoMaterno,
                comuna: formData.comuna,
                direccion: formData.direccion,
                email: formData.email,
                password: formData.password, 
                creadoEn: new Date().toISOString()
            };

            usuarios.push(nuevoUsuario);
            localStorage.setItem('usuarios', JSON.stringify(usuarios));

            setShowSuccessToast(true);
            setTimeout(() => {
                setShowSuccessToast(false);
                navigate('/login'); 
            }, 2500);

            setFormData({
                nombres: '',
                apellidoPaterno: '',
                apellidoMaterno: '',
                comuna: '',
                direccion: '',
                email: '',
                password: '',
                confirmar: '',
            });
        }
    };

    return (
        <main className="d-flex justify-content-center align-items-center min-vh-100">
            <section className="registro-box">
                <h2 className="text-center mb-4">Registrarse</h2>
                <form onSubmit={handleSubmit} className="row g-3" noValidate>
                    {/* Nombres */}
                    <div className="col-md-6">
                        <label htmlFor="nombres" className="form-label">Nombres</label>
                        <input 
                            type="text" 
                            className={`form-control ${errors.nombres ? 'is-invalid' : ''}`} 
                            id="nombres" 
                            placeholder="Tus Nombres" 
                            value={formData.nombres}
                            onChange={handleChange}
                        />
                        {errors.nombres && <div className="invalid-feedback">{errors.nombres}</div>}
                    </div>
                    {/* Apellido Paterno */}
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
                    {/* Apellido Materno */}
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
                            placeholder="ejemplo@gmail.com" 
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                        <div id="emailHelp" className="form-text">Nunca compartiremos tu correo electrónico con nadie más.</div>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="password" className="form-label">Contraseña</label>
                        <input 
                            type={showPassword ? "text" : "password"} 
                            className={`form-control ${errors.password ? 'is-invalid' : ''}`} 
                            id="password" 
                            placeholder="Crea una contraseña" 
                            value={formData.password}
                            onChange={handleChange}
                        />
                        {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="confirmar" className="form-label">Confirmar Contraseña</label>
                        <input 
                            type={showPassword ? "text" : "password"} 
                            className={`form-control ${errors.confirmar ? 'is-invalid' : ''}`} 
                            id="confirmar" 
                            placeholder="Repite la contraseña" 
                            value={formData.confirmar}
                            onChange={handleChange}
                        />
                        {errors.confirmar && <div className="invalid-feedback">{errors.confirmar}</div>}
                    </div>
                    <div className="col-md-12 form-check">
                        <input 
                            type="checkbox" 
                            className="form-check-input" 
                            id="showPasswordRegistro" 
                            checked={showPassword}
                            onChange={handleShowPasswordToggle}
                        />
                        <label className="form-check-label" htmlFor="showPasswordRegistro">Ver contraseña</label>
                    </div>

                    <div className="col-12">
                        <button type="submit" className="btn btn-primary w-100">Registrarse</button>
                    </div>
                </form>
            </section>
            
            {showSuccessToast && (
                <div id="successToast" className="toast-success show">
                    Registro exitoso. Redirigiendo al login...
                </div>
            )}
        </main>
    );
}

export default Registro;