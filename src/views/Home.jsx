import Header from "../components/Header";
import BottomNav from "../components/BottomNav";
import Card from "../components/Card";

function Home() {
    return (
        <>
            <Header
                title="Mi espacio"
                mostrarIcono={true}
                mostrarRetorno={false}
                link={""}
                mostrarMenu={true}
            ></Header>
            <div className="row">
                <div className="col s1"></div>
                <div className="col s10">
                    <h4 style={{ fontWeight: "bold" }}>Hola [Name], que novedades hay?</h4>
                </div>
                <div className="col s1"></div>
            </div>

            <div className="row">
                <div className="col s1"></div>
                <div className="col s10">
                    <form action="" className="input-field">
                        <div className="row">
                            <div class="input-field col s9">
                                <input id='numero' className='validate' type="text" />
                                <label for="numero">
                                    Buscar:
                                </label>
                            </div>
                            <div className="col s2">
                                <button class="btn green" type="submit" name="" style={{ marginTop: '1.5rem' }}>
                                    <i class="material-icons">search</i>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col s1"></div>
            </div>

            <div className="row" style={{ marginLeft: '2rem' }}>
                <div className="col s11 m5">
                    <Card></Card>
                </div>
                <div className="col s11 m5">
                    <Card></Card>
                </div>
            </div>
            <br /><br />
            <BottomNav></BottomNav>
        </>
    )
}

export default Home