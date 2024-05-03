import {Flex} from "@mantine/core";
import {Outlet} from "react-router-dom";
import Banner from "../components/Layout/Banner.jsx";
import Header from "../components/Layout/Header.jsx";
import Footer from "../components/Layout/Footer.jsx";


function Layout() {
    return (
        <Flex h="100vh" direction="column">
            <Banner/>
            <Header/>

            <div style={{flex: 1}}>
                <Outlet/>
            </div>

            <Footer/>
        </Flex>
    );
}

export default Layout