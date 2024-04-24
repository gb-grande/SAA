import {PostCard} from "./PostCard.jsx";
import {SimpleGrid, useMantineTheme} from "@mantine/core";
import {useMediaQuery} from "@mantine/hooks";

function PostGrid({data = [], containerWidth}){
    //This might be over-engineered.
    //Maybe it would be better to simply use breakpoints to set col count.
    const theme = useMantineTheme();
    const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

    const cardWidth = isMobile ? 272 : 352;
    const cardHeight = isMobile ? 272 : 272;
    const cards = data.map((post, index) => (
        <PostCard key={index} post={post} h={cardHeight} radius={30}/>
    ));

    const cardSpacing = 10;
    const colCount = Math.floor(containerWidth / (cardWidth + cardSpacing));
    return (
        <SimpleGrid cols={colCount} spacing={cardSpacing} verticalSpacing={{base: 'sm', sm: 'md'}}>
            {cards}
        </SimpleGrid>
    );
}

export default PostGrid