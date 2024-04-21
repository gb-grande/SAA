import {Carousel, CarouselSlide} from "@mantine/carousel";
import {PostCard} from "./PostCard.jsx";
import {useMediaQuery} from "@mantine/hooks";
import {Center, useMantineTheme} from "@mantine/core";

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

function PostCarousel({slideGap = "md", horPadding = "100", cardData = {h: 100, w: 100}, ...others}){
    const theme = useMantineTheme();
    const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

    const cards = mockData.map((data, i) => {
        return (
            //The slide is slightly bigger than the card to ensure it doesn't crop shadows
            <CarouselSlide key={i} h={1.1 * cardData.h}>
                <Center>
                    <PostCard post={data} {...cardData}/>
                </Center>
            </CarouselSlide>)
    })

    return (
        <Carousel
            pl={horPadding}
            pr={horPadding}
            slideSize={isMobile ? '100%' : '33.33333333%'}
            slideGap={slideGap}
            align={isMobile ? 'center' : 'start'}
            h={"100%"}
            {...others}
        >
            {cards}
        </Carousel>
    );
}

export default PostCarousel;