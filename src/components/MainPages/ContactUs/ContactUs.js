



const ContactUs = () => {
    return (
        <div class="container-fluid contactUs my-5 p-5">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 col-md-6 form-contactUs">
                        <form>
                            <div class="mb-3">
                                <label for="username" class="form-label">نام کاربری</label>
                                <input type="" class="form-control" id="username" aria-describedby="emailHelp" />
                            </div>
                            <div class="mb-3">
                                <label for="messge" class="form-label">متن پیام شما</label>
                                <textarea type="" class="form-control" id="messge"></textarea>
                            </div>
                            <button type="submit" class="btn btn-dark"> <i class="fas fa-envelope-open"></i> ارسال
                                پیام</button>
                        </form>
                    </div>
                    <div class="col-sm-12 col-md-6 align-self-center">
                        <p class="h3 text-white title">با ما در ارتباط باشید </p>
                        <p class="text-white">
                            داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل
                            حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار
                            گیرد.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;