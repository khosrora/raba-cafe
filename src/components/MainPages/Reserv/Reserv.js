
import { Link } from 'react-router-dom';
import Image from './../../../Utils/Image';



const Reserv = () => {
    return (
        <>
            <div className="container my-5">
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <Image className="img-fluid box-shadow" src="./image/jakub-dziubak-XtUd5SiX464-unsplash.jpg" alt="میزت رو رزرو کن" />
                    </div>
                    <div className="col-sm-12 col-md-6 align-self-center">
                        <div className="text-center">
                            <h1 className="title">میزت رو رزرو کن !!!</h1>
                        </div>
                        <div className="">
                            <form className="">
                                <div className="mb-3">
                                    <label for="username" className="form-label">نام کاربری</label>
                                    <input type="" className="form-control" id="username" aria-describedby="emailHelp" />
                                </div>
                                <div className="row">
                                    <div className="mb-3 w-50">
                                        <label for="phone" className="form-label">شماره تماس</label>
                                        <input type="tel" className="form-control" id="phone" aria-describedby="emailHelp" />
                                    </div>
                                    <div className="mb-3 w-50">
                                        <label for="phone" className="form-label">شماره تماس ضروری</label>
                                        <input type="tel" className="form-control" id="phone" aria-describedby="emailHelp" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="mb-3 w-50">
                                        <label for="phone" className="form-label">زمان</label>
                                        <input type="" placeholder="مثال - پنج شنبه - ساعت چهار" className="form-control" id="phone"
                                            aria-describedby="emailHelp" />
                                    </div>
                                    <div className="mb-3 w-50">
                                        <label for="many" className="form-label">تعداد رزرو</label>
                                        <select id="disabledSelect" className="form-select">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>+4</option>
                                        </select>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-dark w-25"><i className="fas fa-envelope-open"></i> رزرو
                                    میز</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-5">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-9">
                        <div className="container bg-light  rounded align-self-center p-4 ">
                            <p className="h4 title">ما را بهتر بشناسید </p>
                            <p className="x">
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                                چاپگرها
                                و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                                ...
                            </p>
                            <Link className="btn btn-dark text-white" to="/aboutus"><i className="fas fa-users"></i> درباره ما </Link>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-3">
                        <Image className="img-fluid box-shadow" src="./image/drew-coffman-jUOaONoXJQk-unsplash.jpg" alt="ما را بهتر بشناسید" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Reserv;