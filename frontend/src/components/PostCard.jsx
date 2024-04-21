import {Card, Image, Text, Title} from "@mantine/core";

export function PostCard({post, h, w, ...others}) {
    const {title, content, image} = post;

    return (
        <Card
            radius={0} shadow={"md"}
            h={h} w={w}
            bg="#392F88"
            {...others}
            component="a" href={`/blog/${post.id}`}
        >
            {image &&
                <Card.Section>
                    <Image src={image} alt={title} height={h ? 0.6*h : 180}/>
                </Card.Section>
            }

            <Card.Section p="sm">
                <Title order={4} lineClamp={2} c="white">{title}</Title>
                <Text c="white">{content}</Text>
            </Card.Section>
        </Card>
    )
}