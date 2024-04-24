import {Title} from "@mantine/core";
import {useEffect, useState} from "react";
import PostGrid from "../components/PostGrid.jsx";
import {useViewportSize} from "@mantine/hooks";

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
    const {width} = useViewportSize();

    return (
      <>
          <Title mb='sm'>Blog</Title>
          <PostGrid data={mockData} containerWidth={width}/>
      </>
    );
}

export default BlogPage