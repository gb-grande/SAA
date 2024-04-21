import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import {Card, Image, Text, Button, Group, Stack} from "@mantine/core"

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

function FlipCard({image, imageAlt, textFront, textBack, buttonText, w= 400, h= 200, imgWPct = 0.5}) {
    const [isFlipped, setIsFliped] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        setIsFliped(state => !state);
    };
    
    return (
        <ReactCardFlip isFlipped={isFlipped}>
            <Card w={w} h={h} radius="md" withBorder bg="aprai-purple.3">
                <Group gap="xl" wrap="nowrap" justify="space-around">
                    <Card.Section>
                        <Image
                            src={image}
                            alt={imageAlt}
                            h={h}
                            w={w * imgWPct}
                        />
                    </Card.Section>
                    <Stack align='center' justify='flex-center' gap='lg'>
                        <Text ta='center' c='black' fz="xl" fw="600">{textFront}</Text>
                        <Button bg='aprai-purple.5' onClick={handleClick} radius="lg" fz="xl">{buttonText}</Button>
                    </Stack>
                </Group>
            </Card>

            <Card w={w} h={h} radius="md" withBorder bg="aprai-purple.3">
                <Stack h={h} align='center' justify='space-around'>
                    <Text fz="xl" fw="600">{textBack}</Text>
                    <Button bg='aprai-purple.5' onClick={handleClick} radius="lg" fz="xl" lg="md">Voltar</Button>
                </Stack>
            </Card>
        </ReactCardFlip>
    )
}

export default FlipCard