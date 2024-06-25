import {Box, Flex} from "@mantine/core";
import {Outlet} from "react-router-dom";
import Banner from "../components/Layout/Banner.jsx";
import Header from "../components/Layout/Header.jsx";
import Footer from "../components/Layout/Footer.jsx";

/**
 * The Layout serves as the overall layout structure for the application.
 * It includes banner, header and footer structure and navigation across different pages.
 * 
 * @returns {JSX.Element} The Layout itself.
 */
function Layout() {
    return (
        <Flex h="100vh" direction="column" justify='flex-start'>
            <Banner/>
            <Header/>

            <Box p='md' style={{flex:1}}>
                <Outlet/>
            </Box>

            <Footer/>
        </Flex>
    );
}

export default Layout