import {Card, Image, Text, Title} from "@mantine/core";

export function PostCard({post}) {
    const {title, content, image} = post;
    return (
        <Card withBorder radius="md" p="md">
            <Card.Section>
                <Image src={image} alt={title} height={180}/>
            </Card.Section>

            <Card.Section>
                <Title>{title}</Title>
                <Text lineClamp={3}>{content.substring(0,)}</Text>
            </Card.Section>
        </Card>
    )
}