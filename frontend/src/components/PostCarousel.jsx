import {Carousel, CarouselSlide} from "@mantine/carousel";
import {PostCard} from "./PostCard.jsx";

const mockData = [
    {
        title: "Saiu os bichos!",
        content: "E quando saíram os bichos eles saíram e eles saíram e eles saíram e eles saíram e eles saíram e eles saíram e eles saíram e eles saíram e eles saíram e eles saíram e eles saíram e eles saíram e eles saíram e eles saíram e eles saíram e eles saíram e eles saíram e eles saíram e eles saíram e eles saíram e eles saíram e eles saíram e eles saíram e eles saíram e eles saíram e eles saíram e eles saíram e eles saíram e eles saíram e eles saíram e eles saíram e eles saíram e eles saíram e eles saíram",
        image: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        title: "Saiu os bichos!",
        content: "E quando saíram os bichos eles saíram e só saíram mesmo :)",
        image: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        title: "Saiu os bichos!",
        content: "E quando saíram os bichos eles saíram e eles saíram mesmo caramba mas na verdade nem tinha bicho :(",
    }
]

function PostCarousel(){

    const cards = mockData.map((data, i) => {
        return (<CarouselSlide><PostCard post={data} key={i}/></CarouselSlide>)
    })

    return (
        <Carousel
            slideSize="33.333333%"
            slideGap="md"
            color="green"
            align="start"
        >
            {cards}
        </Carousel>
    );
}

export default PostCarousel;