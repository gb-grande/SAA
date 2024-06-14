import {Box, Flex} from "@mantine/core";
import {Outlet} from "react-router-dom";
import Banner from "../components/Layout/Banner.jsx";
import Header from "../components/Layout/Header.jsx";
import Footer from "../components/Layout/Footer.jsx";


function Layout() {
    return (
        <Flex h="100vh" direction="column" justify='flex-start'>
        {/*<div style={{*/}
        {/*    w: '100vw',*/}
        {/*    h: '100vh',*/}
        {/*    display: 'flex',*/}
        {/*    flexDirection: 'column',*/}
        {/*    justifyContent: 'flex-start',*/}
        {/*}}>*/}
            <Banner/>
            <Header/>

            <Box p='md' style={{flex:1}}>
                <Outlet/>
            </Box>

            <Footer/>
        {/*</div>*/}
        </Flex>
    );
}

export default Layout