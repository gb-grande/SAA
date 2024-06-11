import {ManageAdminCard} from "./ManageAdminCard.jsx";
import {SimpleGrid, useMantineTheme} from "@mantine/core";
import {useMediaQuery} from "@mantine/hooks";

function ManageAdminGrid({data = [], containerWidth}){
    //This might be over-engineered.
    //Maybe it would be better to simply use breakpoints to set col count.
    const theme = useMantineTheme();
    const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

    const cardWidth = isMobile ? 272 : 450;
    const cardHeight = isMobile ? 70 : 70;
    const cards = data.map((post, index) => (
        <div>
            <ManageAdminCard key={index} post={post} h={cardHeight} radius='xl' light={true} imgHPct={0.5}/>
           
        </div>
    ));

    const cardSpacing = 10;
    const colCount = Math.floor(containerWidth / (cardWidth + cardSpacing));
    return (
        <SimpleGrid cols={colCount} spacing={cardSpacing} verticalSpacing={{base: 'sm', sm: 'md'}}>
            {cards}
        </SimpleGrid>
    );
}

export default ManageAdminGrid