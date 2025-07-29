import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import BottomNav from "../components/BottomNav";
import Card from "../components/Card";

function Home() {
    const [flayers, setFlayers] = useState([]);
    const [busqueda, setBusqueda] = useState("");

    useEffect(() => {
        axios.get("https://green-goldfish-952011.hostingersite.com/ingenio-backend/flayers/get_all.php")
            .then(res => setFlayers(res.data))
            .catch(err => console.error(err));
    }, []);

    const flayersFiltrados = flayers.filter(flayer =>
        flayer.titulo.toLowerCase().includes(busqueda.toLowerCase())
    );

    return (
        <>
            <Header
                title="Mi espacio"
                mostrarIcono={true}
                mostrarRetorno={false}
                link={""}
                mostrarMenu={true}
            />

            <div className="row">
                <div className="col s1"></div>
                <div className="col s10">
                    <h4 style={{ fontWeight: "bold" }}>Hola, ¿qué novedades hay?</h4>
                </div>
                <div className="col s1"></div>
            </div>

            <div className="row">
                <div className="col s1"></div>
                <div className="col s10">
                    <form className="input-field" onSubmit={e => e.preventDefault()}>
                        <div className="row">
                            <div className="input-field col s9">
                                <input
                                    id="busqueda"
                                    className="validate"
                                    type="text"
                                    value={busqueda}
                                    onChange={(e) => setBusqueda(e.target.value)}
                                />
                                <label htmlFor="busqueda">Buscar:</label>
                            </div>
                            <div className="col s2">
                                <button className="btn green" style={{ marginTop: '1.5rem' }}>
                                    <i className="material-icons">search</i>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col s1"></div>
            </div>

            <div className="row" style={{ marginLeft: '2rem' }}>
                {flayersFiltrados.map(flayer => (
                    <div key={flayer.id} className="col s11 m5">
                        <Card
                            titulo={flayer.titulo}
                            imagen={`https://green-goldfish-952011.hostingersite.com/ingenio-backend/${flayer.imagen}`}
                            slug={flayer.slug}
                        />
                    </div>
                ))}
            </div>

            <br /><br />
            <BottomNav />
        </>
    );
}

export default Home;
