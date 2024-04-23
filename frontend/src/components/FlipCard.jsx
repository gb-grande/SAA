import ReactCardFlip from 'react-card-flip';
import {Image, Text, Button, Stack, Center, Paper, SimpleGrid, Space} from "@mantine/core"
import {useDisclosure} from "@mantine/hooks";
import classes from './FlipCard.module.css'

// Exemplo:
//
//  <FlipCard
//      textFront="Nos ajude com a sua doação."
//      textBack="ABCD"
//      buttonText="DOE AGORA"
//      image="https://media-gru2-1.cdn.whatsapp.net/v/t61.24694-24/424425093_286940224099553_19848131652106230_n.jpg?ccb=11-4&oh=01_Q5AaIHiORn1CH8ly8YGXOC7U2tbG67Z7gX4oYR6vMyvuIwHW&oe=6630039C&_nc_sid=e6ed6c&_nc_cat=103"
//      imageAlt="Gato"/>
//
//
//

function FlipCard({image, imageAlt, textFront, textBack, buttonText, normalizedImgW = .5, style = {}, ...others}) {
    const [isFlipped, {toggle}] = useDisclosure();

    return (
        <ReactCardFlip isFlipped={isFlipped}>
            <Paper style={{overflow: "hidden", ...style}} radius="lg" withBorder bg="aprai-purple.3" pl={0} pr="sm" {...others}>
                <SimpleGrid {...others} cols={2}>
                    <Image
                        src={image}
                        alt={imageAlt}
                        h="100%"
                    />
                    <Stack justify='flex-center'>
                        <Space style={{flex: 1}}/>
                        <Text ta='center' c='black' fz="xl" fw="600">{textFront}</Text>
                        <Button h={50} classNames={{label: classes.buttonLabel}} bg='aprai-purple.5' onClick={toggle} radius="lg" fz="xl">{buttonText}</Button>
                        <Space style={{flex: 1}}/>
                    </Stack>
                </SimpleGrid>
            </Paper>

            <Paper style={{overflow: "hidden", ...style}} radius="lg" withBorder bg="aprai-purple.3" pl={0} pr="sm" {...others}>
                 <Center h={"100%"}>
                     <Text ta="center" fz="xl" fw="600">{textBack}</Text>
                 </Center>
            </Paper>
         </ReactCardFlip>
    )
}

export default FlipCard