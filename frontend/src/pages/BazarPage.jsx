import {Pagination, Title, Center, Group, Button} from "@mantine/core";
import {useState} from "react";
import PostGrid from "../components/PostGrid.jsx";
import {useViewportSize} from "@mantine/hooks";
import ProtectedComponent from "../components/ProtectedComponent.jsx";
import {HashLink} from "react-router-hash-link";
import useFetch from "../hooks/useFetch.jsx";

function* yieldPages(data, pageSize) {
    for (let i = 0; i < data.length; i += pageSize){
        yield data.slice(i, i + pageSize);
    }
}

/**
 * The BazarPage component displays the Bazar section of the website.
 * 
 * @returns {JSX.Element} The Bazar Page itself.
 */
function BazarPage() {
    const [currentPage, setCurrentPage] = useState(1);
    const {result: posts} = useFetch('api/posts?type=bazar', {
        defaultValue: []
    });
    const {width} = useViewportSize();
    const cardsPerPage = 12;

    const pages = [...yieldPages(posts, cardsPerPage)];
    return (
      <>
          <Group>
              <Title mb='sm'>Bazar</Title>
              <ProtectedComponent>
                  <Button component={HashLink} to={'/admin/bazar/'}>Criar</Button>
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

export default BazarPage