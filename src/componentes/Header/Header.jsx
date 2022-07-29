import './header.css'

function Header(props) {
    return (
        <>
            <div className="header">
                <div className="header-text">
                    <h1 className="header-title">{props.children}</h1>
                </div>
                <div className="header-img">
                    <img  src={props.image} alt={props.description} />
                </div>
                
            </div>
        </>


    )
}

export default Header


