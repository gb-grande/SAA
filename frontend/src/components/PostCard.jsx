import {Card, Image, Text, Title} from "@mantine/core";

export function PostCard({post, h= 300, w= 400, imageHeight = 180, ...others}) {
    const {title, content, image} = post;
    if (!image) imageHeight = 0;

    return (
        <Card
            withBorder radius="md" p="md" h={h} w={w}
            bg="#392F88"
            {...others}
            component="a" href={`/blog/${post.id}`}
        >
            {image &&
                <Card.Section>
                    <Image src={image} alt={title} height={imageHeight}/>
                </Card.Section>
            }

            <Card.Section p="sm">
                <Title fz="md" lineClamp={2} c="white">{title}</Title>
                <Text c="white">{content}</Text>
            </Card.Section>
        </Card>
    )
}