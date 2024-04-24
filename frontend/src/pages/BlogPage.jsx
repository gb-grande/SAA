import {PostCard} from "../components/PostCard.jsx";
import {Title, SimpleGrid} from "@mantine/core";

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
    const cards = mockData.map((post, index) => (
        <PostCard post={post} h={300} radius={30} key={index}/>
    ))

    return (
      <>
          <Title>Blog</Title>
          <SimpleGrid cols={{base: 1, xs: 2, sm: 3, lg: 4, xl: 5}} spacing='md' verticalSpacing='md'>
              {cards}
          </SimpleGrid>
      </>
    );
}

export default BlogPage