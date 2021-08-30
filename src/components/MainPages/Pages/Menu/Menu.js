import BreadCrumb from "../../BreadCrumb/BreadCrumb";
import Image from './../../../../Utils/Image';




const Menu = () => {
    return (
        <>
            <BreadCrumb title="منو کافه رابا" text="بهترین ها را برای شما آماده کرده ایم" />
            <div class="container my-5">
                <div class="row">
                    <div class="col-xs-12 col-sm-6 ">
                        <select class="form-select" aria-label="Default select example">
                            <option selected>عنوان منو</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div class="col-xs-12 col-sm-6 ">
                        <select class="form-select" aria-label="Default select example">
                            <option selected>مرتب سازس</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                </div>
            </div>

            <div class="container my-5">
                <div class=" row">
                    <div class="col-xs-12 col-md-6 col-lg-4 ">
                        <div class="border rounded p-2">
                            <div class="text-center my-3">
                                <Image class=" rounded-circle" width="150" height="150"
                                    src="./image/images.jfif" alt="" />
                            </div>
                            <br />
                            <div class="text-center">
                                <p class="h3">قهوه ترک</p>
                                <p>
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                                </p>
                                <button class="btn btn-dark text-white">مشاهده</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Menu;