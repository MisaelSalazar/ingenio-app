import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import BottomNav from "../components/BottomNav";
import Card from "../components/Card";

function Save() {
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
                    <h4
                        style={{ fontWeight: "bold" }}
                    >Mis guardados</h4>
                </div>
            </div>

            <div className="row">
                <div className="col s1"></div>
                <div className="col s10">
                    <h6>Usted ha guardado las siguientes entradas:</h6>
                </div>
            </div>

            <div className="row" style={{ marginLeft: '2rem' }}>
                {flayersFiltrados.map(flayer => (
                    <div key={flayer.id} className="col s5 m5">
                        <Card
                            //titulo={flayer.titulo}
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

export default Save;
