import { Link, Outlet } from "react-router-dom";

function Nav(){

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to='/home'>Home</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item active">
                    <Link className="nav-link" to='/create'>Create <span className="sr-only">(current)</span></Link>
                </li>
                </ul>
            </div>
        </nav>
         <Outlet/>
        </>
       
    )
}

export default Nav;