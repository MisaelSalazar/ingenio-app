import {Link} from 'react-router-dom';
import logo from '../assets/img/logo.jpg';

function Login() {
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

                    <form action="" className="input-field">

                        <div class="input-field">
                            <i class="material-icons prefix">contact_mail</i>
                            <input id='numero' className='validate' type="text" />
                            <label for="numero">Número del trabajador:</label>
                        </div>

                        <div className="input-field">
                            <i class="material-icons prefix">lock</i>
                            <input id='contrasenha' className='validate' type="text" />
                            <label for="contrasenha">Contraseña:</label>
                        </div>
                        <br />
                        <center>
                            <button className='btn green'>Iniciar Sesión</button>
                            <br /><br />
                            <Link to="/inicio">Entrar</Link>
                        </center>

                    </form>

                </div>

                <div className="col s1"></div>
            </div>
        </>
    )
}

export default Login