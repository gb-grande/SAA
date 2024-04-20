import {Card, Image, Text, Title} from "@mantine/core";

export function PostCard({post, ...others}) {
    const {title, content, image} = post;
    return (
        <Card withBorder radius="md" p="md" {...others}>
            {image &&
                <Card.Section>
                    <Image src={image} alt={title} height={180}/>
                </Card.Section>
            }

            <Card.Section>
                <Title lineClamp={1}>{title}</Title>
                <Text>{content}</Text>
            </Card.Section>
        </Card>
    )
}