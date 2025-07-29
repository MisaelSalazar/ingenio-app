import { Link } from 'react-router-dom';

function BottomNav() {
    return (
        <div
            className="navbar-fixed green"
            style={{
                position: 'fixed',
                bottom: 0,
                left: 0,
                right: 0,
            }}
        >
            <div className="row" style={{ margin: 0, paddingTop: '0.5rem', paddingBottom: '0.5rem' }}>

                <div className="col s4 center-align">
                    <Link to="/inicio" className="white-text">
                        <i className="material-icons">home</i>
                        <br />
                        <span style={{ fontSize: '0.75rem' }}>Inicio</span>
                   </Link>
                </div>

                <div className="col s4 center-align">
                    <Link className="white-text" to="/guardado">

                        <i className="material-icons">favorite</i>
                        <br />
                        <span style={{ fontSize: '0.80rem' }}>Guardado</span>

                    </Link>
                </div>

                <div className="col s4 center-align">
                    <a href="#" className="white-text">
                        <i className="material-icons">tune</i>
                        <br />
                        <span style={{ fontSize: '0.75rem' }}>Filtros</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default BottomNav;
