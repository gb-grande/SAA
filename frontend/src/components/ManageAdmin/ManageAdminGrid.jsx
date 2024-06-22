import ManageAdminCard from "./ManageAdminCard.jsx";
import {SimpleGrid, useMantineTheme} from "@mantine/core";
import {useMediaQuery} from "@mantine/hooks";

/**
 * ManageAdminGrid component displays a grid of admin cards for managing admin users.
 * 
 * @param {Array} data An array of admin user objects to be displayed in the grid.
 * @param {function} onAdminDeleted Callback function invoked when an admin is deleted.
 * @param {string} containerWidth Optional width of the container for the grid.
 * @returns The ManageAdminGrid component.
 */
function ManageAdminGrid({data = [], onAdminDeleted, containerWidth}){
    const theme = useMantineTheme();
    const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

    const cardWidth = isMobile ? 272 : 450;
    const cardHeight = isMobile ? 70 : 70;
    const cards = data.map((admin, index) => (
        <ManageAdminCard key={index} admin={admin} onAdminDeleted={onAdminDeleted} h={cardHeight} radius='xl'/>
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