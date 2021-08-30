
import { Link } from 'react-router-dom';



const BreadCrumb = ({ title, text }) => {
    return (
        <div class="breadcrumb-pages my-5">
            <div class="title-breadcrumb">
                <p class="h1"> {title}</p>
                <Link class="h6">برگشت به خانه <i class="fas fa-arrow-left"></i></Link>
                <Link class="h5">{text} <i class="fas fa-arrow-down"></i></Link>
            </div>
        </div>
    );
}

export default BreadCrumb;