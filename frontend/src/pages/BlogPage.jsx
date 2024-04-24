import {PostCard} from "../components/PostCard.jsx";
import {Title, SimpleGrid, useMantineTheme, Center} from "@mantine/core";
import {useMediaQuery} from "@mantine/hooks";
import {useEffect, useState} from "react";

const mockData = [
    {
        id: 0,
        title: "Saiu os bichos!",
        content: "E quando saíram os bichos eles saíram e eles saíram e eles saíram e eles saíram e eles saíram e eles saíram e eles saíram e eles saíram e eles saíram e eles saíram e eles saíram e eles saíram e eles saíram e eles saíram e eles saíram e eles saíram e eles saíram e eles saíram e eles saíram e eles saíram e eles saíram e eles saíram e eles saíram e eles saíram e eles saíram e eles saíram e eles saíram e eles saíram e eles saíram e eles saíram e eles saíram e eles saíram e eles saíram e eles saíram",
        image: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        id: 1,
        title: "Saiu os bichos mais curto!",
        content: "E quando saíram os bichos eles saíram e só saíram mesmo :)",
        image: "https://images.pexels.com/photos/11596562/pexels-photo-11596562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        id: 2,
        title: "Saiu os bichos mas esse nem tem imagem então nem tem bicho eita!",
        content: "E quando saíram os bichos eles saíram e eles saíram mesmo caramba mas na verdade nem tinha bicho :( poxa eu queria os bichos soltos e livres e felizes em seus bichos felizes e os bichos saíam os bichos e os bichos saem os bichos",
    },
    {
        id: 3,
        title: "e os bichos voltaram se acalmem",
        content: "",
        image: "https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        id: 4,
        title: "eita o bicho!",
        content: "caramba deu ruim!",
        image: "imagemruim"
    }
]

function BlogPage(){
    //This might be overengineered.
    //Maybe it would be better to simply use breakpoints to set col count.
    const theme = useMantineTheme();
    const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
    const [windowWidth, setWindowWidth] = useState();

    useEffect(() => {
        const updateWindowWidth = () => setWindowWidth(window.innerWidth);
        updateWindowWidth();
        window.addEventListener('resize', updateWindowWidth);
        return () => window.removeEventListener('resize', updateWindowWidth);
    })

    const cardWidth = isMobile ? 272 : 352;
    const cardHeight = isMobile ? 272 : 272;
    const cards = mockData.map((post, index) => (
        <PostCard key={index} post={post} h={cardHeight} radius={30}/>
    ))

    const cardSpacing = 10;
    const colCount = Math.floor(windowWidth / (cardWidth + cardSpacing));
    return (
      <>
          <Title mb='sm'>Blog</Title>
          <SimpleGrid cols={colCount} spacing={cardSpacing} verticalSpacing={{base: 'sm', sm: 'md'}}>
              {cards}
          </SimpleGrid>
      </>
    );
}

export default BlogPage