import Header from "../components/Header"
import HrLink from "../components/HrLink";

function User() {

    return (
        <>
            <Header
                title="Mi usuario"
                mostrarIcono={false}
                mostrarMenu={false}
                mostrarRetorno={true}
                link={"/inicio"}
            ></Header>
            <br />
            <center>
                <i
                    className="material-icons"
                    style={{ fontSize: '11rem' }}
                >account_circle</i>

                <h4 style={{ fontWeight: "bold" }}>Empleado de prueba</h4>

                <br />
            </center>

            {/* <HrLink
                text="Información Personal"
                icon="face"
                link="/informacion_personal"
            ></HrLink> */}
            <HrLink
                text="Notificaciones"
                icon="notifications"
                link="/notificaciones"
            ></HrLink>
            <HrLink
                text="Guardados"
                icon="favorite"
                link="/guardado"
            ></HrLink>

        </>
    )
}

export default User