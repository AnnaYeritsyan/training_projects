import { Outlet } from "react-router-dom";
import Header from "../Header/Header";


const HomeWrapper = () => {
    return (
        <>
             <Header/>
             <Outlet/>
        </>
    );
};
export default HomeWrapper;