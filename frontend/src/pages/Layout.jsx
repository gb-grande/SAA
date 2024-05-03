import {Box, Flex} from "@mantine/core";
import {Outlet} from "react-router-dom";
import Banner from "../components/Layout/Banner.jsx";
import Header from "../components/Layout/Header.jsx";
import Footer from "../components/Layout/Footer.jsx";


function Layout() {
    return (
        <Flex h="100vh" direction="column">
            <Banner/>
            <Header/>

            <Box p={'md'} style={{flex: 1}}>
                <Outlet/>
            </Box>

            <Footer/>
        </Flex>
    );
}

export default Layout