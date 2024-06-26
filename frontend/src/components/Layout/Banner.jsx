import {Center, Group, Image, Box} from "@mantine/core";
import logo from "../../assets/logo.jpeg";
import {HashLink} from "react-router-hash-link";
import SocialMediaIcon from "../SocialMediaIcon.jsx";

/**
 * Banner component renders layout banner.
 * 
 * @returns {JSX.Element} The Banner component.
 */
function Banner(){
    return (
        <Box pos="relative">
            <Center pos="relative">
                <HashLink to='/'>
                <Image w={{ base: "60vw", sm: "45vw", md: "30vw", lg: "25vw" }} h={"auto"} src={logo} />
                </HashLink>
            </Center>
            <Group style={{ position: "absolute", right: 10, bottom: 5 }}>
                <SocialMediaIcon media={'instagram'} />
                <SocialMediaIcon media={'facebook'} />
            </Group>
        </Box>
    )
}

export default Banner;