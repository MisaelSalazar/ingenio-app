import logo from '../assets/img/logo.jpg';

function Card() {

    return (
        <>
            <div className="card">
                <div className="card-image">
                    <img src={logo} />
                    <a className="btn-floating halfway-fab waves-effect waves-light red">
                        <i class="material-icons">favorite_border</i>
                    </a>
                </div>
                <div className="card-content">
                    <span className="card-title">Card Title</span>
                    {/* <p>I am a very simple card.to use effectively.</p> */}
                </div>
                <div class="card-action">
                    <a href="#">This is a link</a>
                </div>
            </div>
        </>
    )

}
export default Card