import {Pagination, Title, Center, Group, Button} from "@mantine/core";
import {useEffect, useState} from "react";
import PostGrid from "../components/PostGrid.jsx";
import {useViewportSize} from "@mantine/hooks";
import ProtectedComponent from "../components/ProtectedComponent.jsx";
import axios from "axios";

const mockData = [...Array(50).keys()].map(i => {
    return {
        id: i,
        title: "Título do post" + i,
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel tincidunt purus, vel vulputate augue. Integer ut ex metus. Nulla imperdiet lobortis felis, sed pellentesque magna rutrum aliquet. Maecenas nec tincidunt leo, eu faucibus lectus. Maecenas hendrerit purus et diam rhoncus scelerisque. Cras tempor odio ac mi sodales, non laoreet nibh egestas. Quisque non luctus lacus. \n        Quisque pulvinar faucibus elementum. Ut cursus augue vitae consectetur tincidunt. Pellentesque dignissim, diam in ullamcorper rhoncus, ex tellus pharetra lorem, sed accumsan nisl dui consequat ipsum. Donec mollis vitae tortor faucibus consectetur. Aenean dolor urna, dapibus ut risus ut, aliquet tempor nunc. Suspendisse tempor dignissim nunc id mattis. Nullam at magna lorem.",
        image: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        date: new Date()
    }
})

function* yieldPages(data, pageSize){
    for (let i = 0; i < data.length; i += pageSize){
        yield data.slice(i, i + pageSize);
    }
}

function BlogPage(){
    const [currentPage, setCurrentPage] = useState(1);
    const [posts, setPosts] = useState([])
    console.log(posts)
    const {width} = useViewportSize();

    const cardsPerPage = 12;

    useEffect(() => {
        try{
            axios.get(`api/posts`).then(res => {
                setPosts(res.data)
            })
        }catch (err) {
            console.log(err)
        }
    }, [posts]);

    const pages = [...yieldPages(posts, cardsPerPage)];
    return (
      <>
          <Group>
              <Title mb='sm'>Blog</Title>
              <ProtectedComponent>
                  <Button component='a' href={'/admin/blog/'}>Criar</Button>
              </ProtectedComponent>
          </Group>
          <PostGrid data={pages[currentPage - 1]} containerWidth={width}/>
          <Center>
              <Pagination m='lg' radius='md' withEdges
                  total={pages.length} value={currentPage} onChange={setCurrentPage}/>
          </Center>
      </>
    );
}

export default BlogPage