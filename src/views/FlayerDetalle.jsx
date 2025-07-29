import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";

function convertirEnlaceYouTube(url) {
    try {
        if (!url) return null;
        let videoId;

        if (url.includes("youtu.be/")) {
            // Caso: https://youtu.be/ID
            videoId = url.split("youtu.be/")[1].split("?")[0];
        } else if (url.includes("youtube.com/watch")) {
            const urlObj = new URL(url);
            videoId = urlObj.searchParams.get("v");
        }

        return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
    } catch (e) {
        return null;
    }
}


function FlayerDetalle() {
    const { slug } = useParams();
    const [flayer, setFlayer] = useState(null);

    useEffect(() => {
        axios.get("https://green-goldfish-952011.hostingersite.com/ingenio-backend/flayers/get_all.php")
            .then(res => {
                const encontrado = res.data.find(item => item.slug === slug);
                setFlayer(encontrado || null);
            })
            .catch(err => console.error(err));
    }, [slug]);

    if (!flayer) return <p className="center">Cargando o flayer no encontrado...</p>;

    return (
        <>
            <Header
                title="Flayer"
                mostrarIcono={false}
                mostrarRetorno={true}
                link="/"
                mostrarMenu={false}
            />

            <div className="container">
                <h4 className="center">{flayer.titulo}</h4>

                <img
                    src={`https://green-goldfish-952011.hostingersite.com/ingenio-backend/${flayer.imagen}`}
                    alt={flayer.titulo}
                    style={{width: '100%'}}
                    className="center"
                />

                <br />
                {flayer.video && convertirEnlaceYouTube(flayer.video) && (
                    <div className="video-container">
                        <iframe
                            width="100%"
                            height="315"
                            src={convertirEnlaceYouTube(flayer.video)}
                            title="Video relacionado"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                )}

                <div>
                    <div dangerouslySetInnerHTML={{ __html: flayer.contenido }} />
                    <br /><br />
                </div>
            </div>

        </>
    );
}

export default FlayerDetalle;
