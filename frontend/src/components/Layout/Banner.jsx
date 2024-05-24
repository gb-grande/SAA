import {ActionIcon, Center, Group, Image} from "@mantine/core";
import {IconBrandFacebook, IconBrandInstagram} from "@tabler/icons-react";
import logo from "../../assets/logo.jpeg";
import {HashLink} from "react-router-hash-link";
import SocialMediaIcon from "../SocialMediaIcon.jsx";


function Banner(){
    return (
        <Center w={"100vw"} pos="relative">
            <HashLink to='/'>
                <Image w={{base: "100vw", sm: "45vw", md: "30vw", lg: "25vw"}} h={"auto"} src={logo}/>
            </HashLink>
            <Group style={{position: "absolute", right: 5, bottom: 5}}>
                <SocialMediaIcon media={'instagram'}/>
                <SocialMediaIcon media={'facebook'}/>
            </Group>
        </Center>
    )
}

export default Banner;