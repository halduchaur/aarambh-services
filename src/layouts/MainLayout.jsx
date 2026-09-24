import Header from "./Header";
import Footer from "./Footer";
import { useEffect } from "react";
import { useLocation, Outlet } from "react-router-dom";

function MainLayout() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
        });
    }, [pathname]);
    
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}

export default MainLayout;