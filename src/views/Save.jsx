import BottomNav from "../components/BottomNav"
import Card from "../components/Card"
import Header from "../components/Header"

function Save() {
    return (
        <>
            <Header
                title="Guardado"
                mostrarIcono={true}
                mostrarMenu={true}
                mostrarRetorno={false}
                link={""}
            ></Header>

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
                    <h6>Usted ha guardado [numero] entradas</h6>
                </div>
            </div>

            <div className="row">
                <div className="col s1 m1"></div>
                <div className="col s5 m5">
                    <Card></Card>
                </div>
                <div className="col s5 m5">
                    <Card></Card>
                </div>
            </div>
            <div className="row">
                <div className="col s1 m1"></div>
                <div className="col s5 m5">
                    <Card></Card>
                </div>
                <div className="col s5 m5">
                    <Card></Card>
                </div>
            </div>
            <BottomNav></BottomNav>
        </>
    )
}

export default Save