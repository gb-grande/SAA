import {ActionIcon, Center, Group, Image} from "@mantine/core";
import {IconBrandFacebook, IconBrandInstagram} from "@tabler/icons-react";
import logo from "../../assets/logo.jpeg";


function Banner(){
    return (
        <Center w={"100vw"} pos="relative">
            <Image w={{base: "100vw", sm: "45vw", md: "30vw", lg: "25vw"}} h={"auto"} src={logo}/>
            <Group style={{position: "absolute", right: 0, bottom: 0}}>
                <ActionIcon variant="filled" color="pink" size="xl" radius="xl" component="a" href="https://www.instagram.com/aprai.indaiatuba/">
                    <IconBrandInstagram style={{width: '100%', height: '100%'}}></IconBrandInstagram>
                </ActionIcon>

                <ActionIcon variant="filled" color="blue" size="xl" radius="xl" component="a" href="https://www.facebook.com/people/Aprai-Indaiatuba/100090048881690/">
                    <IconBrandFacebook style={{width: '100%', height: '100%'}}></IconBrandFacebook>
                </ActionIcon>
            </Group>
        </Center>
    )
}

export default Banner;