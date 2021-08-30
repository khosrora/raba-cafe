
import { Link } from 'react-router-dom';
import Image from './../../Utils/Image';



const Navbar = () => {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg " dir="ltr">
                <div className="container-fluid">
                    <span className="d-none d-md-block">
                        <Image src="./image/logo.png" alt="وب سایت رابا کافه" width="50" height="50" />
                    </span>
                    <p className="h1 compat">raba <span className="edo">coffe</span></p>
                    <span className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"><i className="fas fa-bars"></i></span>
                    </span>
                    <div className="collapse navbar-collapse " id="navbarNav">
                        <ul className="navbar-nav me-auto" dir="rtl">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/">خانه</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/menu">منو</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/reserv">رزرو میز </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;