
import { Link } from 'react-router-dom';



const Footer = () => {
    return (
        <footer>
            <div className="footer-dark" dir="rtl">
                <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 col-md-3 item">
                                <h3 className="title">پست الکترونیک</h3>
                                <ul>
                                    <li><Link href="#">khosrora153333@gmail.com</Link></li>
                                    <li><Link href="#">hamid@gmail.com</Link></li>
                                </ul>
                            </div>
                            <div className="col-sm-6 col-md-3 item">

                                <h3 className="title">شماره های تماس </h3>
                                <ul>
                                    <li><Link href="#">09332839823</Link></li>
                                    <li><Link href="#">09332839823</Link></li>
                                </ul>
                            </div>
                            <div className="col-md-6 item text">
                                <h3 className="title">آدرس</h3>
                                <p>
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک
                                    است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط
                                </p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </footer>
    );
}

export default Footer;