import { Switch, Route } from "react-router-dom"

// !PAGES
import MainLayout from "../components/Layout/MainLayout";
import HomePage from '../components/MainPages/HomePage';
import AboutUs from './../components/MainPages/Pages/AboutUs/AboutUs';
import Reservation from './../components/MainPages/Pages/Reservation/Reservation';
import Menu from './../components/MainPages/Pages/Menu/Menu';



const cafe = () => {
    return (
        <Switch>
            <MainLayout>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/aboutus" component={AboutUs} />
                <Route exact path="/reserv" component={Reservation} />
                <Route exact path="/menu" component={Menu} />
            </MainLayout>
        </Switch>
    );
}

export default cafe;