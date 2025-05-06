import { useEffect } from 'react';
import M from 'materialize-css';
import { Link } from 'react-router-dom';

function Header({ title, mostrarIcono, mostrarRetorno, link, mostrarMenu }) {
    useEffect(() => {
        M.AutoInit(); // Inicializa los componentes JS como el sidenav
    }, []);

    return (
        <>
            {/* Navbar principal */}
            <nav className="green" style={{xIndex: 1000}}>
                <div className="nav-wrapper" style={{xIndex: 1000}}>

                    {/* Ícono de usuario a la izquierda */}
                    <ul className="left">
                        <li>
                            {mostrarIcono && (
                                <Link to="/usuario">
                                    <i className="material-icons">account_circle</i>
                                </Link>
                            )}
                            {mostrarRetorno && (
                                <Link to={link} >
                                    <i className="material-icons" style={{ fontSize: "3rem" }}>chevron_left</i>
                                </Link>
                            )}
                        </li>
                    </ul>

                    {/* Logo centrado */}
                    <a href="#" className="brand-logo center" style={{ fontWeight: "bold" }}>{title}</a>

                    {/* Botón del menú hamburguesa */}
                    {mostrarMenu && (
                        <a href="#" data-target="menu-lateral" className="sidenav-trigger right" style={{ marginLeft: '10px' }}>
                            <i className="material-icons">menu</i>
                        </a>
                    )}

                </div>
            </nav>

            {/* Menú lateral (sidenav) */}
            <ul className="sidenav" id="menu-lateral" style={{xIndex: 1000}}>
                <br />
                <br />
                <li>
                    <Link to="/inicio">Inicio</Link>
                </li>
                <li>
                    <Link to="/">Cerrar sesión</Link>
                </li>
            </ul>
        </>
    )
}

export default Header