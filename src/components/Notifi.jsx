function Notifi({content}) {
    return (
        <>
            <div className="row">
                <div className="col s12">
                    <div className="card-panel teal">
                        <button
                            style={{
                                background: "none",
                                float: "right",
                                border: "none",
                            }}
                        >
                            <i className="material-icons right white-text">close</i>
                        </button>
                        <span className="white-text" style={{fontSize: "large"}}>
                            {content}
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Notifi