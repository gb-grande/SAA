import {PostCard} from "./PostCard.jsx";
import {SimpleGrid, useMantineTheme} from "@mantine/core";
import {useMediaQuery} from "@mantine/hooks";

/**
 * A PostGrid component to display a grid of posts.
 * 
 * @param {Array} data The array of posts to display in the grid.
 * @param {string} containerWidth The width of the grid container.
 * @returns {JSX.Element} The PostGrid component.
 */
function PostGrid({data = [], containerWidth}){
    //This might be over-engineered.
    //Maybe it would be better to simply use breakpoints to set col count.
    const theme = useMantineTheme();
    const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

    const cardWidth = isMobile ? 272 : 352;
    const cardHeight = isMobile ? 272 : 272;
    const cards = data.map((post, index) => (
        <PostCard key={index} post={post} h={cardHeight} radius='xl' light={true} imgHPct={0.5}/>
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