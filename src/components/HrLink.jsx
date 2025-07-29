import { Link } from 'react-router-dom';

function HrLink({ text, icon, link }) {

    return (
        <>
            <div className="row">
                <div className="col s1"></div>
                <div className="col s10">

                    <Link
                        to={link}
                        className="black-text"
                        style={{ fontWeight: "bold" }}
                    >
                        <h5>
                            <div className="row">
                                <div className="col">
                                    <i class="material-icons">{icon}</i>
                                </div>
                                <div className="col">
                                    {text}
                                </div>
                            </div>
                        </h5>
                    </Link>

                </div>
            </div>
        </>
    )

}

export default HrLink