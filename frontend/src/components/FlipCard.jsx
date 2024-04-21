import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import {Card, Image, Text, Button, Group, Center, Stack} from "@mantine/core"

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

function FlipCard(props) {
    const [isFlipped, setIsFliped] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        setIsFliped(state => !state);
    };
    
    return (
        <div style={{maxWidth: 400}}>
            <ReactCardFlip isFlipped={isFlipped}>
                <Card h={200} radius="md" withBorder>
                    <Group gap="xl" wrap="nowrap" justify="space-around">
                        <div>
                            <Card.Section>
                                <Image
                                    src={props.image}
                                    alt={props.imageAlt}
                                    h={200}
                                    />
                            </Card.Section>
                        </div>
                        <Stack align='center' gap='lg'>
                            <Text>{props.textFront}</Text> 
                            <Button onClick={handleClick} radius="lg">{props.buttonText}</Button>
                        </Stack>
                    </Group>
                </Card>
                
                <Card h={200} radius="md" withBorder>
                    <Stack h={200} align='center' justify='space-around'>
                        <Text>{props.textBack}</Text>
                        <Button onClick={handleClick} radius="lg">Voltar</Button>
                    </Stack>
                </Card>
            </ReactCardFlip>
        </div>
    )
}

export default FlipCard