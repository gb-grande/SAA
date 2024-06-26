import ReactCardFlip from 'react-card-flip';
import {Image, Text, Button, Stack, Center, Paper, SimpleGrid, Space, Box} from "@mantine/core"
import {useDisclosure} from "@mantine/hooks";
import classes from "./FlipCard.module.css"
import EditableSectionText from "../editables/EditableSectionText.jsx";
import EditableSectionImage from "../editables/EditableSectionImage.jsx";

/**
 * A Flip Card component that displays a card with a front and back side.
 * The front side shows an image and the back side shows text.
 * The card can be flipped by clicking a button.
 * 
 * @param {string} buttonText - The text displayed on the flip button.
 * @param {number} normalizedImgW - The normalized width of the image (default is 0.5).
 * @param {object} style - Custom styles to apply to the card.
 * @param {string} textFront - The text displayed on the front side of the card.
 * @param {string} editableFrontTextSection - The front side section name for querying text from the backend.
 * @param {string} textBack - The text displayed on the back side of the card.
 * @param {string} editableBackTextSection - The back side section name for querying text from the backend.
 * @param {string} image - The URL of the image displayed on the front side of the card.
 * @param {string} imageAlt - The alt text for the image.
 * @param {string} editableImageSection - The image section name for querying text the image url from the backend.
 * @returns {JSX.Element} The FlipCard component.
 */
function FlipCard({buttonText, normalizedImgW = .5, style = {},
                      textFront, editableFrontTextSection, textBack, editableBackTextSection,
                      image, imageAlt, editableImageSection,
                      ...others}) {
    const [isFlipped, {toggle}] = useDisclosure();

    return (
        <ReactCardFlip isFlipped={isFlipped}>
            <Paper style={{overflow: "hidden", ...style}} radius="lg" withBorder bg="aprai-purple.3" pl={0} pr="sm" {...others}>
                <SimpleGrid {...others} cols={2}>
                    <Box {...others}>
                        {
                            editableImageSection
                                ? <EditableSectionImage section={editableImageSection}
                                                        alt={imageAlt}
                                                        {...others}/>
                                : <Image src={image}
                                         alt={imageAlt}
                                         h="100%"/>
                        }
                    </Box>
                    <Stack justify='flex-center'>
                        <Space style={{flex:1}}/>
                        {
                            editableFrontTextSection
                                ? <EditableSectionText section={editableFrontTextSection} textClassName={classes.cardText}/>
                                : <Text ta='center' c='black' fz="xl">{textFront}</Text>

                        }
                        <Button w={"100%"} h={40} bg='aprai-purple.5' onClick={toggle} radius="lg" fz="xl">{buttonText}</Button>
                        <Space style={{flex:1}}/>
                    </Stack>
                </SimpleGrid>
            </Paper>

            <Paper style={{overflow: "hidden", ...style}} radius="lg" withBorder bg="aprai-purple.3" pt="xs" pl="xs" pr="xs" {...others}>
                 <Center h={"100%"}>
                     {
                         editableBackTextSection
                             ? <EditableSectionText h={"80%"} section={editableBackTextSection}
                                                    textClassName={classes.cardText}
                                                    inputContainerStyle={{
                                                        height: "80%",
                                                        width: "100%",
                                                    }}
                                                    textContainerStyle={{
                                                        height: "100%",
                                                        width: "100%",
                                                        display: "flex",
                                                        flexDirection: "column",
                                                        justifyContent: "center"
                                                    }}
                             />
                             : <Text className={classes.cardText}>{textBack}</Text>
                     }
                 </Center>
            </Paper>
         </ReactCardFlip>
    )
}

export default FlipCard