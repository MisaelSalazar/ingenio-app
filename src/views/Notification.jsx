import Header from "../components/Header"
import Notifi from "../components/Notifi"

function Notification() {
    return (
        <>
            <Header
                title={"Notificaciones"}
                mostrarIcono={false}
                mostrarMenu={false}
                mostrarRetorno={true}
                link={"/usuario"}
            ></Header>
            <br />
            <Notifi content={"🎉 Festejo del Día del Trabajador: viernes 16 en el área de eventos."}></Notifi>
            <Notifi content={"🧯 Simulacro de evacuación programado para el jueves 8 de agosto."}></Notifi>
            <Notifi content={"💡 Evita dejar encendido el equipo al finalizar tu turno."}></Notifi>
            {/* <Notifi content={"Esta es una notificacion"}></Notifi> */}
        </>
    )
}

export default Notification