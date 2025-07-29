import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.jpg';

function Login() {
    const [numero, setNumero] = useState('');
    const [contrasenha, setContrasenha] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        try {
            const response = await fetch('http://192.168.0.17/ingenio-backend/endpoints/login.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    numero_trabajador: numero,
                    contraseña: contrasenha
                })
            });

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem('auth', 'true');
                localStorage.setItem('user_id', data.id);
                localStorage.setItem('nombre', data.nombre);
                navigate('/inicio');
            } else {
                setError(data.error || 'Error de autenticación.');
            }
        } catch (err) {
            setError('Error de conexión con el servidor.');
        }
    };

    return (
        <>
            <div className="row" style={{ marginTop: '6rem' }}>
                <div className="col s3"></div>
                <img src={logo} className='col s6' />
                <div className="col s3"></div>
            </div>

            <center>
                <h4>Iniciar Sesión</h4>
            </center>

            <div className="row">
                <div className="col s1"></div>
                <div className="col s10">
                    <form onSubmit={handleSubmit} className="input-field">
                        <div className="input-field">
                            <i className="material-icons prefix">contact_mail</i>
                            <input
                                id='numero'
                                className='validate'
                                type="text"
                                value={numero}
                                onChange={(e) => setNumero(e.target.value)}
                                required
                            />
                            <label htmlFor="numero">Número del trabajador:</label>
                        </div>

                        <div className="input-field">
                            <i className="material-icons prefix">lock</i>
                            <input
                                id='contrasenha'
                                className='validate'
                                type="password"
                                value={contrasenha}
                                onChange={(e) => setContrasenha(e.target.value)}
                                required
                            />
                            <label htmlFor="contrasenha">Contraseña:</label>
                        </div>

                        {error && <p style={{ color: 'red' }}>{error}</p>}

                        <br />
                        <center>
                            <button type="submit" className='btn green'>Iniciar Sesión</button>
                            <br /><br />
                            {/* <Link to="/inicio">Entrar (sin login)</Link> */}
                        </center>
                    </form>
                </div>
                <div className="col s1"></div>
            </div>
        </>
    );
}

export default Login;
