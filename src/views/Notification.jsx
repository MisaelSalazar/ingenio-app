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
            <Notifi content={"Esta es una notificacion"}></Notifi>
            <Notifi content={"Esta es una notificacion"}></Notifi>
            <Notifi content={"Esta es una notificacion"}></Notifi>
            <Notifi content={"Esta es una notificacion"}></Notifi>
        </>
    )
}

export default Notification