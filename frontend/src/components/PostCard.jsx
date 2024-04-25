import {Card, Image, Text, Title} from "@mantine/core";

export function PostCard({post, h, w, light=false, showDate=true, imgHPct=0.6, ...others}) {
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
                    <Image src={image} alt={title} height={imgHPct * h}/>
                </Card.Section>
            }

            <Card.Section p='sm' pt={image ? 0 : 'sm'}>
                {showDate &&
                    <Text size={'xs'} c={textColor}>{post.date.toISOString().split('T')[0]}</Text>
                }
                <Title order={4} lineClamp={2} c={textColor}>{title}</Title>
                <Text c={textColor}>{content}</Text>
            </Card.Section>
        </Card>
    )
}