import {Card, Image, Text, Title} from "@mantine/core";

export function PostCard({post, h, w, light = false, ...others}) {
    const {title, content, image} = post;

    const bgColor = light ? "aprai-purple.3" : "aprai-purple.9";
    const textColor = light ? "aprai-purple.9" : "white";
    return (
        <Card
            radius={0} shadow={"md"}
            h={h} w={w}
            bg={bgColor}
            {...others}
            component="a" href={`/blog/${post.id}`}
        >
            {image &&
                <Card.Section>
                    <Image src={image} alt={title} height={h ? 0.6*h : 180}/>
                </Card.Section>
            }

            <Card.Section p="sm">
                <Title order={4} lineClamp={2} c={textColor}>{title}</Title>
                <Text c={textColor}>{content}</Text>
            </Card.Section>
        </Card>
    )
}