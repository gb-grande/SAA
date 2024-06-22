import ReactCardFlip from 'react-card-flip';
import {Image, Text, Button, Stack, Center, Paper, SimpleGrid, Space} from "@mantine/core"
import {useDisclosure} from "@mantine/hooks";
import classes from "./FlipCard.module.css"
import EditableSectionText from "./EditableSectionText.jsx";
import EditableSectionImage from "./EditableSectionImage.jsx";

// [OLD] Usage example:
//
//  <FlipCard
//      textFront="Nos ajude com a sua doação."
//      textBack="ABCD"
//      buttonText="DOE AGORA"
//      image="https://media-gru2-1.cdn.whatsapp.net/v/t61.24694-24/424425093_286940224099553_19848131652106230_n.jpg?ccb=11-4&oh=01_Q5AaIHiORn1CH8ly8YGXOC7U2tbG67Z7gX4oYR6vMyvuIwHW&oe=6630039C&_nc_sid=e6ed6c&_nc_cat=103"
//      imageAlt="Gato"/>
//

/**
 * A Flip Card component that displays a card with a front and back side.
 * The front side shows an image and the back side shows text.
 * The card can be flipped by clicking a button.
 * 
 * @param {string} buttonText - The text displayed on the flip button.
 * @param {number} normalizedImgW - The normalized width of the image (default is 0.5).
 * @param {object} style - Custom styles to apply to the card.
 * @param {string} textFront - The text displayed on the front side of the card.
 * @param {string} textBack - The text displayed on the back side of the card.
 * @param {string} editableBackTextSection - The back side section name.
 * @param {string} image - The URL of the image displayed on the front side of the card.
 * @param {string} imageAlt - The alt text for the image.
 * @param {string} editableImageTextSection - The image side section name.
 * @returns The FlipCard component.
 */
function FlipCard({buttonText, normalizedImgW = .5, style = {},
                      textFront, textBack, editableBackTextSection,
                      image, imageAlt, editableImageTextSection,
                      ...others}) {
    const [isFlipped, {toggle}] = useDisclosure();

    return (
        <ReactCardFlip isFlipped={isFlipped}>
            <Paper style={{overflow: "hidden", ...style}} radius="lg" withBorder bg="aprai-purple.3" pl={0} pr="sm" {...others}>
                <SimpleGrid {...others} cols={2}>
                    {
                        editableImageTextSection
                            ? <EditableSectionImage section={editableImageTextSection}
                                                    alt={imageAlt}
                                                    h="100%"/>
                            : <Image src={image}
                                     alt={imageAlt}
                                     h="100%"/>

                    }
                    <Stack justify='flex-center'>
                        <Space style={{flex: 1}}/>
                        <Text ta='center' c='black' fz="xl" fw="600">{textFront}</Text>
                        <Button w={"100%"} h={40} bg='aprai-purple.5' onClick={toggle} radius="lg" fz="xl">{buttonText}</Button>
                        <Space style={{flex: 1}}/>
                    </Stack>
                </SimpleGrid>
            </Paper>

            <Paper style={{overflow: "hidden", ...style}} radius="lg" withBorder bg="aprai-purple.3" pt="xs" pl="xs" pr="xs" {...others}>
                 <Center h={"100%"}>
                     {
                         editableBackTextSection
                             ? <EditableSectionText h={"80%"} section={editableBackTextSection}
                                                    textClassName={classes.cardBackText}
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
                             : <Text className={classes.cardBackText}>{textBack}</Text>
                     }
                 </Center>
            </Paper>
         </ReactCardFlip>
    )
}

export default FlipCard