
import { Link } from 'react-router-dom';
import Image from './../../../Utils/Image';



const Header = () => {
    return (
        <div className="container mt-lg-5 mb-5">
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-6 ">
                    <Image className="img-fluid text-start box-shadow"
                        src="./image/muhamad-lucky-ramadhan-8O5Q-wPpJ_c-unsplash.jpg" alt="صفحه اول وب سایت کافه رابا" width="700"
                        height="700" />
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6 align-self-center">
                    <p className="h1 title">کافه و رستوران رابا</p>
                    <p>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها
                        و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی
                        و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی
                        و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی
                        و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی
                    </p>
                    <Link className="btn btn-dark text-white mx-1"><i className="fas fa-list-ul"></i> مشاهده منو </Link>
                    <Link className="btn btn-dark text-white mx-1"><i className="fas fa-chair"></i> رزرو میز </Link>
                </div>
            </div>
        </div>
    );
}

export default Header;