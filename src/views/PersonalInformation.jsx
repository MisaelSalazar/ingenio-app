import Header from "../components/Header"

function PersonalInformation() {
    return (
        <>
            <Header
                title={"Información"}
                mostrarIcono={false}
                mostrarRetorno={true}
                link={"/usuario"}
                mostrarMenu={false}
            ></Header>

            <div className="row">
                <div className="col s1"></div>
                <div className="col s10">
                    <h5 style={{ fontWeight: "bold" }}>Nombre completo:</h5>
                    <h6>Empleado de prueba</h6>
                </div>
            </div>
            <div className="row">
                <div className="col s1"></div>
                <div className="col s10">
                    <h5 style={{ fontWeight: "bold" }}>Número del trabajador:</h5>
                    <h6>152034</h6>
                </div>
            </div>
            <div className="row">
                <div className="col s1"></div>
                <div className="col s10">
                    <h5 style={{ fontWeight: "bold" }}>Puesto:</h5>
                    <h6>Operador de Molino</h6>
                </div>
            </div>
            <div className="row">
                <div className="col s1"></div>
                <div className="col s10">
                    <h5 style={{ fontWeight: "bold" }}>Area:</h5>
                    <h6>Producción</h6>
                </div>
            </div>
        </>
    )
}

export default PersonalInformation