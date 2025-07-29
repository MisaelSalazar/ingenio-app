import { Link } from "react-router-dom";

function Card({ titulo, imagen, slug }) {
    return (
        <div className="card">
            <div className="card-image">
                <img src={imagen} alt={titulo} />
                <a className="btn-floating halfway-fab waves-effect waves-light red">
                    <i className="material-icons">favorite</i>
                </a>
            </div>
            <div className="card-content">
                <span className="card-title">
                    <Link to={`/flayer/${slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                        {titulo}
                    </Link>
                </span>
            </div>
        </div>
    );
}

export default Card;
